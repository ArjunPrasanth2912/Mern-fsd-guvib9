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

//----------------

//Callback  hell-nested callbacks

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

//Promises - used for asynchronous operations
//then, catch and finally
//resolve and reject
  //3 states - pending,fulfilled,rejected

   let promise1=new Promise((resolve,reject)=>{

    setTimeout(()=>{
                resolve("Advance JS 1 pending done")
    },5000)
    })

    let promise2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Advance Js 1 pending still pending")
        },1000)
    })

    let promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Advance JS 1 pending ongoing")
        },3000)
    })

    // promise1
    // .then((msg)=>{
    //     console.log(msg);
    // })
    // .catch((er)=>{
    //       console.error(er);
    // })

    // promise2
    // .then((msg)=>{
    //     console.log(msg);
    // })
    // .catch((er)=>{
    //       console.error(er);
    // })

    // promise3
    // .then((msg)=>{
    //     console.log(msg);
    // })
    // .catch((er)=>{
    //       console.error(er);
    // })

    //Promise.all --> returns when all promises resolves or any one gets rejected like AND , if all are resolved the returned value gets printed in the 
    //same order being called in an array

    // Promise.all([promise1,promise2,promise3])
    // .then((value)=>{
    //     console.log(value);
    // })
    // .catch((value)=>{
    //     console.error(value);
    // })

    //Promise.any--> returns the first one that gets resolved if all gets rejected throws an aggregate error

    // Promise.any([promise1,promise2,promise3])
    // .then((value)=>{
    //     console.log(value);
    // })
    // .catch((value)=>{
    //     console.error(value);
    // })

    //Promise.allSettled()--> returns when all promises gets settled wheather rejected or reoslved same like all gets printed in an array

    //  Promise.allSettled([promise1,promise2,promise3])
    // .then((value)=>{
    //     console.log(value);
    // })
    // .catch((value)=>{
    //     console.error(value);
    // })

    //Promise.race-->returns the one that gets settled first

    Promise.race([promise1,promise2,promise3])
    .then((value)=>{
        console.log(value);
    })
    .catch((value)=>{
        console.error(value);
    })
    .finally((value)=>{
        console.log("finally")
    })