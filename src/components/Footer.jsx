import logo from "../assets/images/logo.svg";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

function Footer() {
  return (
    <footer className="bg-[#585c5627] py-4 ">
      <div className=" text-center container my-8 ">
        <h1 className="text-3xl font-lightbold my-10">
          Subscribe & get up to 30% OFF
        </h1>
        <div className="flex gap-2 justify-center items-center">
          <input
            type="search"
            placeholder="Enter your email"
            className="  bg-white rounded-3xl w-[30%]  text-sm  my-4 border border-emerald-300 p-4  shadow-xl"
          />

          <button className="bg-emerald-300 text-white text-xl rounded-3xl px-15 py-4">
            subscribe
          </button>
        </div>
      </div>

      <div className="flex justify-evenly container my-8">
        <div className="w-40">
          <img src={logo} alt="Clozzet Logo" className="w-[100]" />
          <p className="py-4">
            Offering a unique and stylish perspective on fashion is our number
            one priority. Confuse your mirror by our trendy outfits.
          </p>
        </div>

        <div>
          <p className="font-bold text-xl py-4">Store</p>
          <ul className="text-xl" style={{ lineHeight: "2.5" }}>
            <li>
              <a> Women's Fashion</a>
            </li>
            <li>
              <a> men's Fashion</a>
            </li>
            <li>
              <a> Store sales</a>
            </li>
            <li>
              <a> Collections</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-xl py-4">Help</p>
          <ul className="text-xl"style={{ lineHeight: "2.5" }}>
            <li>
              <a>Customer Support</a>
            </li>
            <li>
              <a>Terms& Condition</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a> Track your order</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-xl py-4 ">Contact Us</p>
          <div className="flex gap-3 my-3 ">
            <img src={email} width={30} />
            <p className="text-xl">contact@clozzet.com</p>
          </div>

          <div className="flex gap-3 my-3">
            <img src={phone} width={30} />
            <p>254-700-333-333</p>
          </div>
          <p className="text-xl">Follow us</p>
          <div className="flex justify-between">
            <img src={facebook} width={30} />
            <img src={instagram} width={30} />
            <img src={twitter} width={30} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
