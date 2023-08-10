import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
  <Routes>
    <Route element={<PrivateComponent/>}>
   <Route path='/'element={<h1>Product Listing</h1>}/>
   <Route path='/add' element={<h1>Add Product</h1>}/>
   <Route path='/update' element={<h1>Update Page</h1>}/>
   <Route path='/logout' element={<h1>Logout</h1>}/>
   <Route path='/profile' element={<h1>Profile</h1>}/>
   </Route>

   <Route path='/signup' element={<SingUp/>}/>
  </Routes>
  <Footer/>
     </BrowserRouter>
    </div>
  
  );
}


export default App;
