import User from "../models/User.js";
import userService from "../services/userService.js";

const userController = {
  selecionar: async (req, res) => {
    try {
      const resultado = await userService.recuperarUsuario();

      res.status(200).json({
        message: "Usuario recuperado com sucesso!",
        data: resultado,
      });
    } catch (error) {
      res.status(500).json({
        message: "Erro ao recuperar usuario!",
        data: error.message,
      });
    }
  },

  criar: async (req, res) => {
    try {
      const { userName, password } = req.body;
      const user = new User(userName, password, null);
      const resultado = await userService.criarUsuario(user);

      return res.status(201).json({
        message: "Usuario criado com sucesso!",
        data: resultado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao criar usuario!",
        data: error.message,
      });
    }
  },

  deletar: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const resultado = await userService.deletarUsuario(id);

      return res.status(200).json({
        message: "Usuario deletado com sucesso!",
        data: resultado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao deletar usuario!",
        data: error.message,
      });
    }
  },

  atualizar: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { userName, password } = req.body;
      const user = new User(userName, password, id);
      const resultado = await userService.atualizarUsuario(user);

      return res.status(200).json({
        message: "Usuario atualizado com sucesso!",
        data: resultado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao atualizar usuario!",
        data: error.message,
      });
    }
  },
};

export default userController;
