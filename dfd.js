// https://leetcode.com/problems/basic-calculator-ii/

// Sucesssssssssssssssss



/* 
Input: s = "3+2*2"
Output: 7

Input: s = " 3/2 "     // what is this
Output: 1

Input: s = " 3+5 / 2 "
Output: 5 
*/

let s = " 3+5 / 2 " 
    // " 3+15 / 2 "          <========
    // " 3/2 "
    //" 3+  2 /1"
s = s.trim()
s = s.replace(/ /g, '')
//console.log(s)           // 3+2/1

let arr = []
let temp = ''
for(let i = 0; i < s.length; i++) {
  if ( s.charAt(i) != '+' && s.charAt(i) != '-' && s.charAt(i) != '*' && s.charAt(i) != '/' ) {
    temp = temp + s.charAt(i)
  } else {
    arr.push(temp)
    arr.push(s.charAt(i))
    temp = ''
  }
}

if (temp.length > 0) {
  arr.push(temp)
}

//console.log(arr)         //   [ '3', '+', '2', '/', '1' ]

// lets devide
const devide = element => element == '/' 

//console.log(devideIndex)

let left = 0, right = 0, result = 0
let devideIndex = arr.findIndex(devide)

while (devideIndex != -1) {
  left = arr[devideIndex - 1]    
  right = arr[devideIndex + 1]    
  result = Number(left) % Number(right)

  arr[devideIndex - 1] = 'R'  
  arr[devideIndex + 1] = 'R'

  arr[devideIndex] = result

  temp = arr.join('').replace(/R/g, '')
  arr = temp.split('')
  
  devideIndex = arr.findIndex(devide)
}

// console.log(arr)                // [ '3', '+', '0' ]


// lets multiply
const multiply = element => element == '*' 

//console.log(devideIndex)

let multiplyIndex = arr.findIndex(multiply)

while (multiplyIndex != -1) {
  left = arr[multiplyIndex - 1]    
  right = arr[multiplyIndex + 1]    
  result = Number(left) * Number(right)
  
  arr[multiplyIndex - 1] = 'R'  
  arr[multiplyIndex + 1] = 'R'
  arr[multiplyIndex] = result
  
  temp = arr.join('').replace(/R/g, '')
  arr = temp.split('')
  
  multiplyIndex = arr.findIndex(multiply)
}

console.log(arr)               // [ '3', '+', '0' ]

// lets add
const add = element => element == '+' 

//console.log(devideIndex)

let addIndex = arr.findIndex(add)

while (addIndex != -1) {
  left = arr[addIndex - 1]    
  right = arr[addIndex + 1]    
  result = Number(left) + Number(right)
  
  arr[addIndex - 1] = 'R'  
  arr[addIndex + 1] = 'R'
  arr[addIndex] = result
  
  console.log(result)
  
  temp = arr.join('').replace(/R/g, '')
  arr = temp.split('')
  
  addIndex = arr.findIndex(add)
}

console.log(arr)           // [ '3' ]

// lets substract
const substract = element => element == '-' 

//console.log(devideIndex)

let substractIndex = arr.findIndex(substract)

while (substractIndex != -1) {
  left = arr[substractIndex - 1]    
  right = arr[substractIndex + 1]    
  result = Number(left) - Number(right)
  
  arr[substractIndex - 1] = 'R'  
  arr[substractIndex + 1] = 'R'
  arr[substractIndex] = result
  
  temp = arr.join('').replace(/R/g, '')
  arr = temp.split('')
  
  substractIndex = arr.findIndex(substract)
}

console.log(arr)







