import { AppDBConnectionManager } from "../../database/db-connection-manager";
import { userModel } from "../user/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";

const ENVConfig = require(`../../config/${process.env.NODE_ENV}.json`);
export class AuthenticationService {

  private UserModel : userModel;
  private dbConnectionManager: AppDBConnectionManager;

  constructor() {

    this.UserModel = userModel.getInstance();
    this.dbConnectionManager = AppDBConnectionManager.getInstance();
  
  }

  public async signToken(id): Promise<any> {
    return jwt.sign({ id: id }, ENVConfig.SECRET_KEY);
  }

  public async signToke(user): Promise<any> {
    return jwt.sign({ id: user.id, role: user.role }, ENVConfig.SECRET_KEY);
  }

	public verifyToken(token) {
		try{
			return  jwt.verify(token, ENVConfig.SECRET_KEY);
		}
		catch(error) {
        return null;
		}
	}



  public async signUpUser(data): Promise<any> {

    try {

      let result = await this.UserModel.user.create(data);



      return result;
    }
    catch (error) {
      error.statusCode = 400;
      console.log(error);
      throw error;
    }
  }



  public async signInUser(email: string, password: string): Promise<any> {

    try {

      let result = null;

      const userData = await this.dbConnectionManager.dbClient.transaction(async (t) => {

        const user = await await this.UserModel.user.findOne({ raw: true, where: { email }, transaction: t });
        return user;

      });

      if (!userData || !bcrypt.compareSync(password, userData.password)) {
        throw new Error("wrong user id or password");
      } else {
        const token = await this.signToken(userData.id);


        const updateUserData =
          await this.dbConnectionManager.dbClient.transaction(async (t) => {
            const updateUser = await this.UserModel.user.update(
              { token: token },
              { where: { id: userData.id }, transaction: t }
            );

            return updateUser;
          });


        const updatedUser = await this.UserModel.user.findOne({
          where: { email },
        });
        result = updatedUser;
      }

      return result;
    }
    catch (error) {
      error.statusCode = 400;
      console.log(error);
      throw error;
    }
  }

}
