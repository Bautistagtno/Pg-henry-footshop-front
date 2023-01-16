import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { removeToCart } from '../../Actions';

export const CartItem = ({ item }) => {

  //const {_id} = useParams();
   const dispatch = useDispatch()

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeToCart(item._id))
    //console.log(item)
   //console.log(item._id)
  };
  //console.log(item)

  return (
    <div>
      <div>
        <img src={item.imagenes[0]} alt="imagen" width={"20%"} />
      </div>
      <Link to={`/product/${item._id}`}>
        <p>{item.modelo}</p>
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


// return (
//   <div>
//     <div>
//       <img src={item.imagenes[0]} width={"20%"} />
//     </div>
//     <Link to={`/product/${item._id}`}>
//       <p>{item.modelo}</p>
//     </Link>

//     <p>{item.precio}</p>

//     <select>
//       <option> {item.inventario} </option>
//     </select>
//     <button onClick={handleDelete}>X (delete)</button>
//   </div>
// )
// };