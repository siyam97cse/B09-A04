// Problem-1
// function calculateMoney(numOfTicket){
//     const ticketPrice = 120;
//     const earnMoney = (numOfTicket * ticketPrice);
//     const guardCost = 500;
//     const numOfStaff = 8;
//     const staffCost = 50;
//     const spendMoney = (guardCost + (numOfStaff*staffCost));
//     const remainningMoney = (earnMoney - spendMoney);
//     return remainningMoney;
// }
// let value =calculateMoney(100);
// console.log(value);


// *********Problem-2******
// function checkName(str) {
//     const lastChar = str[str.length - 1];
//     const badChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w', 'A', 'Y', 'I', 'E', 'O', 'U', 'W'];
//     if (badChar.includes(lastChar)) {
//         console.log('Bad word');
//     } else {
//         console.log('Good word');
//     }
// }
// checkName("SalmanI"); 


//*************Problem-3**********
//const array = {num: [ 1 , 2 , 3 ]};
// function deleteInvalids(arr) {
//     if( Array.isArray(arr)){
//     return arr.filter(item => typeof item === 'number' && !isNaN(item));
//     }
    
// }
// const array = ["1",{num:2},NaN, 2];
// //const array = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// const numbersOnly = deleteInvalids(array);

// console.log(numbersOnly);



// *********Problem-04*************
// const userInfo = {name: "kolimoddi", birthYear: 1999, siteName: "google"};

// function password (object){
//     const password =  object.siteName + '#' + object.name + '@' +  object.birthYear;
//     return password;
// }

// console.log(password(userInfo))

//**************Problem-5****************
// function monthlySavings(arr, livingCost){
//     let sum = 0;
//     for(let i = 0; i<= arr.length; i++){
//         sum +=arr[i];
//     }
//     sum = sum- livingCost;
//         return sum;
// }

// const monthlyCost = [1000, 2000, 3000];
// const monthlyEarning = 5000;
// console.log(monthlySavings[monthlyEarning, monthlyCost]);
