import Category from "./Category";
import jacket from"../assets/images/jacket.png"
import handbag from"../assets/images/handbag.png"
import shirt from"../assets/images/tshirt.png"
import dress from"../assets/images/dress.png"
import jeans from"../assets/images/jeans.png"
import shoe from"../assets/images/shoe.png"
import sweater from"../assets/images/sweater.png"


function Categories() {
  return (
    <section className="container m-auto">
      <h2 className="text-center text-3xl font-bold ">Top Categories</h2>
      <div className="flex  items-center justify-evenly ">
        <Category img={jacket} title="Jackets" />
        <Category img={handbag} title="Handbags"/>
        <Category img={shirt} title="Shirts"/>
        <Category img={dress} title="Dresses"/>
        <Category img={jeans} title="Jeans"/>
        <Category img={shoe} title="Shoes"/>
        <Category img={sweater} title="Sweaters"/>
      </div>
    </section>
  );
}
export default Categories;
