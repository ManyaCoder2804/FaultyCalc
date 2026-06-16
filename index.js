let x=Math.random();

console.log(x);

let a=prompt("enter first number" );
let b=prompt("enter second number");
let c=prompt("enter the operation");

let obj={
"+":"-",
"*":"+",
"-":"/",
"/":"**",
}

if(x>0.1){
    alert(`the result is= ${eval(`${a} ${c} ${b}`)}`);
}else{
     c=obj[c];
alert(`the result is= ${eval(`${a} ${c} ${b}`)}`);
}
