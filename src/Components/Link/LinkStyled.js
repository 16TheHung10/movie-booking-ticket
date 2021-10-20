import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyledHeader = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.5s;
  background: linear-gradient(to right, #ccc 50%, #fbbd61 50%, #ec7532);
  font-weight: 600;
  // transform: translateX(50%);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    transform: scale(1.2);
    background-position: -100%;
  }
`;
export const LinkTime = styled(Link)`
  color: black;
  background: white;
  padding: 10px 20px;
  margin: 10px 10px;
  transition: all 0.5s;
  border-radius: 10px;
  &:hover {
    color: black;
    transform: scale(1.2);
  }
`;
