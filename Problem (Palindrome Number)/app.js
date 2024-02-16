var isPalindrome = function (x) {
  const strX = x.toString();
  const reversedStrX = strX.split("").reverse().join("");
  if (strX === reversedStrX) {
    return true;
  } else {
    return false;
  }
};
