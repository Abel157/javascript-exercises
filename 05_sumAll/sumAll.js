const sumAll = function(arg1,arg2) {
    let sum=0;
    const arr=Array.from(arguments);
    for (let nums of arr){
        if ((nums<0) ||(nums<0)){
            return("ERROR")
        }
        else if(Math.floor(nums)< nums){
            return("ERROR");
        }
        else if(!(typeof(nums)=="number")){
            return("ERROR");
        }
    }
    num2=Math.max(arg1,arg2);
    num1=Math.min(arg1,arg2);
    while (num1<=num2){
        sum+=num1;
        num1++;
    }
    return (sum);
};

// Do not edit below this line
module.exports = sumAll;
