import { Sequelize } from "sequelize/types";
import { UserSchema } from "./user.schema";




export class userModel{


    private static instance :userModel;

    public user;

    public static getInstance():userModel{

        if(!userModel.instance)
        {
            userModel.instance = new userModel();
        }
        return userModel.instance;
    }

    public initializeModel(sequelize:Sequelize)
    {
        
        this.user =sequelize.define("tbl_user", UserSchema())

         
    }

    public associationModel(): void{
 
     
    }
}