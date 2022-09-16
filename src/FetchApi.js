import React, { useState } from 'react'
import axios from 'axios'



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

const DisplayData= user.map(
    (info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.city}</td>
            </tr>
        )
    }
)

return(
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th>Sr.NO</th>
                <th>Name</th>
                <th>City</th>
                </tr>
            </thead>
            <tbody>
             
                
                {DisplayData}
                
            </tbody>
        </table>
        <h1>Hello fetch <button  type="button" style={{backgroundColor:"black", color:"white", borderRadius:"20px"}} onClick={handleAxios}>Get data using Axios</button> </h1>
        
        <br />
         
    </div>
)


      
      
      
      

   
 
}
export default FetchApi