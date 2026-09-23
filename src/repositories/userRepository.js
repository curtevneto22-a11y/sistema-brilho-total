import pool from '../configs/database.js';

const userRepository = {
  selecionar: async () => {
    const sql = 'SELECT * FROM user;';
    const [rows] = await pool.execute(sql);
    return rows;
  },

  selecionarPorId: async (userID) => {
    const sql = 'SELECT * FROM user WHERE id = ?;';
    const [rows] = await pool.execute(sql, [userID]); 
    return rows;
  },

  selecionarPoruserName: async (userName) => {
    const sql = 'SELECT * FROM user WHERE username = ?;';
    const [rows] = await pool.execute(sql, [userName]);
    return rows;
  },

  criar: async (userName, password, role) => {
    const sql = 'INSERT INTO user VALUES(null, ?, ?, ?);';
    const [rows] = await pool.execute(sql, [userName, password, role]);
    return rows;
  },
  
  atualizar: async (userName, password, userId) => {
    const sql = 'UPDATE user SET username = ?, password = ? WHERE id = ?;';
    const [rows] = await pool.execute(sql, [userName, password, userId]);
    return rows;
  },

  deletar: async (userId) => {
    const sql = 'DELETE FROM user WHERE id = ?;';
    const [rows] = await pool.execute(sql, [userId]);
    return rows;
  },
};

export default userRepository;