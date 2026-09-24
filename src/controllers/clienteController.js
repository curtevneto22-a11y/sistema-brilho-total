import clienteService from "../services/clienteService.js";
import Cliente from "../models/Cliente.js";

const clienteController = {

    selecionar: async (req, res) => {

        try {

            const resultado = await clienteService.recuperarCliente();

            res.status(200).json({
                message: "Clientes recuperados com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao recuperar clientes!",
                data: error.message
            });

        }

    },

    selecionarPorId: async (req, res) => {
    try {
         const { id } = req.params;

         const resultado = await clienteService.recuperarClientePorId(id);

         return res.status(200).json({
             message: "Cliente recuperado com sucesso!",
             data: resultado
         });

        } catch (error) {
         return res.status(500).json({
             message: "Erro ao recuperar cliente!",
              data: error.message
             });
        }
    },

    selecionarPorEmail: async (req, res) => {
        try {
            const { email } = req.params;

            const resultado = await clienteService.recuperarClientePorEmail(email);

         return res.status(200).json({
                message: "Cliente recuperado com sucesso!",
                data: resultado
            });

        } catch (error) {
            return res.status(500).json({
             message: "Erro ao recuperar cliente!",
             data: error.message
         });
     }
    },

    criar: async (req, res) => {

    try {

        const { nome, cpf, email, telefone, id_endereco  } = req.body;

        const cliente = new Cliente(
            nome,
            cpf,
            email,
            telefone,
            id_endereco
        );

        const resultado = await clienteService.criarCliente(cliente);

        return res.status(201).json({
            message: "Cliente criado com sucesso!",
            data: resultado
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao criar cliente!",
            data: error.message
        });

    }

},

    deletar: async (req, res) => {

        try {

            const { id } = req.params;

            const resultado = await clienteService.deletarCliente(id);

            res.status(200).json({
                message: "Cliente deletado com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao deletar cliente!",
                data: error.message
            });

        }

    },

    atualizar: async (req, res) => {

        try {

            const { id } = req.params;

            const { nome, cpf, email, telefone, id_endereco } = req.body;

            const dadosAtualizados = new Cliente(
                nome,
                cpf,
                email,
                telefone,
                id_endereco,
                id
            );

            const resultado = await clienteService.atualizarCliente(
                dadosAtualizados
            );

            res.status(200).json({
                message: "Cliente atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao atualizar cliente!",
                data: error.message
            });

        }

    }

};

export default clienteController;