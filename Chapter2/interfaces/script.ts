interface userI {
    name:string,
    age:number
}

const user1:userI = {
    name:"Shailesh",
    age:26
}

function getUser(user:userI):userI{
    return user;
}

console.log(getUser(user1));
