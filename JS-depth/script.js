// // //promises

// let p1=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("Resolve p1")
//             },3000)

// })

// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("reject p2")
//     },5000)
// })

// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("reject p3")
//     },6000)
// })

// p1.then((v)=>{console.log("then",v)});
// p2.catch((r)=>{console.error("catch",r)});
// p3.catch((b)=>{console.error("catch",b)});
// //https://restcountries.com/v3.1/all
// //----

// //------------

// //callback function

// // let firstSum=(a,b)=>{
// //     return a+b
// // }

// // function secondSum(values,callbackFn){
// //     //destructuring array
// //     let [a,b,c]=values
// //     return callbackFn(a,b)+c
// // }

// // let array=[4,8,12]
// // console.log(secondSum(array,firstSum))

// //---------------------------

// //Filter and Map function manually using callbacks

// //filter

// let array=[1,2,3,4,5,6,7,8,9,10,15,16,17,18,29,30]

// // let findOdd=(ele,index,arr)=>{
// //     return ele%2===1
// // }

// // let findEven=(ele,index,arr)=>{
// //     return ele%2===0
// // }

// // let filter=(array,callbackFn)=>{
// //     let newArr=[]
// //     for(let i=0;i<array.length;i++)
// //         {
// //         let result=callbackFn(array[i],i,array)

// //         if(result)
// //             newArr.push(array[i])
        

// //         }
// //     return newArr
// // }

// // //let output=filter(array,findEven)
// // //console.log(output);

// // let output = filter(array,(e)=>{
// //  return e%2===1;   
// // }
// // ) 
// // console.log(output);


// //Map

// let map=(array,callbackFn)=>{
//     let newArr=[]
//     for(let i=0;i<array.length;i++)
//         {
//         let result=callbackFn(array[i],i,array)
//             newArr.push(result)
        

//         }
//     return newArr
// }

// let output = map(array,(e)=>{
//     return e*10  
//    }
//    ) 

// console.log(output);

// ----------------

// Callback  hell-nested callbacks

// setTimeout(()=>{
// console.log("after 3")
// },3000)

// setInterval(()=>{
// console.log("after 2")
// },2000)



// setTimeout(()=>{
//     console.log("timeout1")
//     setTimeout(()=>{
//         console.log("Timeout2")
//         setTimeout(()=>{
//             console.log("Timeout3")
//         },1000)
//     },1000)
// },1000)

// Promises - used for asynchronous operations
// then, catch and finally
// resolve and reject
//   3 states - pending,fulfilled,rejected

//    let promise1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//                 resolve("Advance JS 1 pending done")
//     },5000)
//     })

//     let promise2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("Advance Js 1 pending still pending")
//         },1000)
//     })

//     let promise3=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Advance JS 1 pending ongoing")
//         },3000)
//     })

//     promise1
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((er)=>{
//           console.error(er);
//     })

//     promise2
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((er)=>{
//           console.error(er);
//     })

//     promise3
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((er)=>{
//           console.error(er);
//     })

//     Promise.all --> returns when all promises resolves or any one gets rejected like AND , if all are resolved the returned value gets printed in the 
//     same order being called in an array

//     Promise.all([promise1,promise2,promise3])
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((value)=>{
//         console.error(value);
//     })

//     Promise.any--> returns the first one that gets resolved if all gets rejected throws an aggregate error

//     Promise.any([promise1,promise2,promise3])
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((value)=>{
//         console.error(value);
//     })

//     Promise.allSettled()--> returns when all promises gets settled wheather rejected or reoslved same like all gets printed in an array

//      Promise.allSettled([promise1,promise2,promise3])
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((value)=>{
//         console.error(value);
//     })

//     Promise.race-->returns the one that gets settled first

//     Promise.race([promise1,promise2,promise3])
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((value)=>{
//         console.error(value);
//     })
//     .finally((value)=>{
//         console.log("finally")
//     })

//------------------------------------
//error handling session

//async and await

// function resolveAfter2Seconds(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 resolve("Resolved")
//         },2000)

//     })
// }   

// let pr1=()=>{
//     console.log("PR1 invoked")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("task 2 done")
//         },3000)
// })}

// async function asynccall(){

//     try{
//         let result1= await resolveAfter2Seconds()
//         console.log(result1)
//         let result2=await pr1()
//         console.log(result2)

//     }
//     catch(error){
//         console.error("error came to catch",error)
//     }
//     finally{
//         console.log("The End")
//     }
// }

// async function asynccall(){

//     try{
//         let [result1,result2]= await Promise.all([resolveAfter2Seconds(),pr1()])
//         console.log(result1)
//         console.log(result2)
        

//     }
//     catch(error){
//         console.error("error came to catch",error)
//     }
//     finally{
//         console.log("The End")
//     }
// }

// asynccall()

// let time=0;

// setInterval(()=>{
//     console.log(++time)
// },1000)

//---------fetch

let url="https://restcountries.com/v3.1/all"

// fetch(url)
// .then((response)=>response.json())
// .then((data)=>console.log("dataooo",data))
// .catch((error)=>console.log("pee",error.message))

const constructCards = (data)=>{
    let root = document.getElementById("root")
    //data.forEach((country)=>{})-data[i] needs to be changed to country
    for(let i=0;i<data.length;i++){
        let cardwrapper = document.createElement("div")
        cardwrapper.setAttribute("class", "card m-3 ")
        cardwrapper.setAttribute("style", "width :18rem;")
        cardwrapper.innerHTML = `<img src="${data[i].flags.svg}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].name.common}</h5>
              <p class="card-text">${data[i].capital?data[i].capital[0]:"-"}</p>
            </div>`
         root.append(cardwrapper)
    
}
    
    }


async function getData(){
    try{
        let response= await fetch(url)
        let data = await response.json()
        if(response.status===200){
            constructCards(data)
        }
        else{
            throw `${response.status}:${data.message??"Error occured"}`
        }

    }
    catch(error){
        //alert(error)
        console.log(error)

    }
}

getData()

