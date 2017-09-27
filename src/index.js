module.exports = function zeros(expression) {
  expression = expression.split('*');
  var countFives = 0, countTwos = 0;
  
  for (let k=0; k<expression.length; k++) {

    var factorialLength = expression[k].match(/!/g).length
    var current = parseInt(expression[k])
        
    if (factorialLength === 1) {
      
      var factorsOfFive = Array(current).fill().map((x, i) => i+1).filter((x) => x % 5 === 0)
      var factorsOfTwo = Array(current).fill().map((x, i) => i+1).filter((x) => x % 2 === 0)

    } else if (factorialLength === 2) {
      
      if (current % 2 == 0 ) {
        
        var factorsOfFive = Array(current).fill().map((x, i) => 2*i+2).filter((x) => x <= current && x % 5 === 0)
        var factorsOfTwo = Array(current).fill().map((x, i) => 2*i+2).filter((x) => x <= current && x % 2 === 0)
        
      } else {
        
        var factorsOfFive = Array(current).fill().map((x, i) => 2*i+1).filter((x) => x <= current && x % 5 === 0)
        var factorsOfTwo = Array(current).fill().map((x, i) => 2*i+1).filter((x) => x <= current && x % 2 === 0)
        
      }
    }
    
    for (let j=0; j<factorsOfFive.length; j++) {
      
      while( factorsOfFive[j] % 5 === 0) {
        countFives++;
        factorsOfFive[j] = factorsOfFive[j] / 5;
      }
      
    }

    for (let j=0; j<factorsOfTwo.length; j++) {
      while( factorsOfTwo[j] % 2 === 0) {
        countTwos++;
        factorsOfTwo[j] = factorsOfTwo[j] / 2;
      }
    }
  } 
  return Math.min(countTwos, countFives)
}