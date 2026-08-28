import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const onScroll = useCallback(() => {
    const curScrollY = window.scrollY;

    if (curScrollY > prevScrollY + 20) {
      setShow(false);
    } else if (curScrollY < prevScrollY) {
      setShow(true);
    }

    setPrevScrollY(curScrollY);
  }, [prevScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="navbar-component">
      <div className={show ? "active navbar-wrapper" : "hidden navbar-wrapper"}>
        <div className="navbar-image">
          <div className="navtext">
            {" "}
            <Link smooth to="home-component">
            </Link>
          </div>
        </div>

        <ol className="navbar-items">
          <div className="navtext">
            {" "}
            <Link smooth to="about-component">
              <p>About</p>
            </Link>
          </div>
          <div className="navtext">
            {" "}
            <Link smooth to="experience-component">
              <p>Experience</p>
            </Link>
          </div>
          <div className="navtext">
            {" "}
            <Link smooth to="projects-component">
              <p>Projects</p>
            </Link>{" "}
          </div>
        </ol>
      </div>
    </div>
  );
};
