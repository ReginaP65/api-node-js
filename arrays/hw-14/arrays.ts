//Create an array with three integers
const arrayThreeIntegers: number []= [20,30.,40];
console.log(arrayThreeIntegers);
console.log("Length of array is: " + arrayThreeIntegers.length);
//Create an array with two strings
const arrayFourStrings: string[] = ["white","black","blue","purple"];
arrayFourStrings.push("red");
console.log(arrayFourStrings);
console.log("Length of array is: " + arrayFourStrings.length);
//Create an array with three strings
const arrayThreeStrings: string[] = ["Jo","Mikk","Kris"];
arrayThreeStrings.pop("Kris");
console.log(arrayThreeStrings);
console.log("Length of array is: " + arrayThreeStrings.length);
//Create an empty array of numbers
const arrayEmpty: number[]=[];
console.log("Length of array is:" + arrayEmpty.length);
arrayEmpty.push(10,40);
console.log("Length of array is: " + arrayEmpty.length);
//Loops
//Create an array of five numbers and use loop to print each element of the array
const arrayFiveNumbers: number[]=[1,2,3,4,5];
for (const array of arrayFiveNumbers) {
    console.log(array);
}
//Create an array of five numbers and use loop to calculate the sum of all elements and print the sum
let sum: number = 0;
for (const array of arrayFiveNumbers) {
    sum += array;
}
console.log(sum);
//Create an array of three numbers and use loop to create a new array where each element equals the original element multiplied by 2.
const arrayThreeNumbers: number[]=[2,4,6];
const newArray: number[]=[];
for ( const array of arrayThreeNumbers) {
    newArray.push(array * 2);
}
console.log(newArray);
//Create an array of three numbers and Use a for loop to print the elements of the array in reverse order.
const reverseArray: number[] = [];
for (let array = arrayThreeNumbers.length - 1; array >= 0; array--) {
    reverseArray.push(arrayThreeNumbers[array]);
}
console.log(reverseArray);
//Typical interview tasks
//Find the maximum number in an array
const arrayNumbers: number[] = [100,20,50,60];
let maxNumber= arrayNumbers[0];
for (let array of arrayNumbers) {
   if (array > maxNumber) {
       maxNumber = array;
   }
}
console.log(maxNumber);
//Find the minimum number in an array
let minNumber= arrayNumbers[0];
for (let array of arrayNumbers) {
    if (array < minNumber) {
        minNumber = array;
    }
}
console.log(minNumber);
//Count the number of even numbers in an array
let count= 0;
for (let array of arrayNumbers) {
    if (array % 2 === 0) {
        count+= 1;
    }
}
console.log(count);
//Create a new array from positive numbers
const arrayDifNumbers: number[]=[1,-5,-3,2,6,-7];
const positiveNumbers: number[]=[];
for (let array of arrayDifNumbers) {
    if (array > 0) {
        positiveNumbers.push(array);

    }
}
console.log(positiveNumbers);
