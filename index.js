function findMinAndRemove(array){
    let smallestNum = array[0]
    let index = 0
    for(let i=0; i<array.length; i++){
        if(array[i] <= smallestNum){
            smallestNum = array[i]
            index = i
        }
    }
    array.splice(index, 1);
    return smallestNum
}

function insertionSort(array){
    let sortedArr = []
    for(let j =0; j<array.length; j++){
        while (array.length != 0){
        sortedArr.push(findMinAndRemove(array))
        }
    }
    return sortedArr
}
