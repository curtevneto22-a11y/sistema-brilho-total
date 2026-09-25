class Veiculo {
    #placa;
    #modelo;
    #cor;
    #id_cliente
l
    constructor (placa, modelo, cor, id_cliente = null){
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#id_cliente = id_cliente;
    }

    // placa
    get placa() {
        return this.#placa;
    }

    set placa(value) {
        this.#placa = value;
    }

    // modelo
    get modelo() {
        return this.#modelo;
    }

    set modelo(value) {
        this.#modelo = value;
    }
    // cor
    get cor() {
        return this.#cor;
    }

    set cor(value) {
        this.#cor = value;
    }
    // id_cliente
    get id_cliente() {
        return this.#id_cliente;
    }

    set id_cliente(value) {
        this.#id_cliente = value;
    }
}


export default Veiculo;