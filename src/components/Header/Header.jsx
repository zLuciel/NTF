"use client"
import { HeaderContainer } from './css/Header'
import { auth } from "@/utils/Firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setNullUser} from '@/redux/users/actions';
import { useEffect,useState} from 'react';

const Header = () => {
  const userdb = useSelector((state) => state.users.user);
  const [loggin,setLoggin] = useState(false)
   console.log(userdb);
 // const datadb = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggin(true)
        const { uid, displayName, email, photoURL } = user;
        const data = {uid,name:displayName,email,active:true}
        dispatch(getUser(data));
      }else{
        setLoggin(false)
      } // Dispatch de la acción setUser con el usuario
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  //**logueo */
  const signInWithGoogle = async () => {
    console.log("entrando");
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Iniciaste sesión con éxito");
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setNullUser(null)
      console.log("Cierre de sesión exitoso");
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
      // Manejo de errores
    }
  };

  return (
    <HeaderContainer>
       <nav >
      { <button ><Link   href={"/"} as={"/"} >Home</Link> </button>}
        <ul>
          <li>{userdb?.name && loggin ? userdb?.name : "Anonimo" } </li>
          <li onClick={signInWithGoogle}>Iniciar sesión con Google</li>
          <li onClick={signOut}>cerrar</li>
          <button><Link prefetch={false} href={"/dashboard/create"} >dashboard</Link> </button>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header