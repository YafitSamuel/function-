// ====================תרגול לפני מבחן 11.08.2021=================
// function printMyName(){
// var userinput="yafit"
// for(var i=0; i<5; i++){
//     console.log(userinput)
// }
// }
// printMyName()
// ======================================1
// function printMyName(username) {
//     for (var i = 0; i < 5; i++) {
//         console.log(username)
//     }
// }
// printMyName("hana")
// ======================================2
// function sumAllNumbers(a, b) {
//     sum = a + b
//     console.log(sum)

// }

// sumAllNumbers(6, 4)
// sumAllNumbers(2, 9)

// ======================================4
// function sumAllNumbers(){
//     var num1=3
//     var num2=4
//     sum=num1+num2
// console.log(sum)
// }
// sumAllNumbers()

// ======================================3

// function getTwoNumbers(a, b) {
//     if (a > b) {
//         console.log(b)
//     }
// }
// getTwoNumbers(4, 3);

// ======================================5
// sum=0;
// function getFullNumber(num){
// while (0 < num) {
//     var modulu=num %10
//     var num=(num/10)-(modulu/10)
// sum=sum+modulu

// }
// return sum

// }
// var sumAll=getFullNumber(642);
// console.log(sumAll);
// ======================================6

// function getMahrozet(length){
//     return length.length
// }
// var x= getMahrozet("hila")
// console.log(x)

// ======================================8

// function getArray(array){
//     var userinput=Number(prompt("enter a number"));
//     for(var i=0; i<array.length ;i++){
//         if(userinput==array[i]){
//             array.splice(array[i],1)
//             return [i]
//         }
//     }
//     return "no exsit"
// }
// var x= getArray([5,4,3,2,])
// console.log(x);

// ======================================9

// function getArray(array){
//     for(var i=0; i<array.length;i++){
//          array[i]=array[i]*3
//     }
//     return array
// }
// var x=getArray([3,2,4,7])
// console.log(x)

// ======================================10



// function getArray(array) {
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i + 1; j < array.length; j++) {
//             while (array[i] == array[j]) {
//                 array.splice(j, 1) למה שמים רק אנידקבס ולא מערך אינדקס?
//             }
//         }
//     }
//     return array
// }
// var x = getArray([3,4,5,6,77,5,3,3,3,77,77]);
// console.log(x);

// ======================================11





//========================= יום תרגולים ==========================



// =====================1=====================
// function getMaarah(array){
// array.reverse()
// return array
// }
// var x=getMaarah([3,5,4,3,2,])
// console.log(x)

// =====================2=====================חזרה על כל השאלה 
// var myNumbers = [0, 5, 3, 4, 5, 6, 7, 8, 9, 10];
// function createPhoneNumber(numbers) {
//     var num = "";
//     for (var i = 0; i < numbers.length; i++) {
//         num += numbers[i]
//         if (i == 2 || i == 5) {
//             num += "-"
//         }
//     }
//     return num
// }
// console.log(createPhoneNumber(myNumbers))

// =====================3=====================חזרה על כל השאלה







// =====================4=====================
function getFullNumber(num) {
    var kefel = 1
    for (var i = 1; i <= num; i++) {
        kefel = kefel * i
    }
    return kefel
}
var x=getFullNumber(4)
console.log(x)