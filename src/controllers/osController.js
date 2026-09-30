import Os from '../models/Os.js';
import osService from '../services/osService.js';

const osController = {
  selecionar: async (req, res) => {
    try {
      const resultado = await osService.recuperarOs();

      res.status(200).json({
        message: "Os recuperada com sucesso!",
        data: resultado,
      });
    } catch (error) {
      res.status(500).json({
        message: "Erro ao recuperar Os!",
        data: error.message,
      });
    }
  },

  selecionarPorId: async (req, res) => {
    try {
         const { id } = req.params;
         const resultado = await osService.recuperarPorId(id);

         return res.status(200).json({
             message: "Os recuperada com sucesso!",
             data: resultado
         });

        } catch (error) {
         return res.status(500).json({
             message: "Erro ao recuperar Os!",
              data: error.message
             });
        }
    },

  criar: async (req, res) => {
    try {
      const { obs, total, data, placa_veiculo, id_user } = req.body;
      const os = new Os(obs, total, data, placa_veiculo, id_user);
      const resultado = await osService.criarOs(os);

      return res.status(201).json({
        message: "Os criada com sucesso!",
        data: resultado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao criar Os!",
        data: error.message,
      });
    }
  },
   
  deletar: async (req, res) => {
    try {
      const id = Os(req.params.id);
      const resultado = await userService.deletarOs(id);

      return res.status(200).json({
        message: "Os deletada com sucesso!",
        data: resultado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao deletar Os!",
        data: error.message,
      });
    }
  },

  atualizar: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { obs, total, data, placa_veiculo, id_user } = req.body;
      const os = new Os(obs, total, data, placa_veiculo, id_user);
      const resultado = await osService.atualizarOs(os);

      return res.status(200).json({
        message: "Os atualizada com sucesso!",
        data: resultado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao atualizar Os!",
        data: error.message,
      });
    }
  },
};

export default osController;