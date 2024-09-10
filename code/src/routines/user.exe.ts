import { supabase } from '../config/db';
import { Request, Response, NextFunction } from 'express'

const userAll = async (req: Request, res: Response) => {
    try {
        let { data, error }
            = await supabase.from('page').select('*')

        res.status(200).json(data);

    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ message: 'Error' })
    }

}

const userOne = (req: Request, res: Response) => {
    res.send('One User Root')
}

const httpSignUp = (req: Request, res: Response) => {
    throw new Error();
}

const httpSignIn = (req: Request, res: Response) => {
    throw new Error('Bad request');
}

const httpSignOut = (req: Request, res: Response) => {
    throw new Error('Another bad request');
}

export { userAll, userOne, httpSignUp, httpSignIn, httpSignOut }