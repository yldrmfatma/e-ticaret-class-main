//// kayıtlı olmayan kulllanıcılar için kayıt sayfası
import React, { useState } from 'react'
import styles from "./auth.module.scss"
import registerImg from "../../assets/register.png"
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config"
import Loader from "../../components/loader/Loader"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const registerUser = (e) => {
    e.preventDefault();
    console.log(email, password, cPassword)
    if (password !== cPassword) {
      toast.error("Password do not match.")
    }
    else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user)
          setIsLoading(false)
          toast.success("Registration is Succesful")
          navigate("/login")
        })

        .catch((error) => {
          setIsLoading(false)
          toast.error(error.message)
          // ..
        });
    }
  }

  return (
    <>
    {isLoading && <Loader/>}
      <section className={`container ${styles.auth}`}>
        <Card cardClass={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser} >
            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" required value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
            <button className="--btn --btn-prmary --btn-block" type="submit">Register</button>
          </form>
          <span className={styles.register} >
            <p>Already an account </p>
            <Link to="/login" >Login</Link>
          </span>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="login" width="400"></img>
        </div>
      </section>
    </>
  )
}

export default Register