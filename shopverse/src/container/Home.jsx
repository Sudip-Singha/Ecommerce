import React from 'react'
import { home } from '../assets'
import { ProductCard, Contact } from '../components'
import { products } from '../utils/products'

const Home = () => {
  return (
    <>
      <div className='w-full relative'>
        <img src={home} alt="banner"
          className='w-full'
        />
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-black text-[25px] md:text-[40px] font-medium mb-8">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
      
      <Contact />
    </>
  )
}

export default Home