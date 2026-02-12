
import Hero from "../components/Hero";
import herobg from "../assets/images/hero-background.png";
import Categories from "../components/Categories";
import Collections from "../components/Collections";
import Displays from "../components/Displays";


function Home({cart, setCart}) {
  return (
    <>
      <header className="bg-[url(src/assets/images/hero-background.png)] bg-no-repeat bg-top-right bg-size-[50%]">
      
        <Hero />
      </header>

      <Categories />
      <Collections   cart={cart} setCart={setCart} />
      <Displays/>
  
    </>
  );
}

export default Home;
