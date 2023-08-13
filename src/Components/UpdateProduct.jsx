import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

    const [name,setName] = useState('')
    const [price , setPrice] = useState('')
    const [category , setCategory] = useState('')
    const [company , setCompany] = useState('')
    const[error , setError]  = useState(false)
    const params = useParams()
    const navigate = useNavigate()

useEffect(()=>{
    getProductDetails();
},[])

const getProductDetails = async() => {
    console.log(params)
    let result = await fetch(`http://localhost:4000/product/${params.id}`,{
        headers:{
            authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    result =  await result.json();
    setName(result.name)
    setPrice(result.price);
    setCategory(result.category)
    setCompany(result.company)
}

    const updateProducts = async () =>{
        console.log(name , price ,category ,company)
        let result = await fetch(`http://localhost:4000/product/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            "Content-Type":"application/Json",
            authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`

        }

    })
    result = await result.json()
    console.log(result)
    navigate('/')

    }

  return (
    <>
    <div className='product'>
    <input type="text" className='inputbox' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name' />
    <input type="text" className='inputbox' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price' />
    <input type="text"className='inputbox'  value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder='Enter product category' />
    <input type="text" className='inputbox' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company' />
     </div>
     <button onClick={updateProducts} className='appButton'>Update Product</button>
     </>
  )
}

export default UpdateProduct