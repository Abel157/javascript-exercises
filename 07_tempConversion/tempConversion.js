const convertToCelsius = function(tf) {
  return (Math.round((5/9*(tf - 32))*10)/10);
};

const convertToFahrenheit = function(tc) {
  return (Math.round((9/5 *tc + 32)*10)/10);
};
console.log(convertToFahrenheit(23));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
