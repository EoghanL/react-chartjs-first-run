export default function getSpecsByMonth(data, month){
  let initObj = {};
  let statObj = {};
  data.forEach(function(element){
    let monthNum = parseInt(element.signUpDate.getMonth());
    let dayNum = parseInt(element.signUpDate.getDate())
    if(monthNum === month){
      if(initObj.hasOwnProperty(dayNum)){
        initObj[dayNum] += 1;
      }
      else{
        initObj[dayNum] = 1;
      }
    }
  });
  let keys = Object.keys(initObj);
  keys.sort(function(a,b){ return a - b });
  for(let i = 0; i < keys.length; i++){
    statObj[keys[i]] = initObj[keys[i]];
  };
  return { type: 'SHOW_MONTHS', payload: { stats: statObj, month: month } };
}
