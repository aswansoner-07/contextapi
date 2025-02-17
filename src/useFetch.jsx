import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState([])

   const Apicall=(apiurl)=>{    
    fetch(apiurl)
    .then((res)=>{
      return res.json()
    })
    .then((apidata)=>{
      setData(apidata)
    })
    .catch((err)=>{
        console.log(err)
    })
   }

    useEffect(()=>{
         Apicall(url)
    },[data])
  return {data}
}

export default useFetch