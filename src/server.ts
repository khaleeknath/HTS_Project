/** Main server file  */
import express from "express";
import path from "path";
import cookieparser from "cookie-parser";

import { AppApiConstant } from "./constants/api.constant";
import { logger } from "./utils/logger";
import { handleError } from "./helpers/error.helper";
import { AppServerConstant } from "./constants/constant";
import { handleResult } from "./utils/app.util";
import { AppDBConnectionManager } from "./database/db-connection-manager";
import { AuthenticationRoutes } from "./app/authentication/authentication.routes";
import morgan from "morgan";
import bodyParser from "body-parser";
import { AuthenticationService } from "./app/authentication/authentication.service";




const ENVConfig = require(`./config/${process.env.NODE_ENV}.json`);

/**
 * @export
 * @class Server
 */
export class Server {
  public app: express.Application;
  private retryAttempt: number;

  constructor(private readonly envConfig) {
    this.retryAttempt = 0;
    this.app = express();
  }

  public async connectToServerResources(): Promise<void> {
    try {
      const dbConnectionManager = AppDBConnectionManager.getInstance();
      await dbConnectionManager.initializeConnection(ENVConfig.MYSQL);
    } catch (error) {
      console.log("==== in connectToServerResources catch ", error.message);
      logger.error(
        `${AppServerConstant.ERROR_MESSAGES.ERROR_SERVER_RESOURCES_CONNECTION_FAILURE} : %o`,
        error
      );
    } finally {
      this.initializeRoutes();
    }
  }

  // application routes
  private initializeRoutes(): void {
    this.app.use(morgan("dev"));
    this.app.use(
      "/static",
      express.static(path.join(__dirname, "/../src/public"))
    );

    this.app.use(express.json({
      limit: '50mb'
    }));

    this.app.use(express.urlencoded({ limit:'50mb', parameterLimit: 1000000,extended: true }));

    this.app.set("view engine", "ejs");
    this.app.use('/upload',express.static(path.join(__dirname,'../src/upload')))

    this.app.set("views", path.join(__dirname, "/../src/views"));

    this.app.use(cookieparser());

    this.app.use(
      AppApiConstant.API.CONTENT,
      (req, res, next) => {
        res.setHeader(
          AppServerConstant.CORS.CONTENT_TYPE,
          AppServerConstant.CORS.APPLICATION_JSON
        );
        res.header(
          AppServerConstant.CORS.ACCESS_CONTROL_ALLOW_ORIGIN,
          AppServerConstant.CORS.ALL
        );
        res.header(
          AppServerConstant.CORS.ACCESS_CONTROL_ALLOW_METHODS,
          AppServerConstant.CORS.ALL_METHODS
        );
        res.header(
          AppServerConstant.CORS.ACCESS_CONTROL_ALLOW_HEADERS,
          AppServerConstant.CORS.ALL_HEADERS
        );
        next();
      },
      new AuthenticationRoutes().router
    );

    this.app.use(async (err, req, res, next) => {

      console.log(err);

      err.statusCode = 500;
      handleError(err, res);
    });
  }
}
