/* any input parameter road number with the calculation 3 multiply, 10 addition , 2 divide and 5 subtraction to final result */
   function mindGame(RoadNumber) {
    if (typeof RoadNumber !== 'number') {
        return 'value should be number';
    }
    const multiply = RoadNumber * 3;
    const addition = multiply + 10;
    const divide = addition / 2;
    const subtractResult = divide - 5;
    return subtractResult;
}

/* get the name input parameter and text character length even or odd */
function evenOdd(name) {
    if (typeof name !== 'string') {
        return 'value should be an string';
    } else if (name.length % 2 === 0 ) {
        return 'even';
    } else {
        return 'odd';
    }
}

/* checking input parameter number to divide result grater than 7 or less than 7. when divide result grater than 7 return double of the input otherwise return divide */
function isLGSeven(passCode) {
    const subtract = passCode - 7;
    if (typeof passCode !== 'number') {
        return 'value should be numbers';
    } else if ( subtract >= 7) {
        const multiplyResult = passCode * 2;
        return multiplyResult;
    } else {
        return subtract;
    }
}

/* finding in input array parameter to positive or negative ages.negative ages are count and return */
function findingBadData(ages) {
    let count = 0;
    if (!Array.isArray(ages) || typeof ages !== 'string') {
        return 'value should be an array';
    }
    for (let i = 0; i < ages.length; i++) {
        const age = ages[i]
    if (age  < 0) {
            count ++;
        }
    }
    return count;
}
const ages = [20, -18, 14, -25, -14]
const result = findingBadData(ages);
console.log(result);

/* three friend gems convert to diamond and return total diamond if less than 2000 otherwise return total diamond subtraction to 2000 */
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