import Collection from "./Collection";
import leatherjacket from "../assets/images/leather-jacket.png";
import sweatshirts from"../assets/images/sweatshirts.png";
import pallazo from"../assets/images/pallazo.png";
import denim from"../assets/images/denim.png";

function Collections({cart, setCart}) {
  return (
    <section className=" container m-auto">
      <h2 className="text-center text-3xl font-bold my-20">
        Featured Collections
      </h2>

      <div className="flex justify-between gap-5 ">
        <Collection img={leatherjacket} title="Brown Leather Jacket"price={2250} cart={cart} setCart={setCart} />
        <Collection img={sweatshirts} title="Round Neck Sweatshirts" price={1200} cart={cart} setCart={setCart} />
        <Collection img={pallazo} title="Pleated Pallazo Trouser" price={1800}  cart={cart} setCart={setCart} />
        <Collection  img={denim} title="M-22 Denim Jacket" price= {1250} cart={cart} setCart={setCart} />
      </div>
  
    </section>
  );
}
export default Collections;
