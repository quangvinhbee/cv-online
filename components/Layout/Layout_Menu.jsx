import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "next/link";

export default function Layout_Menu(props) {
  const [active, setactive] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= screen.height / 1.2) {
      setactive(true);
    } else {
      setactive(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }
  return (
    <>
      <AppBar
        position="fixed"
        className="appbar z-50"
        className={active ? "nav-menu-active" : "nav-menu-no-color"}
      >
        <Toolbar className={active ? "nav-menu-active" : "nav-menu-no-color"}>
          <div className="nav-menu flex justify-center">
            <img src="images/LogoVinhBee.png" className="img img-logo" />
            <ul>
              <li></li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      <ul className="iconSocial">
        <li>
          <Link href="https://www.facebook.com/quangvinhbee/">
            <i class="fa fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/quangvinhbee">
            <i class="fa fa-github"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/lam-quang-vinh-666a18120/">
            <i class="fa fa-linkedin"></i>
          </Link>
        </li>
      </ul>
    </>
  );
}
