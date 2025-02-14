import React, { useEffect } from "react";
import { Container, Title } from "./styles";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const navigate = useNavigate();

  return (
    <Container onClick={logout}>
      <IoLogOut size={20} />
      <Title>Sair</Title>
    </Container>
  );
};

export default Logout;
