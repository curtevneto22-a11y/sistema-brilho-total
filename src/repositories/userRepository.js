import { use } from "react";
import pool from "../configs/database.js"

const userRepository = {
    selecionar: async () => {
        const sql = 'SELECT * FROM users;';
        const [rows] = await pool.execute(sql);
        return rows;
    },

    selecionarPorId: async (userID) => {
        const sql = 'SELECT * DROM users WHERE id = ?;';
        const [rows] = await pool.execute(sql [userID]);
        return rows;
    },

    selecionarPoruserName: async (userName) => {
        const sql = 'SELECT * FROM users WHERE username = ?;';
        const [rows] = await pool.execute(sql [userName]);
        return rows;
    },

    criar: async (userName, password) => {
        const sql = 'INSERT INTO users VALUES(null, ?, ?);';
        const [rows] = await pool.execute(sql [userName, password]);
        return rows;
    },

    atualizar: async (userName, password) => {
        const sql = `UPDATE users SET username = ?, password = ? WHERE id = ?;`;
        const [rows] = await pool.execute(sql [userName, password]);
        return rows;
    },

    deletar: async (userId) => {
        const sql = 'DELETE FROM users WHERE id = ?;';
        const [rows] = await pool.execute(sql [userId]);
        return rows;
    }

}

export default userRepository;