function test(name,callback){
console.log("first execution"+name);
callback();
}
function last(){
    console.log("last execution");
    
}
test("NodeJS",last);
const msg=function(){
    console.log("hi");
}
setTimeout(msg,3000)
setTimeout(function(){
    console.log("hi")
},5000)