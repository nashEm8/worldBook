import React from 'react';
import '../styles/navbar.css';
import logo from '../logo.png';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                <img src={logo}/>
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i class="fa-solid fa-lock-open"></i>
                    <div>Login</div>
                </span>
                <span>
                    <i class="fa-solid fa-people-carry-box"></i>
                    <div>Pedidos</div>
                </span>
                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    <div>Localização</div>
                </span>
                <span>
                    <i className="fas fa-cart-plus"></i>
                    <div>Carrinho</div>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar