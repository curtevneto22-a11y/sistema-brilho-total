import pool from "../configs/database.js";

const clienteRepository = {

    selecionar: async () => {

        const sql = `SELECT 
                        c.*,
                        e.id AS "id_endereco", e.cep, e.rua, e.numero, e.bairro, e.cidade
                    FROM cliente AS c
                    INNER JOIN endereco AS e
                        ON c.id_endereco = e.id;`;

        const [rows] = await pool.execute(sql);

        return rows;

    },

    selecionarPorID: async (clienteId) => {

        const sql = `SELECT 
                        c.*,
                        e.id AS "id_endereco", e.cep, e.rua, e.numero, e.bairro, e.cidade
                    FROM cliente AS c
                    INNER JOIN endereco AS e
                        ON c.id_endereco = e.id
                    WHERE c.id = ?;`;

        const [rows] = await pool.execute(sql, [clienteId]);

        return rows;

    },

     selecionarPorEmail: async (email) => {

        const sql = 'SELECT * FROM cliente WHERE email = ?;';

        const [rows] = await pool.execute(sql, [email]);

        return rows;

    },


    deletar: async (clienteId) => {

        const sql = 'DELETE FROM cliente WHERE id = ?;';

        const [rows] = await pool.execute(sql, [clienteId]);

        return rows;

    },

    criar: async (nome, cpf, email, telefone, id_endereco) => {

        const sql = 'INSERT INTO cliente VALUES(null, ?, ?, ?, ?, ?);';

        const [rows] = await pool.execute(
            sql,
            [nome, cpf, email, telefone, id_endereco]
        );

        return rows;

    },

    atualizar: async (nome, cpf, email, telefone, id_endereco, clienteId) => {

        const sql = 'UPDATE cliente SET nome = ?, cpf = ?, email = ?, telefone = ?, id_endereco = ? WHERE id = ?;';

        const [rows] = await pool.execute(
            sql,
            [nome, cpf, email, telefone, id_endereco, clienteId]
        );

        return rows;

    },

};

export default clienteRepository;