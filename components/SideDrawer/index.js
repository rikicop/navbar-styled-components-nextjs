//import { useEffect } from "react";
import Link from "next/link";
import { SideDContainer, SideDUl, SideLi } from "./SideDElements";

const SideDrawer = ({ show, click }) => {
  return (
    <SideDContainer show={show}>
      <SideDUl onClick={click}>
        <SideLi>
          <Link href="/" passHref>
            Home
          </Link>
        </SideLi>
        <SideLi>
          <Link href="/about" passHref>
            About
          </Link>
        </SideLi>
        <SideLi>
          <Link href="/blog" passHref>
            Blog
          </Link>
        </SideLi>
      </SideDUl>
    </SideDContainer>
  );
};

export default SideDrawer;
