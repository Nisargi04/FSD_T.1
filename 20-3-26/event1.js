var eventemitter=require("events");
var ee=new eventemitter();
var fun1=(m)=>{
    console.log(`message frome function 1${m}`);
}
var fun2=(m)=>{
    console.log(`message from function 2${m}`);
}
ee.on("e1",fun1);
ee.on("e1",fun2);
ee.on("e1",()=>{console.log("another function");})
ee.on("e2",fun1);
ee.on("e2",fun2);
var c=ee.listenerCount("e1");
console.log(`count is ${c}`);
//ee.removeListener("e1");//this will throw an error we have to pass an argument which contains function
ee.removeListener("e1",fun1);
//ee.removeAllListeners("e2",fun1)//ama funh1 k koi b argument pass karshu enathi kai fer nai pade e badha j remove kari deshe
ee.removeAllListeners("e2")
var c=ee.listenerCount("e2");
console.log(`count is ${c}`);
ee.emit("e1","event task");
ee.emit("e2","welcome students");