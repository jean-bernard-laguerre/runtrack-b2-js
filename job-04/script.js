function myArraySum(array) {
    let sum = 0

    for (num of array) {
        sum += num
    }

    return sum
}

console.log(myArraySum([4, 24, 52, 14, 32, 56]))