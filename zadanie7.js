//zadanie7

const arr = [1, 5, 7, 99, 0, 98, 3444, 234, 3490, 2334, 0];
let secondCount = 0;
let nonSecCount = 0;
let zeroCount = 0;
arr.forEach(function(item, index, array) {
    let checkArr = item;
    if (checkArr == 0) {
        zeroCount = zeroCount + 1;
    } else if (checkArr % 2) {
        secondCount = secondCount + 1;
    } else {
        nonSecCount = nonSecCount + 1;
    }
})
console.log(`четные-${secondCount} не четные:-${nonSecCount}  нули:-${zeroCount}`)























// const arr = [1, 5, 7, 13, 0, 98, 3444, 234, 3490, 2334, 0];
// let x1 = 0;
// for (let j = 0; j < arr.length; j = j + 2) {
//     x1++;
// }
// console.log(x2);
// let x2 = 0;
// for (let i = 1; i < arr.length; i = i + 2) {
//     x2++;
// }
// console.log(x1);
// console.log(x2);




// const arr = [1, 3, 5];



// for (let i = 0; i < arr.length ; i++){
//   console.log(arr[i])
// }

// i = 0;
// while(i < arr.length){

//      console.log(arr[i])
//      i++
// }


// let i = 0;
// do {
//     console.log(arr[i])
//     i++
// } while (i < arr.length);

// for (let i = 0; i < arr.length ; i++){
//   console.log(`item: ${arr[i]}, index: ${i}`)
// }


// arr.forEach(function(item, index, array) {
//     console.log(`item: ${item}, index: ${index}`)
// })