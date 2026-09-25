import veiculoRepository from "../repositories/veiculoRepository.js";


const veiculoService = {

    recuperarveiculo: async () => {

        const resultado = await veiculoRepository.selecionar();

        return resultado;

    },

    recuperarveiculoPorPlaca: async (veiculoPlaca) => {

        const resultado = await veiculoRepository.selecionarPorPlaca(veiculoPlaca);

        return resultado;

    },


    deletarveiculo: async (veiculoPlaca) => {

        const resultado = await veiculoRepository.deletar(veiculoPlaca);

        return resultado;

    },

    criarveiculo: async (veiculo) => {

        const resultado = await veiculoRepository.criar(
            veiculo.placa,
            veiculo.modelo,
            veiculo.cor,
            veiculo.id_cliente
        );

        return resultado;

    },

    atualizarveiculo: async (veiculo, placaAntiga) => {

    const resultado = await veiculoRepository.atualizar(
            veiculo.placa,
            veiculo.modelo,
            veiculo.cor,
            veiculo.id_cliente,
            placaAntiga
    );

    return resultado;
},

};

export default veiculoService;