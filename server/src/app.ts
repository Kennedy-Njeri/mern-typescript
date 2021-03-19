import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import connectDB from './config/db'

import todoRoutes from './routes/todosRoutes'

const app: Express = express()

const PORT: string | number = process.env.PORT || 5000

dotenv.config()

connectDB()


app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(todoRoutes)




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    })