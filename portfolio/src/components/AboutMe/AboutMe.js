import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  LeftSide,
  Main,
  RightSide,
  Content,
  Title,
  Job,
  ShorText,
  About,
  Skills,
  Skill,
  Button,
  Name,
} from "./styled";

const AboutMe = () => {
  return (
    <Main id="about">
      <LeftSide>
        <Name>Carlos Henrique</Name>
        <Content>
          <div>
            <Title>
              Eu sou
              <br />
              Carlos Henrique
            </Title>

            <Job>Desenvolvedor Web Full Stack</Job>
            <ShorText>Apaixonado por tecnologia e programação.</ShorText>
          </div>
          <div>
            <About>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </About>

            <Skills>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
              <Skill>Javascript</Skill>
              <Skill>React</Skill>
              <Skill>NodeJs</Skill>
              <Skill>MySQL</Skill>
            </Skills>
          </div>
          <div>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <Button>CV em PDF</Button>
            </a>
          </div>
        </Content>
      </LeftSide>
      <RightSide>
        <SocialMedia direction={"column"} mt="20%" />
      </RightSide>
    </Main>
  );
};

export default AboutMe;
