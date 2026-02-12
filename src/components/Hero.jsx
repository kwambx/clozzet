import heroimage from"../assets/images/hero-image.png"
import {Search} from"lucide-react"
function Hero(){

    return(
<section >
    <div className="container mx-auto">
    
<div className="flex items-center ]">

<div className="w-[10%] flex-1">



<h1 className="text-[80px] font-bold"  >Choose the look that <span className="text-emerald-200">suits</span> you best</h1>
<p className="text-xl py-4" >Every day is a fashion show & the world is your runway.
Clozzet will elevate your wardrobe with the best collections.
Be exclusive, Be Devine, Be yourself. Explore outfits that will
make you comfortably beautiful.True style never dies.
</p>

<div className="gap-20 flex rounded-r-2xl border-black">
<button className="bg-emerald-300 text-white text-2xl font-bold py-4 px-12 text-center rounded-4xl " >Shop Now</button> 
<button className="bg-white text-emerald-500 text-2xl font-bold py-4 px-12 text-center rounded-4xl border border-gray-400 ">About Us</button>
</div>
<div className="flex items-center border border-gray-200 m-3 px-6 py-2 rounded-3xl w-[70%] shadow-2xl my-10">
<Search /><input type="search" placeholder="search" className="  outline-none rounded-3xl w-[50%] text-start text-2xl font-bold my-4 "/>
</div>

</div>

<div className="hidden lg:flex flex-1 ">
    <img src={heroimage} alt="hero image" width={700} />










</div>


</div>




</div>
</section>

    )
}
export default Hero