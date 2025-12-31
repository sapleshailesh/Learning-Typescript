//instance of example
class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const user:User=new User('Alice', 30);

function logUser(user: User, key:keyof User): void {
        const userValue = user[key];
        console.log(userValue);
}

logUser(user, 'name');
logUser(user, 'age');
