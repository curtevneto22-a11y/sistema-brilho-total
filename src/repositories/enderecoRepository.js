import pool from "../configs/database.js";

const enderecoRepository = {

    selecionar: async () => {

        const sql = 'SELECT * FROM endereco;';

        const [rows] = await pool.execute(sql);

        return rows;

    },

    selecionarPorID: async (enderecoId) => {

        const sql = 'SELECT * FROM endereco WHERE id = ?;';

        const [rows] = await pool.execute(sql, [enderecoId]);

        return rows;

    },

     selecionarPorCep: async (cep) => {

        const sql = 'SELECT * FROM endereco WHERE cep = ?;';

        const [rows] = await pool.execute(sql, [cep]);

        return rows;

    },


    deletar: async (enderecoId) => {

        const sql = 'DELETE FROM endereco WHERE id = ?;';

        const [rows] = await pool.execute(sql, [enderecoId]);

        return rows;

    },

    criar: async (cep, rua, numero, bairro, cidade) => {

        const sql = 'INSERT INTO endereco VALUES(null, ?, ?, ?, ?, ?);';

        const [rows] = await pool.execute(
            sql,
            [cep, rua, numero, bairro, cidade]
        );

        return rows;

    },

    atualizar: async (cep, rua, numero, bairro, cidade, enderecoId) => {

        const sql = 'UPDATE endereco SET cep = ?, rua = ?, numero = ?, bairro = ?, cidade = ? WHERE id = ?;';

        const [rows] = await pool.execute(
            sql,
            [cep, rua, numero, bairro, cidade, enderecoId]
        );

        return rows;

    },

};

export default enderecoRepository;