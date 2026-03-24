const { Console } = require("console");
var fs = require("fs");
fs.writeFileSync("temp.txt", "good morning");
fs.writeFile("temp1.txt", "hi", (e) => {
  //function(e){} pn chale aa method ni jagya e
  if (e) {
    throw e;
  } //throw ni jagya e console.log(e) athva console.error banne chale
  else {
    console.log("async task completed");
  }
});
/*fs.mkdir("afs",
    (e)=>{
        if(e)
        {throw e;}
        else{
            console.log(" folder created")
        }
    })*/
fs.writeFile("afs/t1.txt", "hi", (e) => {
  if (e) {
    throw e;
  } else {
    console.log("written");
  } //evu bani shake k pela file write thay ne pachi folder bane
  //evu na thay e mate na 2 options
  //if we want k pela folder bane ne pachi j biju dependent function call thay then we can use settimeout
  //or we can write dependent function(create file,write file) in the first folders else part
});
setTimeout(
  () =>
    fs.appendFile("afs/t1.txt", "hello", (e) => {
      if (e) {
        console.log("file not found" + e);
      } else {
        console.log("appended");
      }
    }),
  3000
);

fs.readFile("afs/t1.txt", "utf-8", (e, data) => {
  if (e) {
    throw e;
  } else {
    console.log(data);
     fs.unlink("afs/t1.txt",(e)=>{
         if(e){throw e;}
        else{
          console.log("deleted")
      }
     })
  }
});

fs.rmdir("afs",(e)=>{
    if(e)
    {
        throw e;
    }
    else{
        console.log("folder deleted");
    }
})
/*fs.rename("temp.txt","newfile",(e)=>{
    if(e)
    {
        throw e
    }
    else{
        console.log("renamed");
    }
})
fs.copyFile("newfile.txt","myfile.txt",(e)=>{
    if(e)
    {
        throw e;
    }
    else{
        console.log("copied")
    }
})*/