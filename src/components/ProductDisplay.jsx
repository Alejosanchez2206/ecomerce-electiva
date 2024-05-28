import { MdStar } from 'react-icons/md'
import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'

function ProductDisplay({ product }) {
    return (
        <section>
            <div className="flex flex-col gap-14 xl:flex-row">
                <div className='flex gap-x-2 xl:flex-1'>
                    <div className='flex flex-col gap-[10px] flex-wrap'>
                        <img src={product_rt_1} alt="prdctImg" className='max-h-[99px]' />
                        <img src={product_rt_2} alt="prdctImg" className='max-h-[99px]' />
                        <img src={product_rt_3} alt="prdctImg" className='max-h-[99px]' />
                        <img src={product_rt_4} alt="prdctImg" className='max-h-[99px]' />
                    </div>
                    <div clsassName='w-full'>
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className='flex flex-col xl:flex-[1.7]'>
                    <h3 className='h3'>{product.name}</h3>
                    <div className='flex gap-x-2 text-secondary medium-22'>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                    </div>
                    <div className='flex gap-x-6 medium-20 my-4'>
                        <div className='bold-24'>${product.new_price}</div>
                        <div className='text-secondary line-through'>${product.old_price}</div>
                    </div>
                    <div className='mb-4'>
                        <h4 className='bold-18'>Select Size:</h4>
                        <div className='flex gap-4 my-4'>
                            <div className='ring-1 ring-slate-900/5 px-4 py-2 rounded-3xl bg-slate-900/5 cursor-pointer h-10 w-10 flexCenter'>XS</div>
                            <div className='ring-1 ring-slate-900/5 px-4 py-2 rounded-3xl bg-slate-900/5 cursor-pointer h-10 w-10 flexCenter'>S</div>
                            <div className='ring-1 ring-slate-900/5 px-4 py-2 rounded-3xl bg-slate-900/5 cursor-pointer h-10 w-10 flexCenter'>M</div>
                            <div className='ring-1 ring-slate-900/5 px-4 py-2 rounded-3xl bg-slate-900/5 cursor-pointer h-10 w-10 flexCenter'>L</div>
                            <div className='ring-1 ring-slate-900/5 px-4 py-2 rounded-3xl bg-slate-900/5 cursor-pointer h-10 w-10 flexCenter'>XL</div>
                            <div className='ring-1 ring-slate-900/5 px-4 py-2 rounded-3xl bg-slate-900/5 cursor-pointer h-10 w-10 flexCenter'>2XL</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                        <button className='btn_dark_outline !rounded-none uppercase regular-16 tracking-widest'>Add To Cart</button>
                        <button className='btn_dark_rounded !rounded-none uppercase regular-16 tracking-widest'>Buy Now</button>
                    </div>
                    <p><span className='medium-18 text-tertiary'>Category : </span>< span className='uppercase'>{product.category}</span></p>
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay