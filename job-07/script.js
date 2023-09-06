function myNearZero(array) {
    let closest = array[0]

    for (num of array) {
        if (num < 0) {
            condition = (num*num < closest*closest)
        } else {
            condition = (num < closest)
        }

        if (condition) {
            closest = num
        }
    }
    return closest
}

console.log(myNearZero([3,8,4,2,5]))
console.log(myNearZero([-1,-4,2,5,9]))