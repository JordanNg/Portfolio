import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

function Navigation() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setSticky(true);
      } else setSticky(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <Navbar
        className={`navigation ${
          isSticky ? "navigation__stick" : "navigation__noStick"
        }`}
        id="navigation__container"
      >
        <Nav.Link href="#home" className="navigation__links">
          Home
        </Nav.Link>
        <Nav.Link href="#aboutme" className="navigation__links">
          About Me
        </Nav.Link>
        <Nav.Link href="#education" className="navigation__links">
          Education & Experience
        </Nav.Link>
        <Nav.Link href="#contact" className="navigation__links">
          Contact Me
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Navigation;
