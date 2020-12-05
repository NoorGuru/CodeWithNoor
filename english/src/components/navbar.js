import React from 'react'
import { Link } from "gatsby"

import style from '../styles/navbar.module.scss'


const NavBar = () => (
    <nav className={style.navbar}>
        <ul className={style.navList}>
            <li>
                <Link className={style.navItem} activeClassName={style.activeNavItem} to="/python/">Python Course</Link>
            </li>
            <li>
                <Link className={style.navItem} activeClassName={style.activeNavItem} to="/cpp/">C++ Course</Link>
            </li>
            <li>
                <Link className={style.navItem} activeClassName={style.activeNavItem} to="/about/">About Us</Link>
            </li>
            <li>
                <Link className={style.navItem} activeClassName={style.activeNavItem} to="/contact/">Contact Us</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar