import 'express-async-errors'
import express from 'express'
import rotas from './routes/rotas';
import controleErro from './middlewares/controleDeErros';
import ApiError from './errors/ApiError';

const app = express();

app.use(express.json());
app.use(rotas)
app.use((err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    controleErro(err, req, res, next);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})