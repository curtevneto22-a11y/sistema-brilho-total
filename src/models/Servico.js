class Servico {
    #id;
    #descricao;
    #valor;

    constructor(descricao, valor, id = null) {
        this.#descricao = descricao;
        this.#valor = valor;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(value) {
        this.#descricao = value;
    }

    get valor() {
        return this.#valor;
    }

    set valor(value) {
        this.#valor = value;
    }

    // Adicione este método:
    toJSON() {
        return {
            id: this.#id,
            descricao: this.#descricao,
            valor: this.#valor
        };
    }
}

export default Servico;
