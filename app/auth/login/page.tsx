
import LoginForm from "@/Components/Auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata={
    title:'Chastrackr - Iniciar sesión',
    description:'Chastrackr - Iniciar sesión'
}

const LoginPage = () => {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Iniciar Sesión</h1>
      <p className="text-3xl font-bold">
        y controla tus <span className="text-amber-500">finanzas</span>
      </p>
        <LoginForm/>
    
    </>
  );
};

export default LoginPage;