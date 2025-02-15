import React from 'react'
import { Consumer } from './Context.jsx'

const StudentDetail = () => {
   
  return (
    <div>

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