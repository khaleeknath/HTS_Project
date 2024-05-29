import { Router } from "express";
import { AppApiConstant } from "../../constants/api.constant";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationMiddleWare } from "./authentication.middleware";

export class AuthenticationRoutes
{

    public router: Router;
    private readonly authenticationController: AuthenticationController;
    private readonly authenticationMiddleware: AuthenticationMiddleWare;

    constructor ()
    {

        this.router = Router();
        
        this.authenticationController = new AuthenticationController();
        this.authenticationMiddleware = new AuthenticationMiddleWare();
        
        this.routes();
    }

    public routes (): void
    {



        this.router.post(
            AppApiConstant.API.SIGNUP,
            this.authenticationMiddleware.checkDataForSignUp.bind(this.authenticationMiddleware),
            this.authenticationController.signUpUser.bind( this.authenticationController )
        );




        this.router.post(
            AppApiConstant.API.SIGNIN,
            this.authenticationMiddleware.checkDataForSignIn.bind(this.authenticationMiddleware),
            this.authenticationController.signInUser.bind( this.authenticationController )
        );





    }
}