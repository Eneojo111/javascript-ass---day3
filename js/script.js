
// For loops repeats a code limited amount of time / while loops repeat a code infinitely


// for(let i = 0; i<=100; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// // second loop to print odd numbers
// for(let i = 0; i<=100; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// number 2
function fizzbuzz() {
for(let i = 1; i<= 100; i++){
if (i%3 ===0){
    console.log("Fizz");
}else if(i%5===0){
    console.log("Buzz");
}else if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
}else{console.log(i)};
}
}
fizzbuzz();