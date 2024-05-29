import { NextFunction, Request, Response } from "express";
 import { userModel } from "../user/user.model";
import { IRequest } from "./authentication.interface";
const ENVConfig = require( `../../config/${ process.env.NODE_ENV }.json` );
export class AuthenticationMiddleWare
{
     private readonly UserModel: userModel;
  
    constructor ()
    {
         this.UserModel = userModel.getInstance();
    }



    public async checkDataForSignUp ( req: IRequest, res: Response, next: NextFunction ): Promise<void>
    {

        try
        {

            if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
                throw new Error( "All the Fields are required!" );
            }
           
                next();

        } catch ( error )
        {
            error.statusCode = 403;

            return next( error );
        }
    }



    public async checkDataForSignIn ( req: IRequest, res: Response, next: NextFunction ): Promise<void>
    {

        try
        {

            if (!req.body.email || !req.body.password) {
                throw new Error( "All the Fields are required!" );
            }
           
                next();

        } catch ( error )
        {
            error.statusCode = 403;

            return next( error );
        }
    }



}