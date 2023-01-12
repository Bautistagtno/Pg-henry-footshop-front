import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getZapaById } from '../Actions';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './NavBar/NavBar';


import publi01 from './imagenes/detalleB01.png';
import publi02 from './imagenes/detalleB02.png';
import publi03 from './imagenes/detalleB03.png';
import publi04 from './imagenes/detalleB04.png';
import { Link } from 'react-router-dom';

import './CSS/Detail.css'
import './CSS/Home.css'


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
      <div>
      <Carousel variant="dark">
      <Carousel.Item>
      <a href='http://localhost:3000/zapatillas/63b626932bdf1dfe9c9e107a'>
        <img
          className="propa"
          src={publi01}
          alt="First slide"
        />
        </a>
        
      </Carousel.Item>
      <Carousel.Item>
        <a href='http://localhost:3000/zapatillas/63b6240d2bdf1dfe9c9d01bd'>
        <img
          className="propa"
          src={publi02}
          alt="Second slide"
          />
          </a>
        
      </Carousel.Item>
      <Carousel.Item>
      <a href='http://localhost:3000/zapatillas/63b621ea2bdf1dfe9c9c1c68'>
        <img
          className="propa"
          src={publi03}
          alt="Third slide"
        />
        </a>
        
      </Carousel.Item>

      <Carousel.Item>
      <a href='http://localhost:3000/zapatillas/63b626f22bdf1dfe9c9e3654'>
        <img
          className="propa"
          src={publi04}
          alt="Forth slide"
          />
          </a>
        
      </Carousel.Item>
    </Carousel>
      </div>
      </div>

   );
}


