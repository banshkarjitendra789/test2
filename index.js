const fs =require("fs")
const real =require("readline");

const  file=(name)=>{
    fs.writeFile("test.text",`my name is ${name}`,error=>{
        if(error){
            console.log("some thing is wrong")
        }
    })
}
file("jitendra");
real.createInterface()