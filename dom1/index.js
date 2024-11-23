let varname = document.getElementById("header")
//console.log(varname)
//varname.innerText="<h1>Hi brooooooo</h1>"
varname.innerHTML="<h1>Hi brooooooo</h1>"

let varname1=document.getElementById("main");

let varname2=document.createElement("h2");
varname2.innerText="h2 element created in JS";
varname2.setAttribute("style","color:red;background:black;text-align:center");

//console.log(varname1);
//console.log(varname2);

//varname1.appendChild(varname2);
varname1.appendChild(varname2);


let varname3=document.getElementById("appd");
let varname4=document.createElement("h3");
varname4.innerText="H3 created using JS";
varname4.setAttribute("style","color:blue;background:grey;text-align:center");

varname3.append("hi broooo",varname4);
//varname3.append(varname4)
varname4.append(" and appended");



// let varname5=document.getElementsByClassName("list-tems");
// console.log(varname5.length);
// console.log(varname5);

// for(let i=0; i<varname5.length;i++)
// {
//     varname5[i].append(i);

// }

// let varname6=document.getElementsByTagName("h1");
// for(let h1 of varname6){
//     console.log(h1);
// }

let varname7=document.querySelector(".list-tems");
console.log(varname7);

let varname8=document.querySelectorAll(".list-tems");
console.log(varname8);






