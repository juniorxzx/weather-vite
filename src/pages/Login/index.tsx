import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, GroupImages, Icon, MainIcon, Title } from "./styles";
import Img1 from "../../assets/icons/clouds.png";
import Img2 from "../../assets/icons/cloudy.png";
import Img3 from "../../assets/icons/lightning.png";
import Img4 from "../../assets/icons/night.png";
import Img5 from "../../assets/icons/moon.png";
import Layout from "../../components/Layout";
function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      navigate("/");
    }
  }, [localStorage]);

  const authenticate = () => {
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <Layout>
      <Container>
        <GroupImages>
          <MainIcon
            src={Img3}
            initial={{ scale: 1 }}
            animate={{ scale: 1.2, x: 0, y: 0 }}
          />

          <Icon
            src={Img1}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: -60, y: -60, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <Icon
            src={Img2}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 60, y: -60, opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
          <Icon
            src={Img4}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: -60, y: 60, opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <Icon
            src={Img5}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 60, y: 60, opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
        </GroupImages>


        <Title>Weather</Title>

        <Button onClick={authenticate}>
          <span>Iniciar sessão</span>
        </Button>
      </Container>
    </Layout>
  );
}

export default Login;
