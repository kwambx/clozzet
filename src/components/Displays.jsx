import Display from "./Display";
import hbag from "../assets/images/hbags.png";
import Watch from "../assets/images/watches.png";
import lady from "../assets/images/ladies.png";
import suit from "../assets/images/mens.png";
function Displays() {
  return (
    <div className=" p-2 grid grid-cols-2  grid-rows-3 gap-2 container mx-auto h-[60vh] my-20">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 h-full">
        <Display
          img={suit}
          title="casual collection"
          title2="Men's Collection"
          button="shop now"
          bg="bg-[#585c5627]"
        />
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <Display
          img={Watch}
          title="casual collection"
          title2="Luxury watches"
          button="shop now"
          bg="bg-[#476ba034]"
        />
      </div>
      <div className=" col-start-1 col-end-2 row-start-3 row-end-4 ..">
        <Display
          img={hbag}
          title="casual collection"
          title2="Designer handbags"
          button="shop now"
          bg="bg-[#f8b4ed2f]"
          
        />
      </div>
      <div className=" col-start-2 col-end-3 row-start-2 row-end-4 ...">
        <Display
          img={lady}
          title="casual collection"
          title2="Ladies Collection"
          button="shop now"
          bg="bg-[#a0945f2c]"
        />
      </div>
    </div>
  );
}
export default Displays;
