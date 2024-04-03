/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  let next = longest(words.slice(1));
  if (words[0].length > next) {
    return words[0].length;
  }
  return next;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return "";
  } else if (str.length < 2) {
    return str[0];
  }
  return str[0].concat(everyOther(str.slice(2)));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  let first = str[0];
  let last = str[str.length - 1];
  if (first === last) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr[0] === val) {
    return 0;
  }
  let next = findIndex(arr.slice(1), val);
  if (next < 0) {
    return -1;
  } else {
    return 1 + next;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str <= 1) {
    return str;
  }
  return str[str.length - 1].concat(revString(str.slice(0, -1)));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return [];
    }
    let first = obj[0];
    if (typeof first === "string") {
      return [first].concat(gatherStrings(obj.slice(1)));
    }
    return gatherStrings(obj.slice(1));
  } else if (typeof obj === "object") {
    let values = Object.values(obj);
    return gatherStrings(values);
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
