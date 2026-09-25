import pool from "../configs/database.js";

const veiculoRepository = {

    selecionar: async () => {

        const sql = 'SELECT * FROM veiculo;';

        const [rows] = await pool.execute(sql);

        return rows;

    },

    selecionarPorPlaca: async (veiculoPlaca) => {

        const sql = 'SELECT * FROM veiculo WHERE placa = ?;';

        const [rows] = await pool.execute(sql, [veiculoPlaca]);

        return rows;

    },

    deletar: async (veiculoPlaca) => {

        const sql = 'DELETE FROM veiculo WHERE placa = ?;';

        const [rows] = await pool.execute(sql, [veiculoPlaca]);

        return rows;

    },

    criar: async (placa, modelo, cor, id_cliente) => {

        const sql = 'INSERT INTO veiculo VALUES( ?, ?, ?, ?);';

        const [rows] = await pool.execute(
            sql,
            [placa, modelo, cor, id_cliente]
        );

        return rows;

    },

    atualizar: async (placa, modelo, cor, id_cliente, placaAntiga) => {

        const sql = 'UPDATE veiculo SET placa = ?, modelo = ?, cor = ?, id_cliente = ?, WHERE placa = ?;';

        const [rows] = await pool.execute(
            sql,
            [placa, modelo, cor, id_cliente, placaAntiga]
        );

        return rows;

    },

};

export default veiculoRepository;