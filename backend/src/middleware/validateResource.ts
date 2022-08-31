import { Request, Response, NextFunction } from 'express';
import logger from "../utils/logger"
import { AnyZodObject } from 'zod'

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => { 
    
    logger.info({body : req.body})
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        })
        next();
    } catch (e: any) {
        return res.status(400).send(e.errors);
    }
}
export default validate
