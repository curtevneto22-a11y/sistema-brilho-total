import itemService from '../services/itemService.js';
import Item from '../models/Item.js';

const itemController = {

    selecionar: async (req, res) => {
        try {
            const resultado = await itemService.recuperarItem();

            return res.status(200).json({
                message: "Itens recuperados com sucesso!",
                data: resultado
            });

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao recuperar itens!",
                data: error.message
            });
        }
    },

    selecionarPorId: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await itemService.recuperarPorId(id);

            return res.status(200).json({
                message: "Item recuperado com sucesso!",
                data: resultado
            });

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao recuperar item!",
                data: error.message
            });
        }
    },

    selecionarPorNome: async (req, res) => {
        try {
            const { nome } = req.params;

            const resultado = await itemService.recuperarPorNome(nome);

            return res.status(200).json({
                message: "Item recuperado com sucesso!",
                data: resultado
            });

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao recuperar item!",
                data: error.message
            });
        }
    },

    criar: async (req, res) => {
        try {
            const {
                nome,
                valor,
                quantidade,
                id_os,
                id_servico
            } = req.body;

            const item = new Item(
                nome,
                valor,
                quantidade,
                id_os,
                id_servico
            );

            const resultado = await itemService.criarItem(item);

            return res.status(201).json({
                message: "Item criado com sucesso!",
                data: resultado
            });

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao criar item!",
                data: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const resultado = await itemService.deletarItem(id);

            return res.status(200).json({
                message: "Item deletado com sucesso!",
                data: resultado
            });

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao deletar item!",
                data: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { id } = req.params;

            const {
                nome,
                valor,
                quantidade,
                id_os,
                id_servico
            } = req.body;

            const item = new Item(
                nome,
                valor,
                quantidade,
                id_os,
                id_servico,
                id
            );

            const resultado = await itemService.atualizarItem(item);

            return res.status(200).json({
                message: "Item atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {
            return res.status(500).json({
                message: "Erro ao atualizar item!",
                data: error.message
            });
        }
    }
};

export default itemController;