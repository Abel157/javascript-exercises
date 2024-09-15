const palindromes = function (word) {
    let arr=[];
    let wordarr=[];
    let lettnums="abcdefghijklmnopqrstuvwxyz0123456789";
    for (char of word){
        if (!lettnums.includes(char.toLowerCase())) continue;
        else{
            wordarr.push(char);
            arr.unshift(char);
        }
    }
    const original=wordarr.toString().toLowerCase();
    const reverse=arr.toString().toLowerCase();
    return (original===reverse);
};
console.log(palindromes("racecar"));
// Do not edit below this line
module.exports = palindromes;
