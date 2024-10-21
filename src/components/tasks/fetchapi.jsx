import axios from "axios"
import { useEffect, useState } from "react"
import "./fetchdata.css"



const FetchData=()=>{

     const [data,setData]=useState([])

     useEffect(()=>{

       const fetchData= async ()=>{
        try{
              const response= await axios.get("https://dummyjson.com/products")
              if(response.status==200){
                setData(response.data.products)
                console.log(response.data)
              }
        }
           catch(err)  {
            console.error(err)
           }
       }


    fetchData();



     },[])



      return (
        <>
          <h1>api link products</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>s.no</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Image</th>
                  <th>Price</th>
                </tr>
              </thead>
            
              <tbody>
              {
                data.map((val,index)=>{
                 return (
                   <>
                     <tr>
                       <td>{val.id}</td>
                       <td>{val.title}</td>
                       <td>{val.brand}</td>
                       <td>
                         <img
                           src={val.thumbnail}
                           height="100px"
                           width="100px"
                         />
                       </td>
                       <td>{val.price}</td>
                     </tr>
                   </>
                 );
                })

              }




              </tbody>
            </table>
          </div>
        </>
      );
}




export default  FetchData