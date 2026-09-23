import clienteRepository from "../repositories/clienteRepository.js";


const clienteService = {

    recuperarCliente: async () => {

        const resultado = await clienteRepository.selecionar();

        return resultado;

    },

    recuperarClientePorId: async (clienteId) => {

        const resultado = await clienteRepository.selecionarPorID(clienteId);

        return resultado;

    },

    recuperarClientePorEmail: async (email) => {

        const resultado = await clienteRepository.selecionarPorEmail(email);

        return resultado;

    },

    deletarCliente: async (clienteId) => {

        const resultado = await clienteRepository.deletar(clienteId);

        return resultado;

    },

    criarCliente: async (cliente) => {

        const resultado = await clienteRepository.criar(
            cliente.nome,
            cliente.cpf,
            cliente.email,
            cliente.telefone,
            cliente.id_endereco
        );

        return resultado;

    },

    atualizarCliente: async (cliente) => {

    const resultado = await clienteRepository.atualizar(
        cliente.nome,
        cliente.cpf,
        cliente.email,
        cliente.telefone,
        cliente.id_endereco,
        cliente.id
    );

    return resultado;
},

};

export default clienteService;