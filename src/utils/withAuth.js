"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';

const withAuth =  (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { data: session,status } = useSession();

    useEffect(() => {
      if (status === 'loading') {
        // Si la sesión está cargando, establece isLoading en true
        setIsLoading(true);
      } else if (!session) {
        // Si no hay sesión, redirige al inicio de sesión
        router.replace('/');
      } else {
        // Si hay sesión, establece isLoading en false
        setIsLoading(false);
      }
    }, [router, session, status]);

    if (isLoading) return <div>Not login</div>; // Mostrar un mensaje de carga mientras se verifica la autenticación
    
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;


