function myArraySort(array, sorting) {

    let change = 0

    while (true) {
        for (let i = 0; i < long(array); i++) {

            let condition
            switch (sorting) {
                case "ASC":
                    condition = (array[i] > array[i+1])
                    break
                case "DESC":
                    condition = (array[i] < array[i+1])
                    break
                default:
                    condition = false
            }

            if (condition) {
                let tmp = array[i]
                array[i] = array[i+1]
                array[i+1] = tmp

                change++
            }
        }

        if(change == 0){
            break
        } else {
            change = 0
        }
    }
    
    return array
}

function long(array) {
    count = 0
    for(let item of array) {
        count++
    }
    return count
}
console.log(myArraySort([1,5,67,12,3], "ASC"))