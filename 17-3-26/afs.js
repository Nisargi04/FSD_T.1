var fs=require("fs")
fs.writeFileSync("temp.txt","good morning");
console.log("sync operation done");
fs.writeFile("temp1.txt","hi",(e)=>{ //function(e){} pn chale aa method ni jagya e
    if(e){throw e;} //throw ni jagya e console.log(e) athva console.error banne chale
    else{console.log("async task completed");}
}) 
console.log("last time");