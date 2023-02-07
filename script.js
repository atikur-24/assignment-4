// any input parameter number with calculation 3 multiplication, 10 addition , 2 division and 5 subtraction
   function mindGame(number) {
    const multiplication = number * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;
    return subtraction;
}
// const result = mindGame(5);
// console.log(result);



// finding which parameter text length the number even or odd 
function evenOdd(name) {
    if (name.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
// const result = evenOdd('phero');
// console.log(result);



// checking parameter number grater than and equal 7 or less than 7
function isLGSeven(anyNumber) {
    const result = anyNumber - 7;
    if ( result >= 7) {
        const multiplication = anyNumber * 2;
        return multiplication;
    } else {
        return result;
    }
}
// const rr = isLGSeven(15);
// console.log(rr);



// finding array in parameter positive or negative numbers
function findingBadData(ages) {
    for (let i = 0; i < ages.length; i++) {
        const age = ages[i]
        if (age  < 0) {
            console.log(age)
        }
        else {
            console.log(age)
        }
    }
}

const ages = [1, 2, 5, 0, -5];
const finalResult = findingBadData(ages);
// console.log(finalResult);