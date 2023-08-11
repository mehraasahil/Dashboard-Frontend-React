import React, { useState } from 'react'

const AddProduct = () => {
    const [name,setName] = useState('')
    const [price , setPrice] = useState('')
    const [category , setCategory] = useState('')
    const [company , setCompany] = useState('')

    const addProducts = async() => {
        console.log(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:4000/add-product",{
        method : 'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            "Content-Type":"application/json"

        }
       })
       result = await result.json();
       console.log(result)
    }

  return (
<>
    
    <div className='product'>

        <input type="text" className='inputbox' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name' />
        <input type="text" className='inputbox' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price' />
        <input type="text"className='inputbox'  value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder='Enter product category' />
        <input type="text" className='inputbox' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company' />
       
      
    </div>
     <button onClick={addProducts} className='appButton'>Add Product</button>
     </>

  )
}
export default AddProduct
