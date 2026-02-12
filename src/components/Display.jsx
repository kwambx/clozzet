function Display({ img, title, title2, button, bg }) {
  return (
    <section className={`container mx-auto ${bg} my-12 h-full`}>
      <div className=" flex   justify-between items-end h-full">
        <div className="text-xl  m-8  ">
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold">{title2}</h3>
          <button className="cursor-pointer">{button}</button>
        </div>

        <img src={img} className="block object-contain h-full" />
      </div>
    </section>
  );
}
export default Display;
