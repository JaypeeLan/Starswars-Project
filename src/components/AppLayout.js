import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import SidebarItem from "./SidebarItem";

function AppLayout({ children }) {
  return (
    <Container>
      <Sidebar>
        <SidebarItem />
      </Sidebar>
      <Main>
        <NavBar />
        <DashboardWrapper>{children}</DashboardWrapper>
      </Main>
    </Container>
  );
}

const DashboardWrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  font-family: "Poppins", sans-serif;
`;
const Sidebar = styled.div`
  /* flex:0 0 20%; */
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  width: 45%;
@media (min-device-width: 1000px) {
    width: 270px;
  }
  background: #031434;
`;
const Main = styled.main`
  position: fixed;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  height: 100vh;
  width: calc(100% - 45%);
  margin-left: 45%;
@media (min-device-width: 1000px) {
    width: calc(100% - 270px);
    margin-left: 270px;
  }
  overflow: auto;
`;
export const ImgLogo = styled.div`
  width: 245px;
  margin: auto;
  margin-top: 335px;
  left: 23px;
  top: 330px;
  img {
    height: 100%;
    width: 100%;
  }
`;

export default AppLayout;
