function myIsInString(haystack, needle) {

    let countNeedle = 0
    let countHaystack = 0

    for(let x of needle) {
        countNeedle++
    }
    for(let x of haystack) {
        countHaystack++
    }

    for (let i = 0; i < countHaystack; i++) {

        if (haystack[i] == needle[0]) {

            let match = true

            for (let j = 1; j < countNeedle; j++) {

                if (haystack[i+j] != needle[j]) {
                    match = false
                    break
                }
            }

            if (match) {
                return true
            }
        }
    }

    return false
}