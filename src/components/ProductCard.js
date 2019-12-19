import React from 'react'
import Styles from '../styles/ProductCard.module.css';
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    return (
        <div className={Styles.cardWrapper}>
            <div className={Styles.imageWrapper} style={{backgroundImage : `url(${props.image})`}}>
            </div>
            <div className={Styles.infoWrapper}>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p className={Styles.infoWrapper_price}>${props.price}</p>
            </div>
            <div className={Styles.cardBtnWrapper}>
                <Link to={`/product/${props.id}`} className={Styles.cardBtn}>View Product</Link>           
            </div>
        </div>
    )
}
