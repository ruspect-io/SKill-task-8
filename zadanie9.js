function checkNumberType() {

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

}

checkNumberType();