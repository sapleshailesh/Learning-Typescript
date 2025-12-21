type User ={
    name:string,
    age:number
}

type Admin ={
    role:string
}

type intersection=User & Admin;

const adminUser:intersection = {
    name:"Shailesh",
    age:26,
    role:"Admin"
}
console.log(adminUser);
