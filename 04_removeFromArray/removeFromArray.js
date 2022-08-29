const removeFromArray = function(array, ...removals) {
  let index;
  for (number of removals) {
    index = array.indexOf(number);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
