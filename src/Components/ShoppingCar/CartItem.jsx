import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToCart } from '../../Actions';

export const CartItem = ({ item }) => {

   const dispatch = useDispatch()

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeToCart(item._id))
  };

  return (
    <div>
      <div>
        <img src={item.imagenes[0]} alt="imagen" width={"20%"} />
      </div>
      <Link to={`/product/${item._id}`}>
      <h3 className="bold" style={{ textTransform: 'capitalize' }}>{item.modelo}</h3>
      </Link>
    
      <p>{item.precio}</p>

      <select>
        <option> {item.inventario} </option>
      </select>
      <button onClick={handleDelete}>X (delete)</button>
    </div>
  )
};

export default CartItem;
