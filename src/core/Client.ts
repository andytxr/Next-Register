export default class Client{

    #id: string;
    #name: string;
    #age: number;

    constructor(name:string, age: number, id: string = null){

        this.#id = id;
        this.#name = name;
        this.#age = age;

    }

    //Getters & Setters

    get id(){

        return this.#id;

    }

    get name(){

        return this.#name;

    }

    get age(){

        return this.#age;

    }

    static voidClient(){

        return new Client('', 0);

    }


}