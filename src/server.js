import express from 'express';
import servicoRoutes from './routes/servicoRoutes.js';


const app = express();

app.use(express.json());

// Registar a rota de serviços
app.use('/servicos', servicoRoutes);


// Tratamento de erros centralizado (para responder aos erros do ServicoError)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message || 'Erro interno do servidor.' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});