import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductHd from '../components/ProductHd'
import ProductDisplay from '../components/ProductDisplay'
import ProductDescription from '../components/ProductDescription'
import RelatedProduct from '../components/RelatedProduct'
function Product() {
  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()

  const product = all_products.find((product) => product.id === Number(productId))

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
      </div>
    )
  }
  return (
    <section className='max_padd_container py-28'>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription product={product} />
        <RelatedProduct />
      </div>
    </section>
  )
}

export default Product