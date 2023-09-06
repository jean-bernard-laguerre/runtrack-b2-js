function mySquareArray(array) {

    let squareArray = []
    for( let num of array) {
        squareArray += num*num
    }

    return squareArray
}

console.log(mySquareArray([3,8,4,2,5]))