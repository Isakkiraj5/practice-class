//  Odd numbers
 let even=function(num){
    odd=[];
   for(i=0;i<num.length;i++){
    if(num[i]%2!=0){
        odd.push(num[i]);
    }
   }
    
    return odd;
}

console.log("Odd Numbers are"+" "+even([2,3,4,5,6]))

// prime numbers
 let primenumbers=function(array){
    
    max=array[0];
    prime=[];
    for(i=0;i<array.length;i++){
        if(max<array[i]){
            max=array[i];
        }
        else{
            max=max
        }
    }
for(i=0;i<array.length;i++){
    count=0;
    for(j=2;j<=max;j++){
     if(array[i]%j==0){
        count=count+1
     }
     
    }
    if(count==1){
        prime.push(array[i])
       }
    
}
return prime;
}

console.log("Prime Numbers Are"+" "+primenumbers([3,4,5,6,7,8,9]))


// sum of array
let  sumofarray=function(array){
    count=0
for(i=0;i<array.length;i++){
    count=array[i]+count;
}
return count;
}
console.log("sum of the array"+" "+sumofarray([2,3,4,5,6,7]));


// converting String to uppercase
let string = function(data) {
    y = [];
    for (i = 0; i < data.length; i++) {
        x = data[i].charAt(0).toUpperCase() + data[i].slice(1);
        y.push(x);
    }
    return y;
}

console.log(string(["raj", "abi", "aakash"]));


// palindrome
let palendrome = function(data) {
    
    z=[]
    for (i = 0; i < data.length; i++) {
        x = data[i].split("");
       y= x.reverse().join("");
       if(data[i]==y){
    z.push(data[i])
       }
    }
    return z;
}

console.log("palindrome are"+" "+palendrome(["raj", "abi", "aakash","aaa","bbb"]));

// rotated array by k times
let rotateArray = function(arr, k) {
    let n = arr.length;
    k = k % n;
    let rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));

    return rotatedArray;
}

let originalArray = [1, 2, 3, 4, 5];
let rotations = 2;

let rotatedArray = rotateArray(originalArray, rotations);
console.log("Rotated Array"+" "+rotatedArray);

// median

let findMedian = function(nums1, nums2) {
    let mergedArray = nums1.concat(nums2);
    mergedArray.sort((a, b) => a - b);
    let n = mergedArray.length;
    let mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
}

let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];

let median = findMedian(nums1, nums2);
console.log("Median of Array"+" "+median);

// remove duplicates
let data = ["raj", "abi", "aakash", "aaa", "raj", "aaa"];

let uniqueArray = function(arr) {
    return Array.from(new Set(arr));
}

let result = uniqueArray(data);
console.log("removed the dublicates in array"+" "+result);