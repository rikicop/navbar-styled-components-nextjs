import Link from "next/link";
import {
  NavbarElement,
  NavLogo,
  NavLi,
  NavUl,
  NavCartLink,
  HamburgerLines,
  HamburgerMenu,
} from "./NavbarElements";

const Navbar = ({ click, show }) => {
  return (
    <NavbarElement>
      <Link href="/" passHref>
        <NavLogo>TECNEMAS</NavLogo>
      </Link>
      <NavUl>
        <NavLi>
          <Link href="/" passHref>
            <NavCartLink>Home</NavCartLink>
          </Link>
        </NavLi>
        <NavLi>
          <Link href="/about" passHref>
            <NavCartLink>About</NavCartLink>
          </Link>
        </NavLi>
        <NavLi>
          <Link href="/blog" passHref>
            <NavCartLink>Blog</NavCartLink>
          </Link>
        </NavLi>
      </NavUl>
      <HamburgerMenu show={show} onClick={click}>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
      </HamburgerMenu>
    </NavbarElement>
  );
};

export default Navbar;
