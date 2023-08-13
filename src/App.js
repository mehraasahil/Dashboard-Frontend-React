import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
  <Routes>
    <Route element={<PrivateComponent/>}>
   <Route path='/'element={<ProductList/>}/>
   <Route path='/add' element={<AddProduct/>}/>
   <Route path='/update/:id' element={<UpdateProduct/>}/>
   <Route path='/logout' element={<h1>Logout</h1>}/>
   <Route path='/profile' element={<h1>Profile</h1>}/>
   </Route>

   <Route path='/signup' element={<SingUp/>}/>
  <Route path='/login' element={<Login/>}/>
  </Routes>
  <Footer/>
     </BrowserRouter>
    </div>
  
  );
}


export default App;
