// ques 1///-------
function maxMinString(s) {
  let str = s.split(" ");
  if (str == null) {
    return "you have empty string";
  }
  if (str.length === 1) {
    return "you have only one word";
  }
  console.log(str);
  let max = str[0].length;
  let min = str[0].length;
  let maxstr = "";
  let minstr = "";
  console.log(max);
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > max) {
      max = str[i].length;
      maxstr = str[i];
    }
    if (str[i].length < min) {
      min = str[i].length;
      minstr = str[i];
    }
  }
  return [maxstr, minstr];
}
let s = "hardships often prepare people for an extraordinary destiny";
let maxmin = maxMinString(s);
console.log(maxmin);
//  Time complexity:- nlogn+O(n) ,where n is length of array string
//  space complexity:- O(1) , contant 8 byte space

// ques2///----

function integerTarget(array, target) {
  let originalarr = [...array];
  console.log(originalarr);
  let arr = array.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [originalarr.indexOf(arr[i]), originalarr.indexOf(arr[j])];
      // return [i, j];
    } else if (arr[i] + arr[j] > target) j--;
    else if (arr[i] + arr[j] > target) i++;
  }
}
// let array = [2, 7, 11, 15];
let array = [3, 2, 4];
let target = 6;
const findindex = integerTarget(array, target);
console.log(findindex);
// Time complexity:- O(n)
// space complexity:- O(1)
