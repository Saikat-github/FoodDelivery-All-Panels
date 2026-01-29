import { Footer, Login, Navbar, ScrollToTop } from './components'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setCartItems, setFoodList, setToken } from './features/cartSlice'
import axios from 'axios'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myorders/MyOrders'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



function App() {
  const showSignUp = useSelector((state) => state.showSignUp)
  const url = useSelector((state) => state.url);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      if (response.data.success) {
        dispatch(setFoodList(response.data.data));
      } else {
        toast.error(response.message || "Something went wrong")
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  const fetchCartList = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      if (response.data.success) {
        dispatch(setCartItems(response.data.cartData));
      } else {
        toast.error(response.message || "Something went wrong")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  // restore token and foodlist once
  useEffect(() => {
    fetchFoodList();
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, []);

  // protected data – on auth change
  useEffect(() => {
    if (token) {
      fetchCartList(token);
    }
  }, [token]);




  return (
    <div>
      <div>
        {showSignUp ? <Login /> : <></>}
        <Navbar />
        <ToastContainer />
        <div className='mx-2 sm:mx-[10%] font-Outfit'>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<MyOrders />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}



export default App
