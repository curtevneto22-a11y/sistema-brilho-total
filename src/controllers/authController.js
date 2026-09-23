import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userService from '../services/userService.js';

const authController = {
  login: async (req, res) => {
    try {
      const { userName, password } = req.body;
      const userExists = await userService.recuperarUsuarioPoruserName(userName);

      if (!userExists || userExists.length === 0) {
        return res.status(401).json({ message: "Usuário ou senha inválidos!" });
      }

      const validPassword = await bcrypt.compare( password, userExists[0].password);

      if (!validPassword) {
        return res.status(401).json({
          message: "Usuário ou senha inválidos!",
        });
      }

      const accesstoken = jwt.sign(
        {
          id: userExists[0].id,
          userName: userExists[0].userName,
          role: userExists[0].role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "15m",
        },
      );

      res.status(200).json({
        message: "Login realizado com sucesso!",
        token: accesstoken,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro interno do servidor",
        errorMessage: error.message,
      });
    }
  },
};

export default authController;
