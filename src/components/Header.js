import React from 'react'
import { useSelector } from 'react-redux';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const result = useSelector((state) =>state.cartData )
    console.log(result, "RESULTT")
  return (
    <>
    <div className='cart-container'>

        <ShoppingCartIcon color='primary' /><span>{result.length}</span>
    </div>
    </>
  )
}

export default Header