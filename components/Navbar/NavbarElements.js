import styled from "styled-components";

export const NavbarElement = styled.nav`
  width: 100%;
  height: 30px;
  background-color: #0050d5;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 50;

  @media (max-width: 960) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled.a`
  color: #f4f4f4;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const NavUl = styled.ul`
  height: 80px;
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavLi = styled.li`
  height: 40px;
  padding-left: 1.5rem;
  /*
  Iría mejor en el span de abajo  
  &.active {
    border-bottom: 3px solid #16c5ff;
  } */
  @media (max-width: 960px) {
    display: none;
  }
`;

export const NavCartLink = styled.a`
  background: none;
  padding: 10px;
  border-radius: 50px;
  white-space: nowrap;
  text-decoration: none;
  color: #f4f4f4;
  font-size: 1.2rem;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #16c5ff;
    color: #f4f4f4;
  }
`;

export const HamburgerLines = styled.div`
  width: 100%;
  height: 3px;
  background: #f4f4f4;
`;

export const HamburgerMenu = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover > ${HamburgerLines} {
    background: rgb(0, 0, 0);
  }
  @media (max-width: 960px) {
    display: flex;
    visibility: ${({ show }) => (show ? "hidden" : "visible")};
  }
`;
