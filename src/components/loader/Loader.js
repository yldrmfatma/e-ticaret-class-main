//// bazı işlemlerde beklemek gerektiğinde loader.gif çalıştırılır
import React from 'react'
import styles from "./Loader.module.scss"
import loaderImg from "../../assets/loader.gif"
import ReactDOM from 'react-dom'

const Loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper} >
      <div className={styles.Loader} >
        <img src={loaderImg} alt="Loading.." ></img>
      </div>
    </div>,document.getElementById("loader")
  )
}

export default Loader