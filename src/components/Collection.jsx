import { Heart } from "lucide-react";
import heart from "../assets/images/heart.png";
import { useState, useEffect } from "react";

function Collection({ img, title, price, cart, setCart }) {
  const [addedToCart, setAddedToCart] = useState(false);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      const foundItem = cartItems.find((item) => item.title === title);
      foundItem && foundItem.title === title
        ? setAddedToCart(true)
        : setAddedToCart(false);
    }

    //console.log(cart &);
  }, []);
  function handleAddToCart(e, product) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      setCart((prev) => [...prev, product]);
      e.target.textContent = "Added to Cart";
      e.target.style.background = "gray";
    }
  }
  return (
    <div className="flex flex-col ">
      <div className="  bg-slate-200 w-80 h-80 p-10 flex items-center justify-center object-contain relative group">
        <img src={img} alt="title" />

        <button
          className={`${addedToCart ? "bg-gray-500" : "bg-green-400"} text-white border rounded-xl p-3 w-70 absolute bottom-5 hidden group-hover:block cursor-pointer`}
          onClick={(e) => handleAddToCart(e, { img, title, price })}
        >
          {cart.find((item) => item.title === title)
            ? "Added to cart"
            : "Add to cart"}
        </button>
      </div>
      <div className="flex justify-between">
        <p className="text-2xl">{title}</p>
        <img src={heart} width={"30"} />
      </div>

      <p className="text-2xl">Ksh.{price.toLocaleString()}</p>
    </div>
  );
}
export default Collection;
