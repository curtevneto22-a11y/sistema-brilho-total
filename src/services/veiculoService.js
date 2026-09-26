import veiculoRepository from "../repositories/veiculoRepository.js";


const veiculoService = {

    recuperarVeiculo: async () => {
        const resultado = await veiculoRepository.selecionar();
        return resultado;

    },

    recuperarPorPlaca: async (veiculoPlaca) => {
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