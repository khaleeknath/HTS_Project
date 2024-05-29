import { Response } from 'express';
import { AppServerConstant } from '../constants/constant';

export const handleResult = <T>(res: Response, statusCode: number, message: string, data: T = null) => {
  
  return res.status(statusCode).send({
    statusCode,
    message,
    status: AppServerConstant.SUCCESS_MESSAGES.SUCCESS,
    data,
  });

};

export const handleTemplate = <T>(res: Response, page, data) => {

  return res.render(page, data);

};

export const isStringEqualIgnoreCase = (referenceStr: string, compareStr: string) => {

  return referenceStr.localeCompare(compareStr, 'en', { sensitivity: 'base' }) === 0;

};
