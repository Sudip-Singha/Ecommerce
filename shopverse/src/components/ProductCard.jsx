import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div key={product.id} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">&#8377;{product.price}</p>
      <button className='font-semibold mt-4 hover:text-red-400'
        onClick={() => {
          cart.addOneToCart(product.id)
        }}
      >
        Add to Cart {productQuantity == 0 ? '' : (<span className='ml-24 text-red-400 font-semibold'>Quantity - {productQuantity}</span>) }
      </button>
    </div>
  )
}

export default ProductCard