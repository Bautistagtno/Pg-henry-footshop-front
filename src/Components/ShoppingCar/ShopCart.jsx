import React from 'react'
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export const ShopCart = () => {

  const cart = useSelector(state => state.cart);

  return (
    <div>
      <div>
        <NavBar/>
        <h2>Carrito de compras</h2>
        {cart.length === 0 ? (
          <div> <p>El carrito esta vacio </p><Link to={'/home'}>Regresar</Link> </div>
        ) : (cart.map(e => <CartItem item={e} />)
        )}
      </div>
      <div>
        <div>
          <p>Sub total {cart.length} items</p>
          <p>$ Colocar precio total de productos </p>
        </div>
        <div>
          <button>Pagar</button>
        </div>
      </div>
    </div>
  )
}

export default ShopCart;
