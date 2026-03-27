var fs=require("fs")
var url=require("url");
var addr="https://www.google.com:8080/about/student?year=2025&t1=22&t2=18&t3=23#example;"
var p=url.parse(addr,true);//true lakhva nu karan query ne object ni jem behave karva
console.log(p);
//warning avshe parse mate ni e dur karva niche ni line
process.noDeprecation=true//not for exam,exam ma warning nahi ave
//whatwg=web hypertext application technology working group
var y=p.query.year;

if(y%4==0) {
    console.log("leap year")
}
else{
    console.log("not a leap year")
}
var q=p.query;
fs.writeFileSync("marks.txt",JSON.stringify(q));
var t1=parseInt(q.t1);//var t1=q.t1 karshu to number amnam as a string jashe tethi tene parseint karshu
var t2=parseInt(q.t2);
var t3=parseInt(q.t3);
var sum=t1+t2+t3;
console.log(sum)
fs.appendFileSync("marks.txt",`\ntotal marks of t1,t2 and t3 is ${sum}`)
fs.readFileSync("marks.txt")