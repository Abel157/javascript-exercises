const repeatString = function(str,num) {
    i=0;
    let result="";
    if (num < 0) return("ERROR");
    while (i<num){
        result+=str;
        i++;
    } 
    return result
};

// Do not edit below this line
module.exports = repeatString;
