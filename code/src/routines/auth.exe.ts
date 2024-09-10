import { Request, Response, NextFunction } from 'express'

const login = (req: Request, res: Response) => {
    res.render('login/login_01.html')
}

const logout = (req: Request, res: Response) => {
    res.send('One User Root')
}

const changeInfo = (req: Request, res: Response) => {
    res.send('One User Root')
}

export { login, logout, changeInfo }