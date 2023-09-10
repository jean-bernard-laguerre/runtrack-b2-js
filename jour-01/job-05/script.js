function myPrimeList(limit) {
    let primeNum = []

    for (let i = 1; i <= limit; i++) {
        
        let isPrime = true
        for(let j = 2; j < i-1; j++) {
            if (i%j == 0) {
                isPrime = false
                break
            }
        }

        if (isPrime) {
            primeNum += [i]
        }
    }

    return primeNum
}