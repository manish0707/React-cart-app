import React from 'react'
import { NavLink } from 'react-router-dom';
import Styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav style={Styles.nav}>
            <ul className={Styles.nav_ul}>
                <li className={Styles.nav_ul_li}>
                    <NavLink exact activeClassName={Styles.linkActive} className={Styles.nav_ul_li_a} to="/">Home</NavLink>
                </li>
                <li className={Styles.nav_ul_li}>
                    <NavLink exact activeClassName={Styles.linkActive} className={Styles.nav_ul_li_a} to="/products">Products</NavLink>
                </li>
                <li className={Styles.nav_ul_li}>
                    <NavLink exact activeClassName={Styles.linkActive} className={Styles.nav_ul_li_a} to="/cart">Cart</NavLink>
                </li>
            </ul>
        </nav>
    )
}
