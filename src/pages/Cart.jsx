import { useEffect, useState } from "react";
import{Ban} from"lucide-react";
import Cartproduct from "../components/Cartproduct";

function Cart({ cart, setCart,item,product }) {
 
  const [cartCopy, setcartCopy] = useState([]);
  useEffect(() => {
    setcartCopy([...cart]);
  }, []);
  useEffect(() => {
    const cartcopyData = JSON.parse(localStorage.getItem("cartCopy"));
    if (cartcopyData) {
      setcartCopy(cartcopyData);
    } else {

      setcartCopy(cart);
    }
  }, []);
  useEffect(() => {
    if (cartCopy.length !== 0) {
      localStorage.setItem("cartCopy", JSON.stringify(cartCopy));
    }
  }, [cartCopy]);


  return (

    <div>{

     cart.length === 0 ? <div className="flex flex-col justify-center items-center gap-4 bg-gray-300  py-25 "><Ban className="text-red-500 w-15 h-15"/><p>No Items Found In cart</p><button className=" border rounded-2xl bg-teal-400  py-2 px-6">Shop Now</button></div> :
     
   
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 border rounded-lg">
        <div className="grid grid-cols-3 p-4 border-b font-semibold">
          <p>Product</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Price</p>
        </div>
 
        {cart.map((item) => (
          <Cartproduct
            cart={cart}
            setCart={setCart}
            item={item}
            cartCopy={cartCopy}
            key={item.title}
            setcartCopy={setcartCopy}
          />
        ))}
      </div>

      <div className="border rounded-lg p-6 bg-gray-50 h-fit">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

        <p className="text-sm mb-2">Have a promo code? Apply here</p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Promo Code (optional)"
            className="border p-2 flex-1 rounded"
          />

          <button className="bg-teal-400 text-white px-4 rounded">Apply</button>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>ksh {cartCopy.reduce((acc,curr)=> acc+curr.price,0)}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>KSh 450</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span> {cartCopy.reduce((acc,curr)=> acc+curr.price,450)}</span> {/* constant value */}
          </div>
        </div>

        <button className="w-full mt-6 bg-teal-400 text-white py-3 rounded font-medium">
          Checkout
        </button>
      </div>
    </div>
   
      }</div>
  );
}
 

export default Cart;
