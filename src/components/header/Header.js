//// tüm linklerin olduğu başlık kısmı
import React, { useState } from 'react'
import styles from "./Header.module.scss";
import {Link, NavLink,useNavigate} from "react-router-dom"
import { FaShoppingCart,FaTimes  } from "react-icons/fa"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { signOut } from "firebase/auth";
import {auth} from "../../firebase/config"
import {toast} from "react-toastify"
 
const Header = () => {

  const [showMenu,setShowMenu] = useState(false);
  const navigate=useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const logoutUser=()=>{
    signOut(auth).then(() => {
      toast.success("Logout is Successfull..")
      navigate("/")
    }).catch((error) => {
       toast.error(error.message)   
    });
  }

  const logo = (
    <div className={styles.logo}>
      <Link to="/">
        <h2>
          e<span>Shop</span>.
        </h2>
      </Link>
    </div>
  )
  const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20}/>
        <p>0</p>
      </Link>
    </span>
  )
  const activeLink=(({isActive})=>(isActive ? `${styles.active}`:""))
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={ showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div className={ showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}></div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink className={activeLink} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink className={activeLink} to="/login">Login</NavLink>
              <NavLink className={activeLink} to="/order-history">My Orders</NavLink>
              <NavLink onClick={logoutUser} to="/">Logout</NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
  )
}

export default Header