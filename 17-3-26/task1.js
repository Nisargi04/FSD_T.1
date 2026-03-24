var fs=require("fs")
/*fs.mkdir("mytask",
    (e)=>{
        if(e){throw e;}
        else{console.log("folder created!");}
    })*/
fs.writeFile("mytask/task.txt","hello",
(e)=>{
    if(e){throw e;}
    else{console.log("written!");}
})
setTimeout(()=>fs.appendFile("mytask/task.txt","good morning!",
(e)=>{
    if(e){console.log(e)}
    else{console.log("written1!");}})
    
, 2000);

setTimeout(()=>fs.copyFile("mytask/task.txt","mytask/task1.txt",
(e)=>{
    if(e){console.log("file not found",+e)}
    else{console.log("copied!");}
}),3000)
setTimeout(()=>fs.readFile("mytask/task1.txt","utf-8",(e,data)=>{
    if(e){throw e}
    else{console.log(data);}
}),4000)

setTimeout(()=>fs.unlink("mytask/task.txt",(e)=>{
    if(e){throw e}
     else{console.log("deleted")}
}),5000)
setTimeout(()=>fs.rename("mytask/task1.txt","mytask/task.taxt",(e)=>{
    if(e){throw e}
    else{
        console.log("renamed!")
    }
}),6000)

