// Answer 1: The purpose of this code is to filter out duplicate values from an array

    let ar = ['a', 'b', 'd', '3', 'b', '7','k','a','x'];

    ar.filter((c,i,a) => {
    return a.indexOf(c) === i;
    })


// Answer 2:

/*
The advantages using JavaScript Promises over callback functions:

1. Unlike callback functions, JavaScript promises provide a better control flow of 
   asynchronous logic and reduce coupling. In cases where every call is interdependent
   on previous results, we have to call series of nested callbacks making them tightly
   coupled. Using JavaScript promises makes chaining of asynchronous logic easy and
   readable.

2. Better error handling: A promise returns an object, that is a success or failure value.
   Like JavaScript try/catch if there is an exception, catch function will catch it. 
   We don't have to put additional checks or try/catch error handling.

*/


// Answer 3: A regex that can be used to determine if given string is valid IPv4 address

let re = /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/igm
function validateIPaddress(ip) {  
  if (re.test(ip)) {  
    return true;  
  }  
  return false;
}


// Answer 4: 

/*
For this question I came up with two different solutions and compared both of them.
I have uploaded a screenshot of test results.
*/

let array1 = ['line','address','port'];
let array2 = ['abc,223.161.72.50,2234','bcd,34.76.5.237,44322','cde,228.56.79.16,54321'];


// Solution 1: Slower

arrayx = [...array2.toString().split(',')];
var obj ={};
var reducer = (acc,curr,index) => {
  if(index % array1.length == 0){
    obj ={};
  }
  var key = array1[index % array2.length];
  var val = curr;
  obj[key] = val;
  if(index % array1.length == array1.length-1){
    acc.push(obj);
  }
  
  return acc;
}

const x = arrayx.reduce(reducer,[]);
console.log(x);


// Solution 2: Faster

var reducer = (acc,curr) => {
    var data = curr.split(',');
    var obj = {}
    data.forEach((ele,index)=>{
      obj[array1[index]] = ele
    })
    acc.push(obj);
    return acc;
}
  
  const x = array2.reduce(reducer,[]);
  console.log(x);



// Answer 5: Eliminating spaces within array elements using Array.map() and then sorting them case-insensitive

let arr = ['albatross ','Crow',' Bluejay','Cardinal','American Pigeon ',' Turtle Dove'];

arr.map(ele => ele.replace(/\s/g,'')).sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))