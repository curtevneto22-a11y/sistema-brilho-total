class Item {

    #id;
    #nome;
    #valor;
    #quantidade;
    #id_os;
    #id_servico;

    constructor(nome, valor, quantidade, id_os, id_servico, id = null) {
        this.#nome = nome;
        this.#valor = valor;
        this.#quantidade = quantidade;
        this.#id_os = id_os;
        this.#id_servico = id_servico;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }

    get valor() {
        return this.#valor;
    }

    set valor(value) {
        this.#valor = value;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(value) {
        this.#quantidade = value;
    }

    get id_os() {
        return this.#id_os;
    }

    set id_os(value) {
        this.#id_os = value;
    }

    get id_servico() {
        return this.#id_servico;
    }

    set id_servico(value) {
        this.#id_servico = value;
    }
}

export default Item;