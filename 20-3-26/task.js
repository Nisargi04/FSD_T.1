var eventemitter=require("events");
var ee=new eventemitter();
var fun1=(m,s)=>{
    console.log(`radius is ${m}`)
    if(m<0){console.log("radius must be positive")}
    else{ var p=2*3.14*m
        console.log(`circle's paramiter is ${p}`);}
}
var fun2=(m,s)=>{
    console.log(`side's length is ${s}`);
    if(s<0){console.log("side must be positive")}
    else{var p=4*s
        console.log(`square's paramiter is ${p}`)}   
}
ee.on("calc",fun1)
ee.on("calc",fun2)

ee.emit("calc",-8,10);