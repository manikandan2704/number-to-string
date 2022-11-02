// let input=456;

// while(input!=0){
//     let rem=input%10
//     if(rem==1){
//         console.log("one");
//     }
//     else if(rem==2){
//         console.log("two")
//     }
//     else if(rem==3){
//         console.log("three")
//     }
//     else if(rem==4){
//         console.log("four")
//     }
//     else if(rem==5){
//         console.log("five")
//     }
//     else if(rem==6){
//         console.log("six")
//     }
//     else if(rem==7){
//         console.log("seven")
//     }
//     else if(rem==8){
//         console.log("eight")
//     }
//     else if(rem==9){
//         console.log("nine")
//     }
//     else{
//         console.log("zero")
//     }

//     input=(input-rem)/10;
// }








// let number = parseInt(prompt('Enter the number'));
// let sum = 0;
// let temp =sum;
// while (number> 0) {
//     let rem = number % 10;
//         number=(number-rem)/10
//     sum += rem * rem * rem;
 
// }
// if (temp== number) {
//     console.log(` Given number is an Armstrong number`);
// }
// else {
//     console.log(`  Given number is not an Armstrong number.`);
// }

// var num=10;
// var num1=0;
// var number1=0;
// var number2=1;
// console.log(number1,number2);
// for(i=0;i<num;i++){
//     num1=number1+number2
//     number1=number2
//     number2=num1
//     console.log(num1)
// }



// var num1=parseInt(prompt("enter the value"));
// let num2=num1;
// while(num1=0){
//     console.log(num1);
//     let temp =num1+=1
    
// }
// console.log(num1);


// let num=54748;
// let count=0;
// var result = num;
// var increase = 0;
// var alt = result;
// while(num>0){
//     let rem = num % 10;
//     num=(num-rem)/10
//     count+=1
// }
// while(result>0){
//     let rem = result % 10;
//     result = (result - rem)/10;
//     increase += (rem**count) 
// }
// if(increase== alt){
//     console.log("it is an armstrong number")
// }
// else{
//     console.log("it is not armstrong number")
// }
// console.log(increase);

// console.log(count)





// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(` is a prime number`);
//     } else {
//         console.log(` is a not prime number`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }
   


let num=13;
if(num%2==1){
    for(let i=2; i<13; i++){
        if(num%2!=0 && num%3!=0 && num%5!=0){
            console.log(i)
        }
    }
}



































