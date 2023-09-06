function myUpperCase(string) {

    const LOWER = "abcdefghijklmnopqrstuvwxyz"
    const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let newString = ""

    for (let char of string) {

        let change = false
        for (let j = 0; j < long(LOWER); j++){

            if (char == LOWER[j]) {
                newString += UPPER[j]
                change = true
                break
            }
        }

        if(!change) {
            newString+=char
        }
    }

    return newString
}

function long(str) {
    count = 0
    for(let char of str) {
        count++
    }
    return count
}