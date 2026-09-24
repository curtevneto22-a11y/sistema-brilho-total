import pool from '../configs/database.js';
import Servico from '../models/Servico.js';

const TABELA = 'servico';

function paraServico(linha) {
    if (!linha) return null;
    return new Servico(linha.descricao, Number(linha.valor), linha.id);
}

const servicoRepository = {
    selecionar: async () => {
        const [linhas] = await pool.execute(
            `SELECT id, descricao, valor FROM ${TABELA} ORDER BY id`
        );
        return linhas.map(paraServico);
    },

    selecionarPorId: async (id) => {
        const [linhas] = await pool.execute(
            `SELECT id, descricao, valor FROM ${TABELA} WHERE id = ?`,
            [id]
        );
        return paraServico(linhas[0]);
    },

    criar: async (descricao, valor) => {
        const [resultado] = await pool.execute(
            `INSERT INTO ${TABELA} (descricao, valor) VALUES (?, ?)`,
            [descricao, valor]
        );
        return new Servico(descricao, valor, resultado.insertId);
    },

    atualizar: async (id, descricao, valor) => {
        const [resultado] = await pool.execute(
            `UPDATE ${TABELA} SET descricao = ?, valor = ? WHERE id = ?`,
            [descricao, valor, id]
        );
        return resultado.affectedRows > 0;
    },

    deletar: async (id) => {
        const [resultado] = await pool.execute(
            `DELETE FROM ${TABELA} WHERE id = ?`,
            [id]
        );
        return resultado.affectedRows > 0;
    },
};

export default servicoRepository;
