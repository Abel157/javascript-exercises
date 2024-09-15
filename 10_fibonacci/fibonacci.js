const fibonacci = function(num) {
    let arr=[1,1]
    let prev = 0;
    let curr=1;
    let next=0;
    if (+num==0) return 0;
    if (+num<0) return "OOPS";

    if (+num>2){
        while (num-2){
            next=arr[prev] + arr[curr];
            arr.push(next);
            prev+=1;
            curr+=1
            num--;
        }
        return next;
    }
    else {
        return arr[+num-1];
    }
}

// Do not edit below this line
module.exports = fibonacci;
