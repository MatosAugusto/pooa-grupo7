import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import { useRoutes } from './routes';
import bodyParser from 'body-parser';
dotenv.config();


const PORT = process.env.PORT || 8091;
const app = express();
app.use(bodyParser.json());
useRoutes(app);

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'ok'
    })
})

app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));