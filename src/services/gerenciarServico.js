import servicoRepository from '../repositories/servicoRepository.js';
import Servico from '../models/Servico.js';

export class ServicoError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.name = 'ServicoError';
        this.statusCode = statusCode;
    }
}

function validarDados({ descricao, valor }) {
    if (!descricao || typeof descricao !== 'string' || !descricao.trim()) {
        throw new ServicoError('A descrição do serviço é obrigatória.', 400);
    }

    if (valor === undefined || valor === null || Number.isNaN(Number(valor)) || Number(valor) <= 0) {
        throw new ServicoError('O valor do serviço deve ser um número maior que zero.', 400);
    }
}

const gerenciarServico = {
    recuperarServico: async () => {
        return await servicoRepository.selecionar();
    },

    recuperarServicoPorId: async (servicoId) => {
        const servico = await servicoRepository.selecionarPorId(servicoId);
        if (!servico) {
            throw new ServicoError('Serviço não encontrado.', 404);
        }
        return servico;
    },

    criarServico: async ({ descricao, valor }) => {
        validarDados({ descricao, valor });
        return await servicoRepository.criar(descricao.trim(), Number(valor));
    },

    atualizarServico: async (servicoId, { descricao, valor }) => {
        validarDados({ descricao, valor });

        await gerenciarServico.recuperarServicoPorId(servicoId);

        const atualizado = await servicoRepository.atualizar(servicoId, descricao.trim(), Number(valor));
        if (!atualizado) {
            throw new ServicoError('Não foi possível atualizar o serviço.', 500);
        }

        return new Servico(descricao.trim(), Number(valor), servicoId);
    },

    deletarServico: async (servicoId) => {
        await gerenciarServico.recuperarServicoPorId(servicoId);

        const deletado = await servicoRepository.deletar(servicoId);
        if (!deletado) {
            throw new ServicoError('Não foi possível remover o serviço.', 500);
        }

        return true;
    },
};

export default gerenciarServico;
