import React from "react";
import {
  Container,
  Description,
  Footer,
  Img,
  Main,
  SocialMediaContainer,
  Text,
  Title,
} from "./styled";
import EmailIcon from "../../assets/Icons/EmailIcon.png";
import SocialMedia from "../SocialMedia/SocialMedia";

const Contact = () => {
  return (
    <Main id="contact">
      <Container>
        <Img src={EmailIcon} alt="email"  />
        <Description>
          <Title>Contate-me!</Title>
          <Text>
            Procuro oportunidade de trabalho onde eu possa aprender, me
            desenvolver e evoluir na minha carreia profissional.
            <br />
            <br />
            E-mail para contato: email@email.com.br Celular: (xx) xxxxx-xxxx
          </Text>
        </Description>
      </Container>
      <SocialMediaContainer>
        <SocialMedia direction="row" mt="15%" />
      </SocialMediaContainer>
      
      <Footer>© 2020 Carlos Henrique</Footer>
    </Main>
  );
};

export default Contact;
