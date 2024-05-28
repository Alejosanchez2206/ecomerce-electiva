import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import all_products from "../assets/all_products"
import Item from "../components/Item"

function Category({ category, banner }) {
  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt={`banner_${category}`} />
        </div>
        <div className="flex justify-between my-8 mx-2">
          <h5><span className="font-bold">Showing 1-12</span> out if 36 products</h5>
          <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-4 rounded-5xl ring-1 ring-slate-900/5 bg-xl">Sort by <MdOutlineKeyboardArrowDown /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {all_products.map((product) => (
            product.category === category ? <Item key={product.id} id={product.id} {...product} /> : null
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="btn_dark_rounded">Ver mas</button>
        </div>
      </div>
    </section>
  )
}

export default Category