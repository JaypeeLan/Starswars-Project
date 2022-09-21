import React from "react";
import styled from "styled-components";
import Logo from "../Images/Logo.png";
import { GridSmall, NavItemIcon } from "../Images/SvgIcons";
import NavLink from "./NavLink";

const navItems = [
  { name: "Starships", fill: "#A9C1FF", path: "/starships", sub: "starships" },
  { name: "People", fill: "#FFA9EC", path: "/people", sub: "people" },
  { name: "Species", fill: "#FDFFA9", path: "/species", sub: "species" },
];

const SidebarItem = () => {

  return (
    <div className="px-3 h-100 position-relative">
      <Img>
        <img src={Logo} alt="logo" />
      </Img>
      <div>
        <Action>
          <NavLink
            sub="films"
            to={"/"}
            icon={() => <GridSmall />}
            text={"OverView"}
          />
        </Action>
        <Nav className="mt-5">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              sub={item.sub}
              icon={() => (
                <NavItemIcon fill={item.fill} width="17px" height="16px" />
              )}
              text={item.name}
              to={item.path}
            />
          ))}
        </Nav>
      </div>
     
    </div>
  );
};

const Img = styled.div`
  width: 130px;
  margin-inline: auto;
  margin-top: 35px;
  img {
    width: 100%;
  }
`;

const Action = styled.div`
  margin-top: 50px;
`;

const Nav = styled.div`
  color: #fff;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
`;

export default SidebarItem;
