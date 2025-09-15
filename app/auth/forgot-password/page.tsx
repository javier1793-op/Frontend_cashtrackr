import ForgotForm from "@/Components/Auth/ForgotForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chastrackr - Iniciar sesión",
  description: "Chastrackr - Iniciar sesión",
};

const ForgotPage = () => {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">
        ¿Olvidaste tu contraseña?
      </h1>
      <p className="text-3xl font-bold">
        y controla tus{" "}
        <span className="text-amber-500">Aqui puedes reestablecerla</span>
      </p>

      <ForgotForm />
      <nav className="mt-10 flex flex-col space-y-4">
        <Link href="/auth/login" className="text-center text-gray-500">
          ¿Ya tienes una cuenta? Iniciar sesión
        </Link>
        <Link href="/auth/register" className="text-center text-gray-500">
          ¿No tienes una cuenta? Crear cuenta
        </Link>
      </nav>
    </>
  );
};

export default ForgotPage;
