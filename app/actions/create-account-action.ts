'use server'

import { ErrorResponseSchema, RegisterSchema } from "@/src/schemas"


type FieldError = {
  path: string
  message: string
}

type ActionStateType = {
  errors: FieldError[],
  success:string
}

export async function register(prevState: ActionStateType,formData: FormData) {
  const registerData = {
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
    password_confirmation: formData.get('password_confirmation')
  }

  const result = RegisterSchema.safeParse(registerData)

  if (!result.success) {
    // ✅ acá sí existe error.issues
    const errors = result.error.issues.map(e => ({
      path: e.path[0], // ejemplo: 'email', 'password'
      message: e.message
    }))
    //console.log(errors)
    return { 
      errors,
      success: prevState.success
    }
  }

  // ✅ si todo salió bien
  const url = `${process.env.API_URL}/auth/create-account`
  const req= await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:result.data.name,
      password:result.data.password,
      email:result.data.email
    })
  })
  const json= await req.json()
  if(req.status === 409){
    const error = ErrorResponseSchema.parse(json)
    
    return{
      errors:[error.error],
      success: []
    }
  }
 
  return{
    errors:[],
    success: json as string
  }
}
