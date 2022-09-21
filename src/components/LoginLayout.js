import React from "react";
import styled from "styled-components";
import Logo from "../Images/Logo.png";

function LoginLayout({ children }) {
  return (
    <Container className="d-lg-inline-flex h-100 w-100">
      <Sidebar className="p-4 d-flex justify-content-center align-items-center">
        <ImgLogo>
          <img src={Logo} alt="logo" />
        </ImgLogo>
      </Sidebar>

      <Main>
        <DashboardWrapper>{children}</DashboardWrapper>
      </Main>
    </Container>
  );
}

const DashboardWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
`;
const Sidebar = styled.div`
  background: #031434;
  min-width: 480px;
`;
const Main = styled.main`
  flex-grow: 100;
  display: flex;
  align-items: center;
`;
export const ImgLogo = styled.div`
  img {
    height: 100%;
    width: 100%;
    max-width: 245px;
  }
`;

export default LoginLayout;
