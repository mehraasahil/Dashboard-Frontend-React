import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [name,setName] = useState('')
    const [price , setPrice] = useState('')
    const [category , setCategory] = useState('')
    const [company , setCompany] = useState('')
    const[error , setError]  = useState(false)
    const navigate = useNavigate();
    const addProducts = async() => {
        console.log(name,price,category,company);
        
      
        
        console.log(!name);
        if (!name || !price || !category ||!company){
          setError(true)
          return false;
        } 

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:4000/add-product",{
        method : 'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            "Content-Type":"application/json",
              authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`

        }
       })
       result = await result.json();
       console.log(result)
       if(result){
        navigate('/')
       }
    }

  return (
<>
    
    <div className='product'>

        <input type="text" className='inputbox' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name' />

          {error && !name  && <span className='invalid-input' >Enter the valid name</span>}

          <input type="text" className='inputbox' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price' />

         {error && !price && <span className ='invalid-input' >Enter the valid price</span> }

        <input type="text"className='inputbox'  value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder='Enter product category' />

        {error && !category && <span className ='invalid-input' >Enter the valid category</span> }

        <input type="text" className='inputbox' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter product company' />
        {error && !company && <span className ='invalid-input' >Enter the valid company</span> }

       
      
    </div>
     <button onClick={addProducts} className='appButton'>Add Product</button>
     </>

  )
}
export default AddProduct
