import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function NavLink({ to, icon, text, sub }) {
  const location = useLocation();
  const match =
    location.pathname === to || location.pathname.split("/").includes(sub);
  return (
    <MyLink
      {...{ $isActive: match }}
      to={to}
      className="d-flex align-items-center text-decoration-none"
    >
      <span className="me-3">{icon()}</span>
      <ItemName>{text}</ItemName>
    </MyLink>
  );
}
const ItemName = styled.span`
  color: #fff;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
`;
const MyLink = styled(Link)`
  height: 48px;
  width: 100%;
  border-radius: 4px;
  padding: 0 28px;
  margin-bottom: 10px;
  background-color: ${({ $isActive }) =>
    $isActive === true ? "#0A74DC" : "none"};
`;
export default NavLink;
