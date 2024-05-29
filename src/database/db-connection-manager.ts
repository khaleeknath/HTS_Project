// DB Connection Manager
import { Sequelize } from 'sequelize';

import { logger } from '../utils/logger';
import { handleError } from '../helpers/error.helper';
import { AppServerConstant } from '../constants/constant';
import { DatabaseConfig } from '../core/base.interface';
import { ModelLoader } from './models';

const ENVConfig = require(`../config/${process.env.NODE_ENV}.json`);

/**
 * Manages all aspects of database connection.
 * @export
 * @class AppDBConnectionManager
 */
export class AppDBConnectionManager {

    private static instance: AppDBConnectionManager;
    public dbClient: Sequelize;
    private databaseConfig: DatabaseConfig;
    private modelLoader: ModelLoader;

    /**
     *Creates an instance of AppDBConnectionManager.
     * @memberof AppDBConnectionManager
     */
    private constructor() {
        this.modelLoader = ModelLoader.getInstance();
    }

    /**
     * The static method that controls the access to the singleton instance.
     */
    public static getInstance(): AppDBConnectionManager {
        if (!AppDBConnectionManager.instance) {
            AppDBConnectionManager.instance = new AppDBConnectionManager();
        }
        return AppDBConnectionManager.instance;
    }

    /**
     * @memberof AppDBConnectionManager
     */
    public async initializeConnection (databaseConfig: DatabaseConfig): Promise<void> {
        this.databaseConfig = databaseConfig;
        try {
            this.dbClient = new Sequelize(this.databaseConfig.DATABASE, this.databaseConfig.USER, this.databaseConfig.PASSWORD, {
                host: this.databaseConfig.HOST,
                dialect: 'mysql',
                // logging: false,
            
               
                define: {
                    timestamps: false,
                    freezeTableName: true
                },
            });
            await this.checkAttemptsCompletionError();
            this.modelLoader.initializeModels(this.dbClient);
            this.modelLoader.associateModels();
        } catch (error) {
            logger.error(`${AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION} - %o`, error);
            throw new Error(`${AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION} - ${error.message}`);
        }
    }

    public async closeConnection(): Promise<void> {
        return this.dbClient.close();
    }

    /**
     * @private
     * @memberof BuzzDBConnectionManager
     */
    private readonly checkConnection = (delayTime: number): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
            setTimeout(() => {
                this.dbClient
                    .authenticate()
                    .then(() => {
                        logger.info(AppServerConstant.SUCCESS_MESSAGES.SUCCESS_CONNECTION_TEXT);
                        resolve(true);
                    })
                    .catch(err => {
                        logger.error('Error: %s', err.message);
                        resolve(false);
                    });
            }, delayTime);
        });
    }

    /**
     * @private
     * @returns {Promise<void>}
     * @memberof BuzzDBConnectionManager
     */
    private async checkAttemptsCompletionError(): Promise<void> {
        let attempts = 1;
        let success: boolean = await this.checkConnection(0);
        while (success !== true && attempts < this.databaseConfig.RETRY_ATTEMPTS) {
            attempts++;
            success = await this.checkConnection(this.databaseConfig.RETRY_TIME);
            logger.info('attempt number %s', attempts);
        }
        if (!success) {
            throw new Error(AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION)
        }
    }
}
