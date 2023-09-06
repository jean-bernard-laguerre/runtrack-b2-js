function myPrimeList(limit) {
    let primeNum = []

    for (let i = 1; i <= limit; i++) {
        if (isPrime(i)) {
            primeNum += [i]
        }
    }

    return primeNum
}

function isPrime(num) {
    for(let i = 2; i < num-1; i++) {
        if (num%i == 0) {
            return false
        }
    }
    return true
}

console.log(myPrimeList(18))