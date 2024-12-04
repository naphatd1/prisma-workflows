import express, { Express,Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

app.get('/', (_:Request, res:Response) => {
    res.send('Hello World API')
})
app.get('/home', (_:Request, res:Response) => {
    res.send('Hello World home')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🏄🏽‍♂️ Server Listen on port ${port}`);
});
