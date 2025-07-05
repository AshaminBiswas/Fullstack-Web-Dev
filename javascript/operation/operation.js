console.log("operation/operators in java script");
// LOGICAL OPERATOR

/*
&& --> AND  operator
in AND operation the every condition should be true be then its give (TRUE ) 
other wise if a single condition false thens its return (FALSE)

note: AND operator is found a first condition false the not check the other conditions 
its direct returns false
*/
let isLoggedin = true;
let isPaid = false;
console.log(isLoggedin && isPaid);

/*

|| --> OR operator

in OR operator if one condition is true then it's return true 
if every condition is false then its return false

*/

let iAmAbove18 = true;
let mySisterAbove18 = false;

console.log(iAmAbove18 || mySisterAbove18);

/*
ASSIGNMENT Operator
the operation behind it 
first ----  num1 = 10
then--- num1 = num1 + 5
result== 20

(num1 += 5)
*/

let num1 = 10;
num1 += 10;
console.log(num1); // 20
