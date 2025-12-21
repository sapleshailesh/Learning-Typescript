let arr =[1,48,5]
console.log("Array Elements are:"+arr)

console.log("Array elements using for each loop:");
arr.forEach(element=>{
    console.log(`Element is : ${element}`);
});

console.log('Print array elements using for loop:');
for (let i=0;i<arr.length;i++){
    console.log(`Element at index ${i} is : ${arr[i]}`);
}

//====Tuple is fixed length array having same or different types of elements====
let tuple =["1,8,5","Hello",true,45.6];
console.log("Tuple elements are:"+tuple);
console.log("Tuple elements using for each loop:");

tuple.forEach(element=>{
    console.log(`Element is : ${element}`);
    });
console.log('Print tuple elements using for loop:');
for (let i=0;i<tuple.length;i++){
        console.log(`Element at index ${i} is : ${tuple[i]}`);
    }


    function addArrayElements(arr: number[]): number {
        let sum = 0;
        arr.forEach(element => {
        sum += element;
    });
        return sum;
    }

    const array1 = [10, 20, 30, 40, 50];
    const arraySum =addArrayElements(array1);
    console.log(`Sum of array elements ${array1} is : ${arraySum}`);

   const reducedVal= array1.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 10);
   console.log(reducedVal)
