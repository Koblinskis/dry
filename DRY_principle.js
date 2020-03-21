// The DRY principle (DO NOT REPEAT YOURSELF)


// This code does not follow the DRY principle
const someFunction = (arr, arr2) => {
  if(arr.includes(arr2)) {
    return console.log(`The ${arr2} array is within the ${arr}`)
  }
  if(arr2.includes(arr)) {
    return console.log(`The ${arr} array is within the ${arr2}`)
  }
}


// This code follows the DRY principle
const arrCheck = (agr1, agr2) => {
  if(agr1.includes(agr2)) {
    return console.log(`The ${arg2} array is within the ${arg1}`)
  }
}

const someFunction = (arr, arr2) => {
  arrCheck(arr, arr2);
  arrCheck(arr2, arr);
}