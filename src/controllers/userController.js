import User from "../models/User.js";
import userService from "../services/userService.js";

const userController = {
    selecionar: async (req, res) => {
        try{
            const resultado = await userService.recuperarUsuario();
            
            res.status(200).json({
                message: "Usuario recuperado com sucesso!",
                data: resultado
            });
        }
        catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar usuario!",
                data: error.message
            });
        }
    }
}