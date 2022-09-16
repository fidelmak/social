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
                <td>{info.risk_ratio}</td>
                <td>{info.nigerian_stocks}</td>
                <td>{info.foreign_stocks}</td>
                <td>{info.tech_stocks}</td>
                <td>{info.emerging_stocks}</td>
                <td>{info.nigeria_bonds}</td>
                <td>{info.foreign_bonds}</td>
                <td>{info.commodities}</td>
                <td>{info.real_estate}</td>
                <td>{info.t_bills}</td>
                <td>{info.alternative}</td>


            </tr>
        )
    }
)

return(
    <div>
        <table className="table table-striped">
            <thead>
                <tr className="m-2">
                <th>Sr.NO</th>
                <th>Name</th>
                <th>City</th>
                <th>City</th>
                <th>City</th>
                <th>City</th>
                <th>City</th>
                <th>City</th>
                <th>City</th>
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