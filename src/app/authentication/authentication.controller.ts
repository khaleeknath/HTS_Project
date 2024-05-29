import { NextFunction, Request, Response } from "express";
import { AppServerConstant } from "../../constants/constant";
import { handleResult } from "../../utils/app.util";
import { IRequest } from "./authentication.interface";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationController
{

    private authenticationService: AuthenticationService;

    constructor ()
    {
        this.authenticationService = new AuthenticationService();
    }





    public async signUpUser ( req: Request, res: Response, next: NextFunction ): Promise<any>
    {

        try
        {
           
            const user = await this.authenticationService.signUpUser( req.body);
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, user );

        } catch ( error )
        {
            console.log( error )
            return next( error );
        }

    }



    public async signInUser ( req: Request, res: Response, next: NextFunction ): Promise<any>
    {

        try
        {
           
            const user = await this.authenticationService.signInUser(req.body.email, req.body.password);
            handleResult( res, AppServerConstant.RESPONSE_CODE.OK, AppServerConstant.SUCCESS_MESSAGES.SUCCESS, user );

        } catch ( error )
        {
            console.log( error )
            return next( error );
        }

    }

}

 
    

