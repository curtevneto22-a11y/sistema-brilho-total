import { Router } from 'express';
import gerenciarServico from '../services/gerenciarServico.js';

const router = Router();

// GET /servicos - Listar todos os serviços
router.get('/', async (req, res, next) => {
    try {
        const servicos = await gerenciarServico.recuperarServico();
        res.status(200).json(servicos);
    } catch (error) {
        next(error);
    }
});

// GET /servicos/:id - Buscar serviço por ID
router.get('/:id', async (req, res, next) => {
    try {
        const servico = await gerenciarServico.recuperarServicoPorId(req.params.id);
        res.status(200).json(servico);
    } catch (error) {
        next(error);
    }
});

// POST /servicos - Criar novo serviço
router.post('/', async (req, res, next) => {
    try {
        const { descricao, valor } = req.body;
        const novoServico = await gerenciarServico.criarServico({ descricao, valor });
        res.status(201).json(novoServico);
    } catch (error) {
        next(error);
    }
});

// PUT /servicos/:id - Atualizar serviço
router.put('/:id', async (req, res, next) => {
    try {
        const { descricao, valor } = req.body;
        const servicoAtualizado = await gerenciarServico.atualizarServico(req.params.id, { descricao, valor });
        res.status(200).json(servicoAtualizado);
    } catch (error) {
        next(error);
    }
});

// DELETE /servicos/:id - Remover serviço
router.delete('/:id', async (req, res, next) => {
    try {
        await gerenciarServico.deletarServico(req.params.id);
        res.status(200).json({ message: 'Serviço removido com sucesso.' });
    } catch (error) {
        next(error);
    }
});

export default router;