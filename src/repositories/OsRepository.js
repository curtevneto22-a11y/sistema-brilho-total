import pool from '../configs/database.js';

const osRepository = {

    selecionar: async () => {
        const sql = 'SELECT * FROM os;';
        const [rows] = await pool.execute(sql);
        return rows;
    },

    selecionarPorId: async (userID) => {
    const sql = 'SELECT * FROM user WHERE id = ?;';
    const [rows] = await pool.execute(sql, [userID]); 
    return rows;
  },
  
    criar: async (obs, total, data, placa_veiculo, id_user) => {
    const sql = 'INSERT INTO os VALUES(null, ?, ?, ?, ?, ?);';
    const [rows] = await pool.execute(sql, [obs, total, data, placa_veiculo, id_user]);
    return rows;
  },
  
    atualizar: async (obs, total, data, placa_veiculo, id_user) => {
    
    const sql = 'UPDATE os SET obs = ?, total = ? data = ?, placa_veiculo = ?, id_user = ?;';
    const [rows] = await pool.execute(sql, [obs, total, data, placa_veiculo, id_user]);
    return rows;
  },

    deletar: async (osId) => {
    const sql = 'DELETE FROM os WHERE id = ?;';
    const [rows] = await pool.execute(sql, [osId]);
    return rows;
  },
}

export default osRepository;