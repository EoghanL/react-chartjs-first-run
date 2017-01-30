var casual = require('casual-browserify');

var endDate = new Date(2016, 12, 31)
var startDate = new Date(2016, 1, 1)

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomDate = function (date1, date2) {
   var minD = Date.parse(date1);
   var maxD = Date.parse(date2);
   var random = getRandomInt(parseInt(minD), parseInt(maxD));
   var randomDate = new Date();

   randomDate.setTime(random);

   return randomDate;
}

export default function seedData(){
  let seedArray = new Array(5000)
  casual.define('user', function(){
    let monthDay = casual.integer(1, 31)
    return {
      id: (casual.integer(0, 100000) + casual.unix_time),
      name: casual.full_name,
      email: casual.email,
      signUpDate: randomDate(startDate, endDate),
      company_name: casual.company_name
    }
  })
  for(let i = 0, l = seedArray.length; i < l; i++){
    seedArray[i] = casual.user
  }
  return seedArray
}
