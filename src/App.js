import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import ProductShow from "./component/ProductDetails/ProductShow.jsx";
import Home from "./component/Home/Home.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Login from "./component/Login/Login.jsx";
import Error from "./component/Error/Error.jsx";
import Register from "./component/Register/Register.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route index path='' element={<Home/>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
      <Route exact path='/productdetails/:id' element={<ProductShow/>}/>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route index path='/register' element={<Register/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}
export default App;

