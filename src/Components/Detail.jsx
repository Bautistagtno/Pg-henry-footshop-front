import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getZapaById } from '../Actions';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './NavBar/NavBar';
import './CSS/Detail.css'


export default function Details() {

   const { id } = useParams()
   const dispatch = useDispatch()
   const zapa = useSelector(state => state.detail)


   useState(() => {
      dispatch(getZapaById(id))
   }, [id])


   return (
      
      
      <div>
         <NavBar/>
      <div class="container">
         <div class="card">
            <div class="container-fliud">
               <div class="wrapper row">
                  <div class="preview col-md-6">

                     <Carousel variant="dark">
                        <Carousel.Item>
                           <img
                              className="imgDet d-block w-50"
                              src={zapa.imagen1}
                              alt="First slide"
                           />
                          
                        </Carousel.Item>
                        <Carousel.Item>
                           <img
                              className="imgDet d-block w-50"
                              src={zapa.imagen2}
                              alt="Second slide"
                           />
                          
                        </Carousel.Item>
                        <Carousel.Item>
                           <img
                              className="imgDet d-block w-50"
                              src={zapa.imagen3}
                              alt="Third slide"
                           />
                           
                        </Carousel.Item>
                     </Carousel>
                     
                     <ul class="preview-thumbnail nav nav-tabs">
                        <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={zapa.imagen1} /></a></li>
                        <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={zapa.imagen2} /></a></li>
                        <li><a data-target="#pic-2" data-toggle="tab"><img src={zapa.imagen3} /></a></li>

                     </ul>

                  </div>
                  <div class="details col-md-6">
                     <h3 class="product-title">{zapa.marca}</h3>
                     <p class="product-description">{zapa.modelo}</p>
                     <h4 class="price">PRECIO: <span>${zapa.precio}</span></h4>
                     <h5>TALLES:
                        <select class="sizes">
                           {
                              zapa.talles && zapa.talles.map((e, i) => {
                                 return (
                                    <option key={i}>{e}</option>
                                 )
                              })
                           }

                        </select>
                     </h5>
                     <h5 class="colors">COLORES:
                        <select class='colorSelec'>
                           {
                              zapa.color && zapa.color.map((e, i) => {
                                 return (
                                    <option key={i}>{e}</option>
                                 )
                              })
                           }
                        </select>
                     </h5>
                     <div class="action">
                        <button class="add-to-cart btn btn-default" type="button">COMPRAR</button>
                        <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span>AÑADIR AL CARRITO</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>

   );
}


