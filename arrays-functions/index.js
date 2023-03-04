//No 1
//Mutation in context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes 
//whereas Non-Mutation is returning a whole new array which has all the changes

//eg
//Mutation
//array.push(), 
//array.reverse(), 
//array.shift(), 
//array.sort(), 
//array.splice() 


//Non Mutation
//array.concat(), 
//array.includes(), 
//array.indexOf, 
//array.lastIndexOf, 
//array.slice(), 

//No 2
let arr = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

//2 i
arr.push('Kotlin');
console.log(arr);

//2 ii

// function addData(arr,index,el){

// }
arr.splice(3, 0, 'Java');
console.log('i am arrChange ' + arr);

//No 2 iii
arr.shift();
console.log(arr)

//No 2 iv
let newArr = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
newArr.splice(0, 0, 'Scala', 'Swift');
console.log(newArr);

//No 2 v
const newLang = ['Go', 'Rust'];
let anotherArray = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
anotherArray[4] = newLang;
console.log(anotherArray);

//No 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit() {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit());

// this will replace banana with mango
//although there is an error with the code as it takes fruit as an argument

//No 4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const getMax = (numbers) => {
    let max = -Infinity;
    for (let num of numbers) {
        if (num > max) {
            max = num
        }
    }

    return max;

}



console.log(getMax(numbers));


//No 5
const valNum = [0, 2, 4, 5, 6];
let emtyArry = [];
const valTimesIndex = () => {

    for (let i = 0; i <= valNum.length; i++) {
        for (let val of valNum) {
            let newArrNum = val * i;
            emtyArry = emtyArry.push(newArrNum);
        }
    }
}

console.log(emtyArry)