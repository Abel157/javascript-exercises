const reverseString = function(str) {
    let strarr=str.split("");
    console.log(strarr);
    strarr.reverse();
    const result=strarr.join("");
    console.log(result);
    return result;
};
reverseString("hjy lmn");

// Do not edit below this line
module.exports = reverseString;
