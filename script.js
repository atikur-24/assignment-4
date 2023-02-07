// any input parameter number with calculation 3 multiplication, 10 addition , 2 division and 5 subtraction
   function mindGame(number) {
    if (typeof number !== 'number') {
        return 'value should be numbers';
    }
    const multiplication = number * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;
    return subtraction;
}
// const result = mindGame(-15);
// console.log(result);



// finding which parameter text length the number even or odd 
function evenOdd(name) {
    if (typeof name !== 'string') {
        return 'value should be an string';
    } else if (name.length % 2 === 0 ) {
        return 'even';
    } else {
        return 'odd';
    }
}
// const result = evenOdd('2845245');
// console.log(result);



// checking parameter number grater than and equal to 7 or less than 7
function isLGSeven(anyNumber) {
    const result = anyNumber - 7;
    if (typeof anyNumber !== 'number') {
        return 'value should be numbers';
    } else if ( result >= 7) {
        const multiplication = anyNumber * 2;
        return multiplication;
    } else {
        return result;
    }
}
// const rr = isLGSeven(6545);
// console.log(rr);



// finding array in parameter positive or negative ages
function findingBadData(ages) {
    let count = 0;
    for (let i = 0; i < ages.length; i++) {
        const age = ages[i]
        if (!Array.isArray(ages)) {
            return 'value should be an array';
        } else if (age  < 0) {
            count ++;
        }
    }
    return count;
}
// const ages = [2, -5, 5, -7, 8 -13, 6];
// const finalResult = findingBadData([4, 44, 44, 45]);
// console.log(finalResult);



// three friend gems convert into diamond
function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems) {
    const friend1Diamond = friend1Gems * 21;
    const friend2Diamond = friend2Gems * 32;
    const friend3Diamond = friend3Gems * 43;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    if (typeof friend1Gems !== 'number' || typeof friend2Gems !== 'number' || typeof friend3Gems !== 'number') {
        return 'both values should be numbers';
    } else if (totalDiamond >= 2000) {
        return totalDiamond - 2000;
    } else {
        return totalDiamond;
    }
}

// const totalResult = gemsToDiamond(20, 200, 50);
// console.log(totalResult);
