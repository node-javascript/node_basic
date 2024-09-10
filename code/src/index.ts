import path from 'path';
import dotenv from 'dotenv'
import morgan from 'morgan'
import nunjucks from 'nunjucks'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import express, { Express, Request, Response, NextFunction } from 'express'

import authController from './controller/auth.ctrl'
import userController from './controller/user.ctrl'

const app: Express = express();

dotenv.config();
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
})
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/upload', express.static(path.join(__dirname, 'upload')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// extended: true, 중복된 객체(복잡한 자료 값) 처리
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
        httpOnly: true,
        secure: false
    }
}))

app.use('/auth', authController)
app.use('/user', userController)
app.get('/', (req: Request, res: Response) => {
    res.render('test.html', { title: 'Express Sample' })
})

// app.all('*', () => {
//     throw new Error('catch me if you can!');
// })

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
    // res.status(err.status || 500)
    res.render('error')
}

app.use(errorHandler)

app.listen(app.get('port'), () => {
    console.log(`Runninng :: http://localhost:${app.get('port')}`)
})