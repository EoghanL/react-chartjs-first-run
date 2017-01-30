//Load Initial Chart for the whole year
export default function chartAdapt(data) {
  let initObj = {};
  let statObj = {};
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  data.forEach(function(element){
    let monthNum = parseInt(element.signUpDate.getMonth());

    if(initObj.hasOwnProperty(monthNum)){
      initObj[monthNum] += 1;
    }
    else{
      initObj[monthNum] = 1;
    }
  });

  let keys = Object.keys(initObj);
  keys.sort(function(a,b){ return a - b });
  for(let i = 0; i < keys.length; i++){
    statObj[months[keys[i]]] = initObj[keys[i]];
  };
  return statObj;

}
