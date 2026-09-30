class Os {
    #id;
    #obs;
    #total;
    #data;
    #placa_veiculo;
    #id_user;

    constructor(obs, total, data, placa_veiculo, id_user, id = null) {
        this.#obs = obs;
        this.#total = total;
        this.#data = data;
        this.#placa_veiculo = placa_veiculo;
        this.#id_user = id_user;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    // obs
    get obs() {
        return this.#obs;
    }

    set obs(value) {
        this.#obs = value;
    }

    get total() {
        return this.#total;
    }

    set total(value) {
        this.#total = value;
    }

    get data() {
        return this.#data;
    }

    set data(value) {
        this.#data = value;
    }

    get placa_veiculo() {
        return this.#placa_veiculo;
    }

    set placa_veiculo(value) {
        this.#placa_veiculo = value;
    }

    get id_user() {
        return this.#id_user;
    }

    set id_user(value) {
        this.#id_user = value;
    }

}

export default Os;