//// burada google firebase ile etkileşime buradan girilecek.
// Import the functions you need from the SDKs you need
//firebasae ile etkileşime geçildi
import { initializeApp } from "firebase/app";
//authentication işlemleri için
import { getAuth} from "firebase/auth"
//firestore database erişimi için 
import {getFirestore} from "firebase/firestore"
//storage erişimi için (resim kayıt alanı)
import {getStorage} from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyCBuAK3gPQOaqCbvuVvLwYhnoSO2Sz4-9I",
  authDomain: "e-ticaret-class-m.firebaseapp.com",
  projectId: "e-ticaret-class-m",
  storageBucket: "e-ticaret-class-m.appspot.com",
  messagingSenderId: "230354073121",
  appId: "1:230354073121:web:e6bf18b1a95f0326789560"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)

export default app;