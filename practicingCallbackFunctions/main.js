//I am going to create a function that takes in another function as an argument(which is known as a callback function)

function addTwoNumbers(num1, num2){
    return num1 + num2
} 


function takeInACallbackAndMultiplyByAValue(repNum1, repNum2, valueToMultiplyBy, callbackFnctn){
   return callbackFnctn(repNum1, repNum2) * valueToMultiplyBy
}   // 


console.log(takeInACallbackAndMultiplyByAValue(10, 3, 6, addTwoNumbers))


// addTwoNumbers acts as a parameter and is invoked when the takeInACallbackAndMultiplyByAValue function is called






//ANOTHER EXAMPLE

function calculate(num1, num2, operation, callback){
    return callback(num1, num2, operation)
   }
   
   
   
   function returnResult(val1, val2, op){
     switch(op){
       case '+':
        return val1 + val2;
       case '-':
         return val1 - val2;
       case '*':
         return val1 * val2;
       case '/':
         return val1 / val2;
       default:
         return val1 + val2;
     }
   }
   
   console.log(calculate(20, 10, "+", returnResult))
   

//ANOTHER ONE
/*Exercise: Create a Calculator with Callbacks

Create a JavaScript function called calculate that takes three parameters:

num1 (a number)
num2 (a number)
operation (a string, representing an arithmetic operation like "add", "subtract", "multiply", or "divide").
Inside the calculate function, use a switch statement to perform the specified arithmetic operation on num1 and num2.

Instead of returning the result directly, create a callback function parameter called callback.

After performing the operation, call the callback function with the result as an argument.

Create a few callback functions (e.g., displayResult, logResult, alertResult) that will be passed as callbacks to the calculate function.

Test your calculate function by using it with different pairs of numbers and operations, passing different callback functions each time to display, log, or alert the result.*/



function calculate(num1, num2, operation, callback) {
    let result;
  
    // Perform the arithmetic operation based on the 'operation' parameter
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operation";
    }
  
    // Call the callback function with the result
    callback(result);
  }
  
  // Example callback functions:
  function displayResult(result) {
    console.log("Result:", result);
  }
  
  function logResult(result) {
    alert("Result: " + result);
  }
  
  function alertResult(result) {
    alert("The result is: " + result);
  }
  
  // Testing the calculate function with different callbacks
  calculate(5, 3, "add", displayResult);
  calculate(10, 2, "divide", logResult);
  calculate(7, 4, "multiply", alertResult);
  