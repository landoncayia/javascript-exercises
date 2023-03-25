const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function(nums) {
  return nums.length
    ? nums.reduce((product, num) => product * num)
    : 0;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  const nums = Array.from({length: n}, (_, i) => i + 1);
  return nums.length ? multiply(nums) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
