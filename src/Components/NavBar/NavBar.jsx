import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import notificacion from "../../img/bell.png"
import './NavBar.css'

import Button from 'react-bootstrap/Button';

import logo from "../imagenes/footshopb.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/Home.css'
import { useState } from "react";
import { useEffect } from "react";


export default function NavBar({socket}){

const [notificaciones, setNotificaciones] = useState([])
const [open, setOpen] = useState(false)

 useEffect(()=>{
  
  socket.on("notificacion", msg=>{
    setNotificaciones(prev => [...prev, msg])
  })
}, [socket])

const handleRead = () => {
  setNotificaciones([]);
  setOpen(false);
};


 
 console.log(notificaciones) 

    return(

      
    <Navbar bg="primary" variant="dark" >
     
        <Link to='/Home'>
        <img
              src={logo}
              width="100"
              height="80"
              className="logo"
              alt="React Bootstrap logo"
            />
        </Link>
        <div className="navbar">
      <div className="icon" onClick={()=> setOpen(!open)}>
          <img src={notificacion} className="iconImg"></img>
          {notificaciones.length >0 && <div className="counter">{notificaciones.length}</div>}
          {open && (
        <div className="notifications">
          {notificaciones.map((n) => <span>{n}</span>)}
          <button className="nButton" onClick={handleRead}>
            Marcar como leido
          </button>
        </div>
      )}
      </div>
      </div>
        <Container>
            
          <Navbar.Brand href="#home">FootShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
          
          <SearchBar/>
          <Link  to= '/login'>
          <Button className="btnLogin" variant="light">Ingresar</Button>
          </Link>
        </Container>
      </Navbar>

    )
}