import pool from '../configs/database.js';

const itemRepository = {

    selecionar: async () => {
        const sql = 'SELECT * FROM item;';

        const [rows] = await pool.execute(sql);

        return rows;
    },

    selecionarPorId: async (itemId) => {
        const sql = 'SELECT * FROM item WHERE id = ?;';

        const [rows] = await pool.execute(sql, [itemId]);

        return rows;
    },

    selecionarPorNome: async (nomeItem) => {
        const sql = 'SELECT * FROM item WHERE nome = ?;';

        const [rows] = await pool.execute(sql, [nomeItem]);

        return rows;
    },

    criar: async (nome, valor, quantidade, id_os, id_servico) => {
        const sql = `
            INSERT INTO item
            (nome, valor, quantidade, id_os, id_servico)
            VALUES (?, ?, ?, ?, ?);
        `;

        const [rows] = await pool.execute(sql, [
            nome,
            valor,
            quantidade,
            id_os,
            id_servico
        ]);

        return rows;
    },

    atualizar: async (nome, valor, quantidade, id_os, id_servico, itemId) => {
        const sql = `
            UPDATE item
            SET nome = ?,
                valor = ?,
                quantidade = ?,
                id_os = ?,
                id_servico = ?
            WHERE id = ?;
        `;

        const [rows] = await pool.execute(sql, [
            nome,
            valor,
            quantidade,
            id_os,
            id_servico,
            itemId
        ]);

        return rows;
    },

    deletar: async (itemId) => {
        const sql = 'DELETE FROM item WHERE id = ?;';

        const [rows] = await pool.execute(sql, [itemId]);

        return rows;
    }
};

export default itemRepository;