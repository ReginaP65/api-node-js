//create array of numbers
let userIdArrayEmpty:number[]=[];// empty
let userIdArrayNotEmpty: number[]=[11,0,77];// not empty

//get value by array index
console.log("first element: " + userIdArrayNotEmpty[0]);//first element=11
console.log("second element: " + userIdArrayNotEmpty[1]);//first element=11

// get length
console.log("length: " + userIdArrayNotEmpty.length);


// add a new value
userIdArrayNotEmpty.push(88);
console.log("new element:" + userIdArrayNotEmpty[3]);
// get length
console.log("length: " + userIdArrayNotEmpty.length);
// reassign value by index and provide new value
userIdArrayNotEmpty[3]= 99;
console.log("updated elemet:" + userIdArrayNotEmpty[3]);
console.log("whole array:" + userIdArrayNotEmpty);

//implementing the loop
let loopIterationIndex;
for (loopIterationIndex = 0; loopIterationIndex < userIdArrayNotEmpty.length; loopIterationIndex++) {
    console.log("index:"+loopIterationIndex);
    console.log("value of array by index:" + userIdArrayNotEmpty[loopIterationIndex]);
}
