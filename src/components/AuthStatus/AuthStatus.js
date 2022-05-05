import React from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import '../style/AuthStatus.css'

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);

  if (!auth.user) {
    return <p className="text"></p>;
  }
  return (
    <p className="text">
      Bem vindo {auth.user.name}!{" "}
      <br></br>
      <button className="aut"
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
};

export default AuthStatus;
