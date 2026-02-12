

function Category({img,title}){
    return (
<div className="flex flex-col justify-center items-center gap-2" >

<div className="rounded-full w-30 my-10  p-5 bg-slate-200">
    <img src={img} alt={title}/>
</div>
<p className="text-2xl">{title} </p>



</div>

    )
}
export default Category