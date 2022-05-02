import React from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import '../style/text.css'

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
      <button
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
