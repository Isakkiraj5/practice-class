//  Odd numbers
let even=(num)=>{
    odd=[];
   for(i=0;i<num.length;i++){
    if(num[i]%2!=0){
        odd.push(num[i]);
    }
   }
    
    return odd;
}

console.log("Odd Numbers Are"+" "+even([2,3,4,5,6]))

// prime numbers
 let primenumbers=(array)=>{
    
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
let  sumofarray=(array)=>{
    count=0
for(i=0;i<array.length;i++){
    count=array[i]+count;
}
return count;
}
console.log("Sum Of The Array"+" "+sumofarray([2,3,4,5,6,7]));


// converting String to uppercase
let string = (data)=> {
    y = [];
    for (i = 0; i < data.length; i++) {
        x = data[i].charAt(0).toUpperCase() + data[i].slice(1);
        y.push(x);
    }
    return y;
}

console.log(string(["raj", "abi", "aakash"]));


// palindrome
let palendrome = (data) =>{
    
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