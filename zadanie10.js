let insertNum = prompt("введите номер до 1000:");

if (insertNum > 1000) {
    console.log("данные неверны.")
} else {
    function isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    let numIn = isPrime(insertNum);
    if (numIn == true) {
        console.log('простое число');
    } else {
        console.log(' не простое число');
    }

}