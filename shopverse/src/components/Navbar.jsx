import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { s } from '../assets'
import { CartContext } from '../CartContext'

const Navbar = () => {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <nav className='fixed flex z-10 justify-between items-center w-full py-5'>
            <div className='flex justify-center items-center gap-4 sm:ml-20 ml-10'>
                <img src={s} alt="logo" className='w-10 h-10' />
                <Link to={'/'}>
                    <h2 className='text-[24px] text-red-500 font-bold'>Shopverse</h2>
                </Link>
            </div>

            <Link to={'/cart'}>
                <ShoppingCart className='w-10 h-10 sm:mr-20 mr-10 cursor-pointer hover:text-red-400' />
                {productsCount > 0 ?
                    <p className='absolute bottom-8 right-14 text-white text-[24px] font-medium bg-red-500 rounded-full
                    w-6 h-6 flex justify-center items-center
                '>
                        {productsCount}
                    </p>
                    : ''
                }
            </Link>
        </nav>
    )
}

export default Navbar