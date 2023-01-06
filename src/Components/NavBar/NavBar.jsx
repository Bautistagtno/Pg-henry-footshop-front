import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

import logo from "../imagenes/footshop.png"
import './NavBar.css'


export default function NavBar(){

    return(
        <div>


              

            <h1  className='titulo'>Zapatero a tus servicios</h1>
            
            <SearchBar/>

            <Link  className='create' to='/Home'><img className='lhome' src={logo} alt='a'/></Link>
            
            

            <div className='contenidoselects'>
                <select >
                <option defaultValue='all'>Orden Alfabetico</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>

                <select >
                <option value="all">Orden Por Precio</option>
                    <option value="asc">Ascendente</option>
                    <option value="des">Descendente</option>
                </select>
               
                {/* <select  >
                  <option defaultValue='All'>Marcas</option> 
                { allZapas.map((e,i)=>{
                    return (
                        <option key={i}>{e}</option>
                        )}
                        )
                    }   
            </select> */}
    
                
    


    


</div>


                
            
        
    




 





            

        </div>
    )
}