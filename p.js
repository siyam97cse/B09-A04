function monthlySavings(arr, livingCost){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let amount;
        if(arr[i] > 3000){
            amount = arr[i] + (arr[i]*(20/100));
            
            console.log('p', amount)
        }
         else {
             amount = arr[i];
         }
       sum  = sum + amount;
    }
    
    console.log(sum);
    
    sum = sum - livingCost;
        return sum;
}

const monthlyEarning = [1000, 2000, 10000];
const monthlyCost = 5000;
console.log(monthlySavings(monthlyEarning, monthlyCost));
