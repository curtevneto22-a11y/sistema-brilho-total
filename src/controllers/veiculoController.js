import veiculoService from "../services/veiculoService.js";
import Veiculo from "../models/Veiculo.js";

const veiculoController = {

    selecionar: async (req, res) => {

        try {
            const resultado = await veiculoService.recuperarVeiculo();
            res.status(200).json({
                message: "Veiculos recuperados com sucesso!",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar veiculos!",
                data: error.message
            });

        }

    },

    selecionarPorPlaca: async (req, res) => {
    try {
         const { placa } = req.params;
         const resultado = await veiculoService.recuperarPorPlaca(placa);
         return res.status(200).json({
             message: "Veiculo recuperado com sucesso!",
             data: resultado
         });

        } catch (error) {
         return res.status(500).json({
             message: "Erro ao recuperar veiculo!",
              data: error.message
             });
        }
    },

    criar: async (req, res) => {

    try {
        const {placa, modelo, cor, id_cliente} = req.body;
        const veiculo = new Veiculo(
            placa,
            modelo,
            cor,
            id_cliente
        );

        const resultado = await veiculoService.criarveiculo(veiculo);
        return res.status(201).json({
            message: "Veiculo criado com sucesso!",
            data: resultado
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao criar veiculo!",
            data: error.message
        });

    }

},

    deletar: async (req, res) => {

        try {
            const { placa } = req.params;
            const resultado = await veiculoService.deletarveiculo(placa);
            res.status(200).json({
                message: "Veiculo deletado com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao deletar veiculo!",
                data: error.message
            });

        }

    },

    atualizar: async (req, res) => {

        try {
            const { placa } = req.params;
            const { novaPlaca, modelo, cor, id_cliente } = req.body;
            
            const dadosAtualizados = new Veiculo(
                novaPlaca,
                modelo,
                cor,
                id_cliente
            );

            const resultado = await veiculoService.atualizarveiculo(
                dadosAtualizados, placa
            );

            res.status(200).json({
                message: "Veiculo atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {
            res.status(500).json({
                message: "Erro ao atualizar veiculo!",
                data: error.message
            });

        }

    }

};

export default veiculoController;