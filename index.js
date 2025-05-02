const { Temporal } = require("temporal-polyfill");

import * as ZonedDateTime from "temporal-polyfill/fns/zoned-date-time.js";

const reverseString = (str) => {
    let reversedStr = '';
    for(let i= str.length -1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString('hello world'));



const isPalindrome = (str) => {
    const reversedStr = reverseString(str);
    return str === reversedStr;
}
console.log(isPalindrome('amma')); // true

const isAnagram = (str1, str2) => {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram('appa', 'papa')); // true

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase.
// For example, "listen" and "silent" are anagrams because they contain the same letters in a different order.


const removeDuplicates = (arr) => {
    const uniqueArr = [];
    for(let i=0; i<arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3])); // [1, 2, 3, 4, 5]

const testData = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 20 },
    { name: 'Doe', age: 30 },
    { name: 'Alice', age: 20 }
];

// console.log(
//     testData.groupBy(item => item.age)
// );

const rotateArray = (arr, k) => {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than n
    return arr.slice(n - k).concat(arr.slice(0, n - k));
}
console.log(rotateArray([1, 2, 3, 4, 5,6,7], 3)); // [4, 5, 1, 2, 3]


const lengthOfLongestSubstring = (str) => {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (charSet.has(str[right])) {
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring('pwwkew')); // 3


console.log(
    Temporal.Now.zonedDateTimeISO().toString(),    
)