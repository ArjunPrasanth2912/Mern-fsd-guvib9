const BASE_URL="https://67835cc58b6c7a1316f42b71.mockapi.io/employee"

const getData=async()=>{
    try{
        const res=await fetch(BASE_URL)
        //console.log(res)
        const data=await res.json()
        if(res.status===200){
            console.log(data)
        }
        else{
            throw`${res.status} : ${data.message??"error occured"}`
        }

    }
    catch(error){

    }
}
getData()