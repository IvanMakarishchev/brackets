module.exports = function check(str, bracketsConfig) {
  let opening = [];
  let closing = [];
  let strArray = str.split('');
  let container = [];
  bracketsConfig.forEach(el => {
    el.forEach((el,index) => {
      if (index%2===0){
        opening.push(el);
      } else {
        closing.push(el);
      };
    });
  });
  do {
    if (container.length === 0){
      if (opening.indexOf(strArray[0])<0){
        return false;
      } else {
        container.push(strArray.shift());
      }
    } else {
      let lastInContainer = container[container.length-1];
      if (closing.indexOf(strArray[0])>=0){
        if (closing.indexOf(strArray[0])===opening.indexOf(lastInContainer)){
          container.pop();
          strArray.shift();          
        } else if (opening.indexOf(strArray[0])>=0){
          container.push(strArray.shift());                 
        } else {
          return false;
        }
      } else {
        container.push(strArray.shift());
      }
    }
  } while (strArray.length>0);
  if (container.length === 0) { return true }
  else { return false };
}
