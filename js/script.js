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








let number = parseInt(prompt('Enter the number'));
let sum = 0;
let temp =sum;
while (number> 0) {
    let rem = number % 10;
        number=(number-rem)/10
    sum += rem * rem * rem;
 
}
if (temp== number) {
    console.log(` Given number is an Armstrong number`);
}
else {
    console.log(`  Given number is not an Armstrong number.`);
}
