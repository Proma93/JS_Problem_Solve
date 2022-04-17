//How can you print 1 to 6 number randomly while playing ludo
function getRndomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(getRndomNumber(1,6));

  
  