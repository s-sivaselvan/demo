console.log("Javascript is working");
a=6;
console.log(a);
let object1={age:33};
let object2=object1;
object1.age=22;
console.log(object2.age);
console.log(9^5);
function sum(a,b){
    return a+b;
}
console.log(sum(9,5));
const sum=(a,b,c)=>{
    return a+b+c;
}
console.log(sum(1,2,3));
function double(num){
    return num*2;
}
let arr=[1,2,3,4,5];
let doubledarr=arr.map(double);
console.log(doubledarr);

let triplearr=arr.map((n)=>n*3);
console.log(triplearr);
function odd(num){
    return num%2!=0;
}
let oddnums=arr.filter(odd);
console.log(oddnums);
let ar=[13,15,20,35,27];
let mull=ar.filter((n)=>n%5==0);
console.log(mull);
 let ar1=[1,2,3,4,5];
let sum=ar1.reduce((product,current)=>{
    return product*current;
},1);
console.log(sum);
let triple=ar1.map((n)=>n*3);
let et=triple.filter((n)=>n%2==0); 
let sol=et.reduce((product,quantity)=>{
    return product+quantity;
},0);
console.log(sol);
//destructration
const [one,...two]=ar1;
console.log(two);
spread
let nums=[0,...ar1,6,7];
console.log(nums);
let obj1={x:3,y:5};
let obj2={y:6,z:7};
const spread={...obj1,...obj2};
console.log(spread);
const p=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const success=true;
    if(success){
        resolve("Resolved Successfully");
    }
    else{
        reject("Rejected");
    }
  },2000);
});
console.log("Before Promise Execution");
p.then((result)=>console.log(result)).catch(err=>console.log(err)).finally(()=>console.log("Promise Completed"));
console.log("After Promise Execution");
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { return response.json(); })
  .then((data) => data.map((user) => { console.log(user.name); }))
async function fetchapi(){
  try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json();
    data.map((user)=>{
      console.log(user.name);
    })
  }
  catch(error){
    console.log(err);
  }
}
fetchapi(); 
//String literals
let name='siva'
let age=24
console.log(`I am ${name} and and my age is ${age}`);
// stack
const mul=(a,b)=>{
  return a*b;
}
const square=(n)=>{
  return mul(n,n);
}
const print=(n)=>{
  let s=square(n);
  console.log(s);
}
print(4);
// Synchronous 
console.log("first");
Promise.resolve().then(console.log("From promises"));
setTimeout(()=>{
  console.log("Inside Settimeout");
})
console.log("Last")