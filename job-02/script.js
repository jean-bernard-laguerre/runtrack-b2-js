function myCountChar(haystack, needle) {

    let count = 0

    for (let hay of haystack) {
        if (needle == hay) {
            count++
        }
    }

    return count
}

console.log(myCountChar('La plateforme', 'a'))