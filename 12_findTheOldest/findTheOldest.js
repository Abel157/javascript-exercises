const findTheOldest = function(arr) {
    let input=arr.slice();
    let currentyear=new Date();
    for (persons of input){
        persons.age=((persons.yearOfDeath)? persons.yearOfDeath: currentyear.getFullYear())-persons.yearOfBirth;
    };
    return input.sort((a,b)=> a.age - b.age)[input.length -1];
    
        
        
    
};
console .table(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));
// Do not edit below this line
module.exports = findTheOldest;
