const removeFromArray = function() {// if the rest paramater was used it would be function( arr, ...args);
    const args=Array.from(arguments);
    const arr=args[0];
    args.splice(0,1);
    for (let items of args){         // instead of splicing the old array i could make a new array by pushing values                                 
        let i=0;                    //    in the old array that are not in the args " also easier to remove duplications since "
        while (i < arr.length){      //       if a value occurs atleast once it will not be pushed. 
            if (items===arr[i]){
                arr.splice(i,1);
                i-=1
            }
            else{
                i++;
            }
        }
        
    }
   return(arr);
};



// Do not edit below this line
module.exports = removeFromArray;
