import Chance from "chance";

export interface AnimalObject {
    id: string;
    name: string;
    type: string;
    age :number;
    gender: string;
}

export class Animal {
    id : string = ""
    name : string = ""
    type : string = ""
    age : number = 0
    gender : string = ""

    constructor(){
        this.id = Chance().guid();
        this.name = Chance().name();
        this.type = Chance().animal({type: "zoo"});
        this.age = Chance().age({type: 'child'});
        this.gender = Chance().gender();
    }

    toString() : AnimalObject{
        return {
            id : this.id,
            name : this.name,
            type : this.type,
            age : this.age,
            gender : this.gender
        }
    }
}