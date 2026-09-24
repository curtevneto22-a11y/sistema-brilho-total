import userRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';

const userService = {
  recuperarUsuario: async () => {
    const resultado = await userRepository.selecionar();
    return resultado;
  },

  recuperarUsuarioPorId: async (userId) => {
    const resultado = await userRepository.selecionarPorId(userId);
    return resultado;
  },

  recuperarUsuarioPoruserName: async (userName) => {
    const resultado = await userRepository.selecionarPoruserName(userName);
    return resultado;
  },

  deletarUsuario: async (userId) => {
    const resultado = await userRepository.deletar(userId);
    return resultado;
  },

  criarUsuario: async (user) => {
    const resultado = await userRepository.criar(
      user.userName, 
      user.password, 
      user.role);
    return resultado;
  },

  atualizarUsuario: async (user) => {
    const resultado = await userRepository.atualizar(
      user.userName,
      user.password,
      user.id,
    );
    return resultado;
  },

  hashPassword: async (password) => {
    const hasedPassword = await bcrypt.hash(password, 10);
    return hasedPassword;
  },
};

export default userService;
