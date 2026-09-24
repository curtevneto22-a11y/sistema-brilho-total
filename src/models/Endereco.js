class Endereco {
    #id;
    #cep;
    #rua;
    #numero;
    #bairro;
    #cidade

    constructor (cep, rua, numero, bairro, cidade, id = null){
        this.#cep = cep;
        this.#rua = rua;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#id = id
    }

    // id
    get id() {
        return this.#id;
    }

    // cep
    get cep() {
        return this.#cep;
    }

    set cep(value) {
        this.#cep = value;
    }

    // rua
    get rua() {
        return this.#rua;
    }

    set rua(value) {
        this.#rua = value;
    }
    // numero
    get numero() {
        return this.#numero;
    }

    set numero(value) {
        this.#numero = value;
    }
    // bairro
    get bairro() {
        return this.#bairro;
    }

    set bairro(value) {
        this.#bairro = value;
    }
    //cidade
    get cidade() {
        return this.#cidade;
    }

    set cidade(value) {
        this.#cidade = value;
    }


}


export default Endereco;