import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { OrderSkeleton } from '../../components';




const MyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const url = useSelector((state) => state.url);
  const token = useSelector((state) => state.token);


  const options = {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
      setData(res.data.data);
    } catch (error) {
      setError("Some error occurred, Please try again");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);


  return (
    <div className='mt-4 text-sm'>
      <h2 className='text-center text-2xl font-bold bg-gray-700 text-white mx-auto w-40 py-2 rounded-md'>My Orders</h2>
      {error && <p className='text-red-600 text-center py-2 rounded-lg text-xl my-4'>{error}</p>}
      <div className='my-8'>
        {data?.length > 0
          ?
          data?.map((order, idx) => {
            return (
              <div key={idx} className='grid grid-cols-3 md:grid-cols-6 border-2 border-b-0 items-center max-sm:text-sm gap-2 p-1'>
                <div>
                  <img src={assets.parcel_icon} className='w-12' />
                  <p className='text-xs md:w-1/2'>{new Date(order.data).toLocaleString('en-IN', options)}</p>
                </div>
                <p className='pr-4 text-sm my-2'>{order.items.map((item, idx) => {
                  if (idx === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  } else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}</p>
                <p className='text-center text-xs sm:text-sm'>₹{order.amount}.00 <br />{order.payment ? "Paid through" : "Not Paid through"} {order.paymentMethod}</p>
                <p>Items : {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={() => fetchOrders()} className='text-indigo-700 max-sm:text-xs mx-auto font-semibold'>Track Order</button>
              </div>
            )
          })
          :
          (loading
            && Array.from({ length: 5 }).map((_, i) => <OrderSkeleton key={i} />))
        }
      </div>
    </div>
  )
}

export default MyOrders