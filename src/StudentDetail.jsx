import React from 'react'
import { Consumer } from './Context.jsx'
import seFetch from './useFetch.jsx'
import useFetch from './useFetch.jsx'

const StudentDetail = () => {

  const {data}=useFetch('https://dummyjson.com/products')
  

   
  return (
    <div>
      <h1>user</h1>
      {/* {JSON.stringify(data1)} */}
      <h1>PRODUCTS</h1>

      {JSON.stringify(data)}

<div>

    <p>Student name: Prathwi</p>
   <Consumer>
    {
        (data)=>(
            <div>
           <p>batch:{data.batch}</p>
           <p>Date:{new Date(data.date).toLocaleDateString()}</p>
           </div>
  )
    }
   </Consumer>

</div>

<div>
<p>Student name: Sona & Tanisha</p>
   <Consumer>
    {
        (data)=>(
            <div>
           <p>batch:{data.batch}</p>
           <p>Date:{new Date(data.date).toLocaleDateString()}</p>
           </div>
  )
    }
   </Consumer>


</div>

    </div>
  )
}

export default StudentDetail