import React from "react";
import { Wave } from "react-animated-text";
import { Link } from "react-scroll";
import TravisCI from "../../pages/images/TravisCI-Mascot-2.png";
import "./style.css";

const style = {

  removeUnderline: {
    textDecoration: "none",
  },
};

function NavBar() {
  return (
    <header className="row py-3">

      <div className="col-sm-12 col-md-6">
        <a className="d-flex justify-content-center" href="https://travis-ci.com/github/lfernandez79/reactPortfolio" style={style.removeUnderline}>
          <img id="radius" src={TravisCI} style={{ width: "7%" }} alt="TravisCI" />
          <span>
            &nbsp; Travis CI
          </span>
        </a>
      </div>

      <nav className="col-sm-12 col-md-6">
        <ul className="nav d-flex justify-content-around align-items-center">
          <li className="nav-item">
            <Link to="About" duration={500} smooth className="nav-link" href="/"><Wave text="A b o u t" effect="stretch" effectChange={2.0} /></Link>
          </li>
          <li className="nav-item">
            <Link to="Projtcs" duration={500} smooth className="nav-link" href="/"><Wave text="P o r t f o l i o" effect="stretch" effectChange={2.0} /></Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" duration={500} smooth className="nav-link" href="/"><Wave text="C o n t a c t" effect="stretch" effectChange={2.0} /></Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default NavBar;
