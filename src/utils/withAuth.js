"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { auth } from '@/utils/Firebase.js';

const withAuth =  (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        user ? setIsLoading(false) : router.replace('/') ;
      });
      return () => unsubscribe();
    }, [router]);

    if (isLoading) return <div>Not login</div>; // Mostrar un mensaje de carga mientras se verifica la autenticación
    
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;


