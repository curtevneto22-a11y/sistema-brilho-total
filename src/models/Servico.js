class Servico {
    #id;
    #descricao;
    #valor;

    constructor (descricao, valor, id= null){
        this.#descricao = descricao;
        this.#valor = valor;        
        this.#id = id;

    }

    get id (){
        return this.#id;

    }


    //descricao
    get descricao (){
        return this.#descricao;
    }

    set descricao (value){
        this.#descricao = value;
    }
    

    //valor
    get valor (){
        return this.#valor
    }

    set valor (value){
        return this.#valor = value;
    }
    
}

export default Servico;

    



