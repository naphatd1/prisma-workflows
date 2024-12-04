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
app.get('/api', (_:Request, res:Response) => {
    res.send('Hello World api 2')
})
app.get('/api', (_:Request, res:Response) => {
    res.send('Hello World api 4')
})
app.get('/api', (_:Request, res:Response) => {
    res.send('Hello World api 4')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🏄🏽‍♂️ Server Listen on port ${port}`);
});
