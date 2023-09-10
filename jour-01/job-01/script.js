function myUpperCase(string) {

    const LOWER = "abcdefghijklmnopqrstuvwxyz"
    const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let newString = ""
    let count = 0

    for(let x of LOWER) {
        count++
    }

    for (let char of string) {

        let change = false
        for (let j = 0; j < count; j++){

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