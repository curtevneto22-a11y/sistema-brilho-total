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

    recuperarEnderecoPorCep: async (cep) => {

        const resultado = await enderecoRepository.selecionarPorCep(cep);

        return resultado;

    },

    deletarEndereco: async (enderecoId) => {

        const resultado = await enderecoRepository.deletar(enderecoId);

        return resultado;

    },

    criarEndereco: async (endereco) => {

        const resultado = await enderecoRepository.criar(
            endereco.cep,
            endereco.rua,
            endereco.numero,
            endereco.bairro,
            endereco.cidade
        );

        return resultado;

    },

    atualizarEndereco: async (endereco) => {

        const resultado = await enderecoRepository.atualizar(
            endereco.cep,
            endereco.rua,
            endereco.numero,
            endereco.bairro,
            endereco.cidade,
            endereco.id
        );

        return resultado;

    },

};

export default enderecoService;