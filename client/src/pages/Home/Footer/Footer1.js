import React from "react";
import "./Footer.css";
// import logo from "../../assets/logo.svg";
import styled from "styled-components";
import {
  FaEnvelope,
  FaArrowRight,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Footer1 = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <Logo>
              {/* <img src={logo} alt="Rangawardhan" /> */}
              <h1 className="text-upper header-title animate-charcter ">रंगवर्धन</h1>
            </Logo>{" "}
          </div>
          <div className="col">
            <h3>
              Office{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>VJTI college</p>
            <p>Matunga,Mumbai-400019,Maharashtra,India</p>
            <p className="email-id">rangawardhanfest@gmail.com</p>
            
          </div>
          <div className="col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              
            </ul>
          </div>
          <div className="col">
            <h3>
            रंगवर्धन
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form className="newsletter">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Enter your email id"
                name=""
                required
              ></input>
              <button type="submit" name="">
                <div className="arrow">
                  <FaArrowRight />
                </div>
              </button>
            </form>
            <div className="social-icons">
              <a href="https://twitter.com/Rangawardhan/" target="blank">
                <div className="social-icon">
                  {" "}
                  <FaTwitter />
                </div>
              </a>
              <a href="https://www.instagram.com/rangawardhan/" target="blank">
                <div className="social-icon">
                  <FaInstagram />
                </div>{" "}
              </a>
              <a href="https://www.youtube.com/c/Rangawardhan/featured" target="blank">
                <div className="social-icon">
                  <FaYoutube />
                </div>
              </a>

              <a href="https://www.facebook.com/Rangawardhan" target="blank">
                <div className="social-icon">
                  {" "}
                  <FaFacebook />
                </div>
              </a>

              <a href="https://www.linkedin.com/school/rangawardhan/about/" target="blank">
                <div className="social-icon">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Rangawardhan,Copyright &#169; 2022</p>
      </footer>
    </div>
  );
};

export default Footer1;