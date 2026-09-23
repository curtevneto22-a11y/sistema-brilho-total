import enderecoService from "../services/enderecoService.js";
import Endereco from "../models/Endereco.js";

const enderecoController = {

    selecionar: async (req, res) => {

        try {

            const resultado = await enderecoService.recuperarEndereco();

            res.status(200).json({
                message: "Endereços recuperados com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao recuperar Endereços!",
                data: error.message
            });

        }

    },

    criar: async (req, res) => {

    try {

        const { cep, rua, numero, bairro, cidade  } = req.body;

        const endereco = new Endereco(
            cep,
            rua,
            numero,
            bairro,
            cidade
        );

        const resultado = await enderecoService.criarEndereco(endereco);

        return res.status(201).json({
            message: "Endereço criado com sucesso!",
            data: resultado
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao criar endereço!",
            data: error.message
        });

    }

},

    deletar: async (req, res) => {

        try {

            const { id } = req.params;

            const resultado = await enderecoService.deletarEndereco(id);

            res.status(200).json({
                message: "Endereço deletado com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao deletar endereço!",
                data: error.message
            });

        }

    },

    atualizar: async (req, res) => {

        try {

            const { id } = req.params;

            const { cep, rua, numero, bairro, cidade } = req.body;

            const dadosAtualizados = new Endereco(
                cep,
                rua,
                numero,
                bairro,
                cidade,
                id
            );

            const resultado = await enderecoService.atualizarEndereco(
                dadosAtualizados
            );

            res.status(200).json({
                message: "Endereço atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao atualizar endereço!",
                data: error.message
            });

        }

    }

};

export default enderecoController;