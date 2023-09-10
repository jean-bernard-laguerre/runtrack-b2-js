function myArraySort(array, sorting) {

    let change = 0
    let count = 0
    for(let item of array) {
        count++
    }

    while (true) {
        for (let i = 0; i < count; i++) {

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