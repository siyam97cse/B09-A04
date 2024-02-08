function monthlySavings(arr, livingCost){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let amount;
        if(arr[i] >= 3000){
            amount = arr[i] - (arr[i]*(20/100));
            
          
        }
         else {
             amount = arr[i];
         }
       sum  = sum + amount;
    }
    
    sum = livingCost - sum;
        return sum;
}

const monthlyEarning = [1000, 2000, 3000];
const monthlyCost = 5400;
console.log(monthlySavings(monthlyEarning, monthlyCost));
