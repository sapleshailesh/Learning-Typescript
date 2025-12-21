function add(arg1: number,arg2: number){
    return arg1 + arg2;
}


function concatenate(str1: string, str2: string){
    return str1 + str2;
}

const a1=10;
const a2=20;
const sum =add(a1,a2);
console.log("The sum of "+a1+" and "+a2+" is: "+sum);

const str =concatenate("Hello, ","TypeScript!");
console.log(str);

console.log(`Type of ${str} is ${typeof str}`);
