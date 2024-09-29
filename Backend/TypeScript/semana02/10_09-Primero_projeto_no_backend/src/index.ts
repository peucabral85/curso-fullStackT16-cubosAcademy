import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import rotas from './routes/rotas';
import controleDeErros from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use(rotas);
app.use(controleDeErros);

app.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000');
})