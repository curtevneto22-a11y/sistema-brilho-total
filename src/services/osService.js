import osRepository from '../repositories/OsRepository.js';

const osService = {

    recuperarOs: async () => {
        const resultado = await osRepository.selecionar();
        return resultado;
    },

    recuperarPorId: async (osId) => {
        const resultado = await osRepository.selecionarPorId(osId);
        return resultado;
    },

    criarOs: async (Os) => {
        const resultado = await osRepository.criar(
            Os.obs,
            Os.total,
            Os.data,
            Os.placa_veiculo,
            Os.id_user
        );
        return resultado;
    },

    atualizarOS: async (Os) => {
        const resultado = await osRepository.atualizar(
            Os.obs,
            Os.total,
            Os.data,
            Os.placa_veiculo,
            Os.id_user
        );
        return resultado;
    },

    deletarOs: async (osId) => {
        const resultado = await osRepository.deletar(osId);
        return resultado;
    }
}

export default osService;