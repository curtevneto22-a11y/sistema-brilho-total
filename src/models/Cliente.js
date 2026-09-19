class Cliente {
    #id;
    #nome;
    #cpf;
    #email;
    #telefone;
    #id_endereco

    constructor (nome, cpf, email, telefone, id_endereco = null, id = null){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#email = email
        this.#telefone = telefone;
        this.#id_endereco = id_endereco;
        this.#id = id
    }

    // id
    get id() {
        return this.#id;
    }

    // nome
    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }

    // cpf
    get cpf() {
        return this.#cpf;
    }

    set cpf(value) {
        this.#cpf = value;
    }
    // email
    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }
    // telefone
    get telefone() {
        return this.#telefone;
    }

    set telefone(value) {
        this.#telefone = value;
    }
    //id_endereco
    get id_endereco() {
        return this.#id_endereco;
    }

    set id_endereco(value) {
        this.#id_endereco = value;
    }


}


export default Cliente;