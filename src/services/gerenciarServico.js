import userRepository from "../repositories/userRepository.js";
import bcrypt from 'bcrypt';

const gerenciarServico = {
    recuperarServico: async () => {
        const resultado = await userRepository.selecionar();
        return resultado;
    },

    recuperarServicoPorId: async (servicoId) => {
        const resultado = await userRepository.selecionarPorId(servicoId);
        return resultado;
    },

    recuperarServicoPorEmail: async (email) => {
        const resultado = await userRepository.selecionarPorEmail(email);
        return resultado;
    },

    criarServico: async (Servico) => {
        const resultado = await userRepository.criar(
            Servico.lavagemSimples,
            Servico.lavagemCompleta,
            Servico.encerar
        );
        return resultado;
    },

    atualizarServico: async (user) => {
        const resultado = await userRepository.atualizar(
            user.name,
            user.email,
            user.password,
            user.id
        );
        return resultado;
    },

    deletarServico: async (userId) => {
        const resultado = await userRepository.deletar(userId);
        return resultado;
    },
        
};

export default gerenciarServico;