import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [products ,setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
      
    },[])

    const getProducts = async()=>{
       let result = await fetch('http://localhost:4000/products',{
        headers:{
            authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
       });
       result = await  result.json()
       setProducts(result);
    }


    const deleteProduct = async (id) =>{
        let result =  await fetch(`http://localhost:4000/product/${id}`,{
            method:"Delete",
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }

        });
        result = result.json();
        if(result){
            getProducts()
        }
    };
    

    const searchHandle = async (e) =>{
        let key = e.target.value;
        if(key){
            let result = await fetch(`http://localhost:4000/search/${key}`,{
            headers:{
                authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }})
        ;
            result = await result.json();
            if(result){
                setProducts(result)
            }
        }else{
            getProducts()
        }

    }


    //console.log(products)
       return (
    <div className='product-list'>
    <h3>Product List</h3>
    <input type="text" className='search-product-box'  onChange={searchHandle} placeholder='Search Product'/>
    <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operations</li>
    </ul>
    {
      products.length>0 ? products.map((items,index)=>
        <ul key={items._id}>
        
        <li>{index+1}</li>
        <li>{items.name}</li>
        <li>{items.price}</li>
        <li>{items.category}</li>
        <li><button onClick={()=> deleteProduct(items._id)}>Delete</button>
        <Link to = {"/update/" +items._id}>Update</Link></li>
       
    </ul>

        )
     :<h1>No Result Found</h1>   
    }

    </div>
  )
}

export default ProductList