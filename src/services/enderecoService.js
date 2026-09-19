import enderecoRepository from "../repositories/enderecoRepository.js";


const enderecoService = {

    recuperarEndereco: async () => {

        const resultado = await enderecoRepository.selecionar();

        return resultado;

    },

    recuperarEnderecoPorId: async (enderecoId) => {

        const resultado = await enderecoRepository.selecionarPorID(enderecoId);

        return resultado;

    },

    recuperarEnderecoPorEmail: async (email) => {

        const resultado = await enderecoRepository.selecionarPorCep(email);

        return resultado;

    },

    deletarEndereco: async (enderecoId) => {

        const resultado = await enderecoRepository.deletar(enderecoId);

        return resultado;

    },

    criarEndereco: async (endereco) => {

        const resultado = await enderecoRepository.criar(
            user.cep,
            user.rua,
            user.numero,
            user.bairro,
            user.cidade
        );

        return resultado;

    },

    atualizarEndereco: async (endereco) => {

        const resultado = await enderecoRepository.atualizar(
            user.cep,
            user.rua,
            user.numero,
            user.bairro,
            user.cidade
        );

        return resultado;

    },

};

export default enderecoService;