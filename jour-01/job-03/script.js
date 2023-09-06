function myIsInString(haystack, needle) {

    for (let i = 0; i < long(haystack); i++) {

        if (haystack[i] == needle[0]) {

            let match = true

            for (let j = 1; j < long(needle); j++) {

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

function long(str) {
    count = 0
    for(let char of str) {
        count++
    }
    return count
}