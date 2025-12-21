interface userI {
    name:string,
    age:number
}

interface adminI extends userI {
    role:string
}

const admin:adminI = {
    name:"Shailesh",
    age:26,
    role:"Admin"
}

function getUser(user:userI):adminI{
    const adminUser:adminI = {
        ...user,
        role:"User"
    }
    return adminUser;
}


const user1:userI = {
    name:"Shailesh Saple",
    age:25
}

console.log(getUser(user1));
