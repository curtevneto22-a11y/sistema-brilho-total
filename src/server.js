import express from 'express';
import servicoRoutes from './routes/servicoRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import enderecoRoutes from './routes/enderecoRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import veiculoRoutes from './routes/veiculoRoutes.js';

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

// Registar a rota de serviços
app.use('/servicos', servicoRoutes);
app.use('/clientes', clienteRoutes)
app.use('/enderecos', enderecoRoutes)
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/veiculos', veiculoRoutes);


// Tratamento de erros centralizado (para responder aos erros do ServicoError)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message || 'Erro interno do servidor.' });
});

app.listen(port, ()=> {
    console.log("servidor rodando na porta "+ port)
})
