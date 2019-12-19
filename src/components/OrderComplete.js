import React from 'react'
import { Link } from 'react-router-dom';
import Styles from '../styles/OrderComplete.module.css';
import confirmImage from '../Assets/ProductImages/confim.png'


export default function OrderComplete() {
    return (
       <div>
           <div className={Styles.imageWrapper}>
                <img className={Styles.img} src={confirmImage} alt="confirm" />
           </div>
            <div style={{textAlign : "center"}}>
                <h1>Thanks For Shopping!!</h1>
                <Link to="/products">Continue Shopping</Link>
            </div>
       </div>
    )
}
