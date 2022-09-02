const birthYears = [1964, 2008, 1999, 2015, 1978, 1985, 1919]
function getDrivers(array){
    return array.filter(e => age(e) >= 17) // returns a new array with only those elements that fit the condition. Written in arrow syntax
  }
  
  // the same just writen with anonymous function as a argument
  function getDrivers_2(array){
    return array.filter(function(e){
      return age(e) >= 17 // we are calling the age function with the current element of the array as an argument
    })
  }
  
  
  console.log(getDrivers(birthYears));
  console.log(getDrivers_2(birthYears));