
// ------------------------------------------08.08.2021 -----שאלות פןנקציה ------------------------------------------


// --------------------------------------------1--------------------------------------------
// function printNumber() {
//     var username = "yafit"
//     for (var i = 0; i < 5; i++) {
//         console.log(username);
//     }
// }

// printNumber();



// --------------------------------------------2--------------------------------------------

// function printNames(username) {
//     for (var i = 0; i < 5; i++) {
//         console.log(username);

//     }
// }

// printNames("yafit")


// -----------------------------------------------3----------------------------------------------

// function printNumber() {
//     var num1 = 3
//     var num2 = 8
//     console.log(num1 * num2)

// }

// printNumber()

// -----------------------------------------------4----------------------------------------------

// function printNumberArgument(num1, num2) {
//     console.log(num1+ num2)
// }
// printNumberArgument(5, 6)
// -----------------------------------------------5----------------------------------------------

// function twoNumbers(num1, num2) {
//     if (num1 < num2) {
//         return(num1)
//     }
//     else {
//         return(num2)
//     }
// }
// var min = twoNumbers(6, 8)
//     console.log(min)


// -----------------------------------------------6----------------------------------------------


// function printNumberArgument(number) {
//     while (number > 0){
//         var modulu = number % 10;
//         var number = (number / 10) - (modulu / 10);
//         var sum= modulu+modulu
//         return sum
//     }
// }
// var sumModulu=printNumberArgument(123)
// console.log(sumModulu)

// -----------------------------------------------7----------------------------------------------
// ---------------------א-----------------

// var Numbers = [6, 2, 4, 5]
// var sum = 0
// function sumAll(Numbers) {
//     for (var i = 0; i < Numbers.length; i++) {
//         sum = sum + Numbers[i]
//     }
//     return (sum)
// }
// var sumNumbers = sumAll(Numbers)
// console.log(sumNumbers)


// var Numbers = [6, 2, 4, 5]
// var kefel = 1
// function kefelAll(Numbers) {
//     for (var i = 0; i < Numbers.length; i++) {
//         kefel = kefel * Numbers[i]
//     }
//     return (kefel)
// }
// var kefelNumbers = kefelAll(Numbers);
// console.log(kefelNumbers);


// var Numbers = [6, 2, 4, 5]
// min = Numbers[0]
// function katan(Numbers) {
//     for (var i = 0; i < Numbers.length; i++) {
//         if (min > Numbers[i]) {
//             min = Numbers[i]
//         }
//     }
//     return (min)
// }
// var minimum = katan(Numbers);
// console.log(minimum);


// var Numbers = [6, 2, 4, 5]
// max = Numbers[0]
// function gadol(Numbers) {
//     for (var i = 0; i< Numbers.length; i++) {
//         if (max < Numbers[i]) {
//             max = Numbers[i]
//         }
//     }
//     return (max)
// }
// var maximum = gadol(Numbers);
// console.log(maximum);


// -----------------------------------------------8----------------------------------------------
// function mahrozet(name1){
//     console.log(name1.length)
// }
// mahrozet ("yafit")

// -----------------------------------------------9----------------------------------------------

// let Numbers = [6, 2, 4, 5]
// var a = Number(prompt("enter a number"))
// function maarah(Numbers) {
//     for (var i = 0; i < Numbers.length; i++) {
//         if (Numbers[i] == a) {
//             let index = i
//             Numbers.splice(index, i)
//             Numbers[i]
//             console.log(Numbers,i)
//         }
//         else{
//             console.log("not exist" )
//         }
//     }
// }
// maarah(Numbers)
// -----------------------------------------------10---------------------------------------------

// var Numbers = [6, 2, 4, 5]
// function mahrozet(Numbers) {
//     for (var i = 0; i < Numbers.length; i++) {
//         Numbers[i] = Numbers[i] * 3
//     }
//     return (Numbers)
// }
// var x = mahrozet(Numbers)
// console.log(x)
// 
// -----------------------------------------------11--------------------------------------------

// var Numbers = [6, 2, 4, 5, 4, 6, 3, 3]
// function mahrozet(Numbers) {
//     for (var i = 0; i < 0; i++) {
//     }
// }

// --------------------------למידה עצמית ומחודשת --------------------------------------
// -------------------------1-------------------------
// function printMyName(){
//     var username = "yafit"
//     for(var i=0;i<5;i++){
//         console.log(username);
//     }
// }
//  printMyName();


//  -------------------------2-------------------------

// function printMyName(myName){
//     for(var i=0;i<5;i++){
//       console.log(myName)
// }
// }
// printMyName("yafit");

// -------------------------3-------------------------

// function twoNumbers(){
//   num1=8
//   nun2=3
//   console.log(num1*nun2)
// }

// twoNumbers()

// -------------------------4-------------------------

// function twoNumbers(num1, num2){
// var sum=num1+num2
// console.log(sum)

// }
// twoNumbers(3,5)

// -------------------------5--------------------------

// function twoNumbers(num1, num2) {
//     if (num1 < num2) {
//         return num1
//     }
//     else if (num1 > num2) {
//         return num2
//     }
// }
// var x=twoNumbers(3, 2)
// console.log(x)

// -------------------------6----------------------------

// function fullNumber(num) {
//     while (num > 0) {
//         var modulu = num % 10
//         var num = (num / 10) - (num / 10)
//         var sum = modulu + modulu
//         return (sum)
//     }
// }
// var x = fullNumber(564)
// console.log(x)

// ------------------------8----------------------------


// function mahrozet(username) {
//     return username.length
// }
// var x=mahrozet("yafit")
// console.log(x)


// ------------------------9----------------------------
// var userinput = Number(prompt("enter a number"));
// function maarah(array) {
//     for (var i = 0; i <array.length; i++) {
//         if (array[i] == userinput) {
//             array.splice(i, 1)
//             return (i)
//         }
//     }
//     return ("no exist")
// }
// var x = maarah([5, 3, 4, 57])
// console.log(x)

// -----------------------10---------------------------
// function maarah(array) {
//     for (var i = 0; i < array.length; i++) {
//         array[i] = array[i] * 3
//          return (array)
//     }
// }
// var x = maarah([7, 1, 3])
// console.log(x)

// -----------------------11---------------------------
function maarah(array){
    for (var i = 0; i < array.length; i++) {
        for(var j =+1; j < array.length; j++){
            if(array[i]==array[j]){
                array.splice (j,1)
            }
        }
       

        }
        return(array)
    }

var x=maarah([5,5,5,5,9,8,7,,66,66])
console.log(x)


