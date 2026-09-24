import 'dotenv/config';
import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import enderecoRoutes from './routes/enderecoRoutes.js';

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use('/clientes', clienteRoutes)
app.use('/enderecos', enderecoRoutes)

app.listen(port, ()=> {
    console.log("servidor rodando na porta "+ port)
})