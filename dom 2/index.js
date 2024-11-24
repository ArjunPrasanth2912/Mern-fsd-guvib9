let games=["rdr2","ghostogT","mafia,","ets2"];
let count=0;
const fun1=()=>{
    console.log(`Button is clicked ${++count} times`);

let var1=document.getElementById("main");
let var2=document.createElement("ul");

games.forEach((m)=>{
let var3=document.createElement("li");
var3.innerText=m;
var2.appendChild(var3);
})

var1.appendChild(var2);
}

const fun2=()=>{
    let var4=document.getElementById("main");
        var4.innerText="";
    
}

let var5=document.getElementById("myForm");

// var5.addEventListener("submit",(j)=>{
//     j.preventDefault();
//     console.log("ryt submitted");

//     let var6=document.getElementById("fname").value;
//     let var7=document.getElementById("age").value;
//     console.log(var6);

//     let var8=document.getElementById("display");

//     var8.innerText="";
//     var8.setAttribute("style","text-align:center; color:red");
//     var8.innerHTML= `<h2>Given Data</h2>
//     <div>Name:<strong>${var6}</strong></div>
//     <div>Age:<strong>${var7}</strong></div>`
//})

let lable={
    fname:"First Name",
    age:"AGE"
}

var5.addEventListener("submit",(k)=>{
    j.preventDefault();

    let var9=new FormData(var5);
    let var10=Object.fromEntries(var9);

    let var11=document.getElementById("display");
    var11.innerText="";
    var11.setAttribute("style","text-align:center; color:red");

    let var12="";

    Object.keys(var10).forEach(o=>{
        var12 += `<div>${lable[o]} : ${var10[o]}</div>`
    })

    

var11.innerHTML=`<h2>Submitted Data</h2>${var12}`;
})


// myForm.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     let formData = new FormData(myForm);
//     let data = Object.fromEntries(formData);
   
//     if(data.fname && data.lname)
//     {
//         let display = document.getElementById("display")
//         display.innerText="";
//         display.setAttribute("style","text-align:center;");

//         let html = ""

//         Object.keys(data).forEach(key=>{
//             html += `<div>${lable[key]}: <strong>${data[key]}</strong></div>`
//         })


//         display.innerHTML = `<h2>Submitted Data</h2>${html}`    
//     }
//     else
//     {
//         if(!data.fname)
//         {
//             let fnameError = document.getElementById("fnameError");
//             fnameError.innerText = "First Name is required"
//         }
        
//         if(!data.lname)
//         {
//             let lnameError = document.getElementById("lnameError");
//             lnameError.innerText = "Last Name is required"
//         }
//     }
// })


// let fnameEle = document.getElementById("fname");

// fnameEle.addEventListener("blur",(e)=>{

//     let fnameError = document.getElementById("fnameError");

//     if(!e.target.value)
//         fnameError.innerText = "First Name is required"
//     else
//         fnameError.innerText = ""
// })

// let lnameEle = document.getElementById("lname");

// lnameEle.addEventListener("blur",(e)=>{

//     let lnameError = document.getElementById("lnameError");
    
//     if(!e.target.value) 
//         lnameError.innerText = "Last Name is required"
//     else
//         lnameError.innerText = ""
// })

// // fnameEle.addEventListener("change",(e)=>{
// //     console.log(e.target.value)
// // })


