import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext'
import { Plus, Minus } from 'phosphor-react'


const Cart = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const checkout = async () => {
    setIsProcessing(true);
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if (response.url) {
        window.location.assign(response.url); // Forwarding user to Stripe
      }
    });
  }


  return (
    <div>
      {productsCount > 0 ?
        <>
          <div className='absolute mt-28  w-full flex flex-col justify-center items-center gap-4'>
            <p className='font-bold text-[24px]'>Items in your Cart</p>
            <h1 className='text-blue-400 font-bold text-[24px]'>Total: <span className='text-black'>&#8377;{cart.getTotalCost()}</span></h1>
            <button className='px-6 py-2 text-[24px] text-white bg-green-500 rounded-md hover:bg-green-400'
              onClick={checkout}
            >
              {isProcessing ? 'Purchasing' : 'Purchase'}
            </button>
          </div>
          <div className='absolute top-[40%] left-[15%] right-[15%] sm:left-[25%] sm:right-[25%]'>
            {cart.items.map((product, index) => (
              <div key={product.id} className="group mb-8 grid grid-cols-1 gap-x-40 gap-y-2 sm:gap-y-10 sm:grid-cols-2 p-8 bg-gray-100">
                <div>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-[#f7f7f7ff] xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={`${product.imageSrc}`}
                      alt={product.imageAlt}
                      className="h-52 w-50 object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">&#8377;{product.price}</p>
                </div>
                <div className='flex flex-col gap-4 sm:gap-20 sm:items-end'>
                  <p className='font-semibold text-[20px]'>Quantity - {product.quantity}</p>
                  <div className='flex gap-8'>
                    <Minus className='text-[30px] cursor-pointer bg-gray-300 p-1 hover:bg-blue-300'
                      onClick={() => cart.removeOneFromCart(product.id)}
                    />
                    <Plus className='text-[30px] cursor-pointer bg-gray-300 p-1 hover:bg-blue-300'
                      onClick={() => cart.addOneToCart(product.id)}
                    />
                  </div>
                  <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400'
                    onClick={() => cart.deleteFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
        :
        <h1 className='font-bold text-[24px] absolute top-[25%] text-center w-full'>Cart is empty.</h1>

      }
    </div>
  )
}

export default Cart