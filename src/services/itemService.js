import itemRepository from '../repositories/itemRepository.js';

const itemService = {

    recuperarItem: async () => {
        const resultado = await itemRepository.selecionar();
        return resultado;
    },

    recuperarPorId: async (itemId) => {
        const resultado = await itemRepository.selecionarPorId(itemId);
        return resultado;
    },

    recperarPorNome: async (itemNome) => {
        const  resultado = await itemRepository.selecionarPorNome(itemNome);
        return resultado;
    },

    criarItem: async (item) => {
        const resultado = await itemRepository.criar(
            item.nome,
            item.valor,
            item.quantidade,
            item.id_os,
            item.id_servico,
            item.idProduto
        );
        return resultado;
    },

    atualizarItem: async (item) => {
        const resultado = await itemRepository.atualizar(
            item.nome,
            item.valor,
            item.quantidade,
            item.id_os,
            item.id_servico
        );
        return resultado;
    },

    deletarItem: async (itemId) => {
        const resultado = await itemRepository.deletar(itemId);
        return resultado;
    },
};

export default itemService;