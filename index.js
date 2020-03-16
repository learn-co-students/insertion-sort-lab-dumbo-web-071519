// example
// arr = [-2, 4, 0, 3, 5, 4]

function findMinAndRemove(array){
  let minNum = array[0]
  let minIndex = 0
  for (let i=0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return minNum
}

function insertionSort(array){
  const sortedArr = []
  while (array.length !== 0) {
    sortedArr.push(findMinAndRemove(array))
  }
  return sortedArr
}
