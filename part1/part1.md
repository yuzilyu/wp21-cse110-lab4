### Part 1a
var declaration
1. line 9 prints "values added: 20"
2. line 13 prints "final result: 20"

let declaration
1. line 9 prints "values added 20"
2. the code will return an error because we declared result using "let" and the scope for result does not exist after the if block.

const declaration
1. line 9 will throw an error because result is declared through const which means the value of result cannot be changed after it's declared. 
2. line 13 will throw an error as well because the error on line 9 is not addressed.

### Part 1b
1. line 12 will log 3 to the console. i is declared using var which means the value of i can be accessed outside of the for loop. The for loop will increment i to 3 and the condition evaluates to false which ends the loop.
2. line 13 will log 150 to the console. discountedPrice is declared using var which makes this variable accessible outside of the for loop. The last item in prices array is 300 and discoutedPrice stores the price after it's 50% off. 
3. line 14 will log 150 to the console. finalPrice is declared using var which makes this variable accessible outside of the for loop. In the last for loop iteration, discountedPrice is 150. After rounding finalPrice stores 150.
4. This function will return an array that stores the prices after the discount. The variable discounted is declared using var and it will be accessible anywhere in the program.
5. line 12 will throw an error because the variable i is declared using let, which narrows the scope of i to the for loop. The system does not recognize i outside of for loop.
6. line 13 will throw an error because the variable discountedPrice is declared using let, which narrows the scope of it to the for loop. The system does not recognize discountedPrice outside of for loop.
7. line 14 will print 150. The variable finalPrice is declare using let outside of teh for loop. The system still recognizes finalPrice outside of the for loop. The last iteration of the for loop stores 150 into finalPrice which is why 150 is logged on console.
8. This function will return the array discounted which stores all the discounted price. The variable discounted is still in scope when we return the variable to outside of the function.
9. line 11 will throw an error because the variable i is declared using let, which narrows the scope of i to the for loop. The system does not recognize i outside of for loop.
10. line 12 will log 3 to the console. The variable length stores the length of the prices array which is 3. Since it's declared through const inside the function so it's still in scope.
11. This function will return the array discounted. The array is declared using const but the individual elements can still change inside the array, which is why the fuction will return the variable discounted with all the discounted price inside.
12. Given the above Object, write the notation for:
    - student.name
    - student["Grad Year"]
    - student.greeting()
    - student["Favorite Teacher"].name
    - student.courseLoad[0]
13. Arithmetic
    - '3' + 2 will output **32** since integers map to their exact string representation.
    - '3' - 2 will output **1** since the minus operator is involved. The string 3 needs to be interpreted as an interger
    - 3 + null will output **3** because we are not adding anything to interger 3.
    - '3' + null will be **3null** because 3 is a string representation here and null is interpreted as a string
    - true + 3 will output **4** because true is one and we are adding that to integer 3
    - false + null will output **0** because false is mapped to zero and adding null to a number will add zero
    - "3" + undefined will output **3undefined** because 3 is interpreted as a string 
    - "3" - undefined will output **NaN** because this is an undefined behavior
14. Comparison
    - '2' > 1 will output **true** because 2 will be interpreted as an integer and that is bigger than 1.
    - '2' < '12' will output **false** because this is a dictionary check comparing strings. Comparing the first char shows us that 2 is greater than 1 so this outputs to false
    - 2 == '2' will output **true** because this is a loose comparison. Although the type does not match, it will still evaluates to true
    - 2 === '2' will output **false** because this is a strict comparison where the type needs to match up
    - true == 2 will output **false** because true mapped to integer value 1 and that does not equal to 2
    - true === Boolean(2) will output **true** because Boolean conversion will convert 2 to true. 2 is not 0, or an empty string, or null, or undefined, or NaN, so it gets to convert to true. 
15. A regular equality check `==` does not differentiate 0 from falsebecause operands of different types are converted to numbers by the equality operator `==`. The strict equality opeartor `===` checks the equality without type conversion so when two objects are of different types, using this equality operator will immediately returns false.
16. [JavaScript file](/part1b-question16.js)
17. modifyArray([1,2,3], dosomething)
    - first newArr is created as an empty array
    - the for loop runs three iterations, during each iterations doSomething() is called with the number in the parameter array as the input. The doSomething() functions double the value and put them into the newArr
    - After the for loop is finished, newArr is returned.
    - newArr will have [2,4,6]
18. [JavaScript file](/part1/part1b-question18.js)
19. The console will first log 1 and 4 as they are in the function. Then the timer will be set. The console will log 3 first because the timer is set at 0 and then after one second 2 will be logged.