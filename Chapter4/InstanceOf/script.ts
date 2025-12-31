//instance of example
class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Admin{
    description: string;
    constructor(description: string) {
        this.description = description;
    }
    checkUserRole(user: User | Admin): void {
    if (user instanceof User) {
        console.log(`User Name: ${user.name}, Age: ${user.age}`);
    } else if (user instanceof Admin) {
        console.log(`Admin Description: ${user.description}`);
    }
 }
}

const admin: Admin = new Admin('System Administrator');
admin.checkUserRole(new User('Alice', 30));
admin.checkUserRole(admin);
