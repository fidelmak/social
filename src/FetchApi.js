import React, { useState } from 'react'
import axios from 'axios'
import img from './img/imgb.jpg'



const FetchApi =()=>{


const[user , setUser] = useState([

])


const handleAxios = ()=>{
    axios.get("/db/Api.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle2 = ()=>{
    axios.get("/db/A2.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle3 = ()=>{
    axios.get("/db/A3.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle4 = ()=>{
    axios.get("/db/A4.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle5 = ()=>{
    axios.get("/db/A5.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle6 = ()=>{
    axios.get("/db/A6.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle7 = ()=>{
    axios.get("/db/A7.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle8 = ()=>{
    axios.get("/db/A8.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle9 = ()=>{
    axios.get("/db/A9.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle10 = ()=>{
    axios.get("/db/A10.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}
const handle11 = ()=>{
    axios.get("/db/A11.json")

    .then(res=> {
        console.log(res.data)       
        setUser(res.data)
    })
    .catch(err=>console.log(err))
}





const DisplayData= user.map(
    (info)=>{
        return(
            <div className='text-xl mb-4'>
                
                <h1 className='bg-gray-100 mb-2'>Nigerian_stocks: <button className='bg-red-50 ml-7 w-40'>{info.nigerian_stocks}</button></h1>
                <h1 className='mb-2'>Foreign_stocks: <button className='bg-red-100 ml-7 w-40'>{info.foreign_stocks}</button></h1>
                <h1 className='bg-gray-100 mb-2'>Tech_stocks:<button className='bg-red-50 ml-7 w-40'>{info.tech_stocks}</button></h1>
                <h1 className='mb-2'>Emerging_stocks:<button className='bg-red-100 ml-7 w-40'>{info.emerging_stocks}</button></h1>
                <h1 className='bg-gray-100 mb-2'>Nigeria_bonds:<button className='bg-red-50 ml-7 w-40'>{info.nigeria_bonds}</button></h1>
                <h1  className='mb-2'>Foreign_bonds:<button className='bg-red-100 ml-7 w-40'>{info.foreign_bonds}</button></h1>
                <h1 className='bg-gray-100 mb-2'>Commodities:<button className='bg-red-50 ml-7 w-40'>{info.commodities}</button></h1>
                <h1  className='mb-2'>Real_estate:<button className='bg-red-100 ml-7 w-40'>{info.real_estate}</button></h1>
                <h1 className='bg-gray-100 mb-2'>T_bills:<button className='bg-red-50 ml-7 w-40'>{info.t_bills}</button> </h1>
                <h1>alternative:<button className='bg-red-100 ml-7 w-40'>{info.alternative}</button></h1>


            </div>
        )
    }
)

return(<>
    <span id='span' className='text-xl text-center'> <center>Select the risk you love to view by clicking the buttons </center> </span>
    <div className='grid md:grid-cols-2 md:m-8 md:p-8 ml-5'>
       
        <div>
       
        <h1 className='md:flex'><button  type="button" style={{backgroundColor:"black", color:"white", width:'100px', margin:"10px"}} onClick={handleAxios}>Risk:0</button> 
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle2}>Risk:1</button>
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle3}>Risk:2</button>
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle4}>Risk:3</button>
        <button  type="button" style={{backgroundColor:"black", color:"white", width:'100px', margin:"8px"}} onClick={handle5}>Risk:4</button>
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle6}>Risk:5</button> 
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle7}>Risk:6</button>
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle8}>Risk:7</button>
        <button  type="button" style={{backgroundColor:"black", color:"white", width:'100px', margin:"8px"}} onClick={handle9}>Risk:8</button>
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle10}>Risk:9</button>
        <button  type="button" style={{backgroundColor:"black", color:"white",  width:'100px', margin:"8px"}} onClick={handle11}>Risk:10</button>

        
        
        
        
        </h1>
        
        <div>
            
            <main className='ml-2'>
             
                
                {DisplayData}
                
            </main>
        </div>
         
        
       
        </div>
       <div>
        <img src={img} alt="img1" className=" item-center mr-3 sm:mx-5 md:ml-5 md:mt-1 mt-8 w-200 h-48 sm:h-80 object-cover " /> <div className=" btn md:ml-5 mt-8 w-28 bg-secondary-100 text-secondary-200 hover:text-black ">Load more</div>
        </div>
    </div>
    </>
)


      
      
      
      

   
 
}
export default FetchApi