import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        <h1>Carrinho de compras</h1>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{`${item.price},00`}</span>
                        <button onClick={()=>handleRemove(item.id)}>
                        <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Valor total: </span>
            <span>R$ {price},00</span>
        </div>
    </article>
  )
}

export default Cart