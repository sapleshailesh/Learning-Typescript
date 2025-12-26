class DataBox<T> {
    content: T;

    constructor(value:T){
        this.content = value;
    }
}

const stringBox:DataBox<string> = new DataBox<string>("Hello Generics");
console.log(`String DataBox contains: ${stringBox.content}`);

const numberBox:DataBox<number> = new DataBox<number>(12345);
console.log(`Number DataBox contains: ${numberBox.content}`);
