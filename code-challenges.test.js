// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacci", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) Declare a fuction to set up the fibonacci sequence. Create a function that has an array with 0 and 1.

function fibonacci(n) {
    const fib = [1, 1]

// 2.) Make a for loop to iterate on the array.
  for (let i = 0; i< n - 2; i++) {

    // 3.) Have fib identify the index in the array and have it equal to the previous 2 indexes.
    fib[i + 2] = fib[i + 0] + fib[i + 1]
  }
  // 4.) Have it return the new array if the fibonacci sequence
    return fib
}

// console.log(fibonacci(fibLength1))
// console.log(fibonacci(fibLength2))


// // // --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// // // Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// // // // a) Create a test with expect statements for each of the variables provided.

describe("leastToGreatest", () => {
  it("Create a test with expect statements for each of the variables provided.", () => {
      expect(dayArray(studyMinutesWeek1).toEqual([15, 15, 20, 30, 30, 60, 90]))
      expect(dayArray(studyMinutesWeek2).toEqual([10, 15, 20, 45, 60, 65, 100]))
  })
})

// TypeError: dayArray(...).toEqual is not a function

// It's giving me this error code and i am unable to detect the problem. To my knowledge the function i wrote works and i feel like I also wrote the test right so im confused on what i did wrong.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]



// // b) Create the function that makes the test pass.

const dayArray = (object) => {
  return Object.values(object).sort((a, b) => (a - b) )
}
// console.log(dayArray(studyMinutesWeek1))
// console.log(dayArray(studyMinutesWeek2))

// Pseudo code:

// 1.) Declare a function that takes the value of the object and displays the value in the array. 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingSum", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
      expect(accumSum(accountTransactions1)).toEqual([100, 83, 60, 51])
      expect(accumSum(accountTransactions2)).toEqual([250, 161, 261, 165])
      expect(accumSum(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) Create a function that takes in an array (parameter) and takes in any array 

const accumSum = (array) => {
// 2.) Create a for loop where the sum, that starts at 0, is added to the elements and returns the new sum into the empty array. The for loop will iterate over the length of the array. 
  let sum = 0 
  let newSum = []
  for (let i = 0; i<array.length; i++) {
    
// 3.) Create the logic in the for loop by having the sum, 0, plus the value of the element to equal a sum. Then to take that value and push it to the value in the next index and add those values together.

    sum = array[i] + sum 
    array[i] = array[i] + array[i]
    newSum.push(sum)
  }
//  4.) have the function return the sum of each iteration to the empty array newSum.
  return newSum
}


// console.log(accumSum(accountTransactions1))
// console.log(accumSum(accountTransactions2))
// console.log(accumSum(accountTransactions3))