import React from "react";
import "../components/style/Login.css"
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import { Input, Button } from '@chakra-ui/react'

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email,
      password,
    };
    auth.login(data, () => {
      navigate(from);
    });
    console.log(data);
  };

  return (
    <div >
      <form className="container-login" onSubmit={handleSubmit}>
        
        Email: <Input placeholder='Digite seu Email' height={'40px'} width={'400px'} borderRadius={'5'} fontSize='24px'/>
        Senha: <Input placeholder='Digite sua senha' height={'40px'} width={'400px'} borderRadius={'5'} fontSize='24px'/>
          <Button type='submit' width={'410px'} height={'40px'} variant='solid' borderRadius={'5'} backgroundColor='grey' fontSize={'24px'}>
         Enviar
         </Button>
      </form>
    </div>
  );
}

export default Login;
