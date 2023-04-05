const nameValue = {
  name : 'leesemin',
  age : 11,
  email : 'leesemin222@gmail.com'
}


function isNameCheck (nameObject) {
  if(typeof(nameObject) !== 'object'){
    return new Error('parameter is not an object');
  };

  if(nameObject.name === 'leesemin'){
    if(nameObject.age === 11){
      if(nameObject.email === 'leesemin222@gmail.com'){
        return true;
      } else {
        return false;
      } //email 끝
    } else {
      return false;
    } //age 끝
  } else {
    return false;
  } //name 끝
};

console.log(isNameCheck('이것은 오브젝트가 아닌것이여'))