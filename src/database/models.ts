import { Sequelize } from "sequelize";
import { AppServerConstant } from "../constants/constant";
import { logger } from "../utils/logger";
import { userModel } from "../app/user/user.model";

export class ModelLoader {
  private static instance: ModelLoader;
  private UserModel : userModel;

  
  private constructor() {

    this.UserModel = userModel.getInstance();
    
  }

  public static getInstance(): ModelLoader {
    if (!ModelLoader.instance) {
      ModelLoader.instance = new ModelLoader();
    }
    return ModelLoader.instance;
  }

  public initializeModels(sequelize: Sequelize): void {
    try {
      
       this.UserModel.initializeModel(sequelize);
   
      

    } catch (error) {
      logger.error(
        `${AppServerConstant.ERROR_MESSAGES.DB_MODELS_INIT_FAILED} - ${error.message}`
      );

      console.log(error);
    }
  }

  public associateModels(): void {
    try {
     

      this.UserModel.associationModel();
     

    } catch (error) {
      logger.error(
        `${AppServerConstant.ERROR_MESSAGES.DB_MODELS_ASSOCIATION_FAILED} - ${error.message}`
      );

      console.log(error);
    }
  }
}