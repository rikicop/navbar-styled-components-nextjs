import { useState } from "react";
import Backdrop from "./Backdrop";
import Footer from "./Footer";
import Navbar from "./navbar";
import SideDrawer from "./SideDrawer";

export default function Layout({ children }) {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <Navbar click={() => setSideToggle(true)} show={sideToggle} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      {children}
      <Footer />
    </div>
  );
}
