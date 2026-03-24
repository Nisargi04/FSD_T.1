const eventemitter=require("events")
const ee=new eventemitter();
ee.on("first",()=>{console.log("first event");//ee.on athva ee.addlistener pn lakhi shakay
})
ee.emit("first")
ee.on("second",(a,b)=>{
    console.log(`multiplication is :${a*b}`)
})
ee.emit("second",5,10)
ee.on("write",()=>{console.log("written");ee.emit("append")})
ee.on("append",()=>{console.log("appended")});
ee.emit("write");
console.log("thankyou!")