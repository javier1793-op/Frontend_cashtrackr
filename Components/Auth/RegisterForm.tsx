"use client";

import { register } from "@/app/actions/create-account-action";
import { useFormState } from "react-dom";
import ErrorMessage from "../ui/ErrorMessage";
import SuccessMessage from "../ui/SuccessMessage";
import { useEffect, useRef } from "react";

const RegisterForm = () => {
  const ref= useRef<HTMLFormElement>(null)
  const [state, dispatch] = useFormState<ActionStateType, FormData>(register, {
    errors: [],
    success: "",
  });

  useEffect(()=>{
    if(state.success){
      ref.current?.reset()
    }
  },[state])
  
  return (
    <form className="mt-14 space-y-5" 
    ref={ref}
    noValidate 
    action={dispatch}>
      {state.success.length > 0 && (
        <SuccessMessage>{state.success}</SuccessMessage>
      )}
      {state.errors.map((err, idx) => (
        <ErrorMessage key={idx}>{err}</ErrorMessage>
      ))}

      <div className="flex flex-col gap-2">
        <label className="font-bold text-2xl" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="email"
        />
        {state.errors
          .filter((e) => e.path === "email")
          .map((err, idx) => (
            <ErrorMessage key={idx}>{err.message}</ErrorMessage>
          ))}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-2xl">Nombre</label>
        <input
          type="name"
          placeholder="Nombre de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="name"
        />
        {state.errors
          .filter((e) => e.path === "name")
          .map((err, idx) => (
            <ErrorMessage key={idx}>{err.message}</ErrorMessage>
          ))}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-2xl">Password</label>
        <input
          type="password"
          placeholder="Password de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="password"
        />
        {state.errors
          .filter((e) => e.path === "password")
          .map((err, idx) => (
            <ErrorMessage key={idx}>{err.message}</ErrorMessage>
          ))}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-bold text-2xl">Repetir Password</label>
        <input
          id="password_confirmation"
          type="password"
          placeholder="Repite Password de Registro"
          className="w-full border border-gray-300 p-3 rounded-lg"
          name="password_confirmation"
        />
        {state.errors
          .filter((e) => e.path === "password_confirmation")
          .map((err, idx) => (
            <ErrorMessage key={idx}>{err.message}</ErrorMessage>
          ))}
      </div>

      <input
        type="submit"
        value="Registrarme"
        className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer block"
      />
    </form>
  );
};

export default RegisterForm;
