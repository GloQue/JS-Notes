//I am going to create a function that takes in another function as a parameter(which is known as a callback function)

function addTwoNumbers(num1, num2){
    return num1 + num2
} 


function takeInACallbackAndMultiplyByAValue(repNum1, repNum2, valueToMultiplyBy, callbackFnctn){
   return callbackFnctn(repNum1, repNum2) * valueToMultiplyBy
}   // 


console.log(takeInACallbackAndMultiplyByAValue(10, 3, 6, addTwoNumbers))


// addTwoNumbers acts as a parameter and is invoked when the takeInACallbackAndMultiplyByAValue function is called