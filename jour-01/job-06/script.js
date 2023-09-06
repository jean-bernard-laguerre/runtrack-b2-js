function mySquareArray(array) {

    let squareArray = []
    for( let num of array) {
        squareArray += num*num
    }

    return squareArray
}