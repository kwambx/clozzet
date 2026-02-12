import { Trash2 } from "lucide-react";
import { useEffect } from "react";
function Cartproduct({ cart, setCart, item, cartCopy, setcartCopy, title }) {
  useEffect(() => {}, [cart]);

  function handleincrement(product) {
    setcartCopy((prev) => [...prev, product]);
  }

  function handledecrement(product) {
    const cartCopyRemove = [...cartCopy];
    const productIndex = cartCopyRemove.indexOf(product);
    cartCopyRemove.splice(productIndex, 1);
    setcartCopy(cartCopyRemove);
  }

  const removeItem = (title) => {
    const removeItem = cart.filter((item) => item.title !== title);
    const removeCartCopy = cartCopy.filter((item) => item.title !== title);

    console.log(removeItem);
    setCart(removeItem);
    setcartCopy(removeCartCopy);
    if (removeItem.length === 0) {
      localStorage.removeItem("cart");
      localStorage.removeItem("cartCopy");
    }
  };

  //   const removeItem = (product) => {
  // setCart(cart.filter((title) => item.title !== title));
  // };
  return (
    <div className="grid grid-cols-3 items-center p-4 border-b">
      <div className="flex gap-4 items-center">
        <img
          src={item.img}
          alt={item.title}
          className="w-16 h-16 object-contain"
        />

        <div>
          <p className="font-medium">{item.title}</p>

          <p className="text-sm text-gray-500">Size: {item.size}</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <button
            className="border px-3 py-1"
            onClick={() => handledecrement(item)}
            disabled={
              cartCopy.filter((cartitem) => cartitem.title === item.title)
                .length === 1
            }
          >
            −
          </button>
          <span>
            {
              cartCopy.filter((cartitem) => cartitem.title === item.title)
                .length
            }
          </span>
          <button
            className="border px-3 py-1"
            onClick={() => handleincrement(item)}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex justify-end items-center gap-4  relative group">
        <p className="font-medium">
          KSh{" "}
          {cartCopy
            .filter((cartitem) => cartitem.title === item.title)
            .reduce((acc, curr) => acc + curr.price, 0)}
        </p>

        <button onClick={() => removeItem(item.title)}>
          <Trash2 className="w-5 text-red-500 relative  hidden group-hover:block cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
export default Cartproduct;
