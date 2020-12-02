function isDividedBy3(number) {
    return number % 3 === 0
}

function isDividedBy5(number) {
    return number % 5 === 0
}

function isDividedBy15(number) {
    return number % 15 === 0
}

function pickNumbers(numberCount) {
    const numbers = Array.from(Array(numberCount), (_, index) => index + 1)
    const pickedNumbers = numbers.filter(
        number => isDividedBy15(number) || (!isDividedBy3(number) && !isDividedBy5(number))
    )
    
    return pickedNumbers.length
}

console.log(pickNumbers(15))