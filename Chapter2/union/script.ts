function add(args1:number|string, args2:number|string): number|string | undefined{
    if(typeof args1 === "number"&& typeof args2 === "number"){
        return args1 + args2;
    }else if(typeof args1 ==="string" && typeof args2 ==="string"){
        return args1 + args2;
    }else{
        console.log("Invalid arguments");
        return; //This will return undefined
    }
}
const result1= add(10,20);
console.log(`The sum of 10 and 20 is: ${result1} and type of result1 is ${typeof result1}`);

const result2= add("Hello, ","TypeScript!");
console.log(`The concatenated string is: ${result2} and type of result2 is ${typeof result2}`);
//================================Type aliases examples==========================
type StringOrNumber= string | number;

function combine(arg1: StringOrNumber, arg2: StringOrNumber): StringOrNumber | undefined{
    if(typeof arg1 === "number"&& typeof arg2 === "number"){
        return arg1 + arg2;
    }else if(typeof arg1 ==="string" && typeof arg2 ==="string"){
        return arg1 + arg2;
    }else{
        console.log("Invalid arguments");
        return; //This will return undefined
    }
}

const combinedResult1= combine(30,40);
console.log(`The sum of 30 and 40 is: ${combinedResult1}
    and type of combinedResult1 is ${typeof combinedResult1}`);

    const combinedResult2= combine(10,"Script");
    console.log(`The combined result is: ${combinedResult2}
    and type of combinedResult2 is ${typeof combinedResult2}`);
