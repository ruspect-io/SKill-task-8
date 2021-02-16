let numnum = prompt("Please enter a number");
numnum1 = +numnum;

console.log(numnum);
console.log(numnum1);


if (numnum == numnum1) {
    if (numnum % 2 == 0) {
        console.log("это число чётное.");
    } else {
        console.log("это число нечётное.");
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}