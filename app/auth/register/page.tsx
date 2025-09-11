import RegisterForm from "@/Components/Auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata={
    title:'Chastrackr - Crear cuenta',
    description:'Chastrackr - Crear cuenta'
}

const RegisterPage = () => {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Crear cuenta</h1>
      <p className="text-3xl font-bold">
        y controla tus <span className="text-amber-500">finanzas</span>
      </p>

      <RegisterForm />
    </>
  );
};

export default RegisterPage;
