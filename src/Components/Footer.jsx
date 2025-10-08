import React from "react";
import logo from "/logo.png";
import Container from "../Pages/Container";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-10">
      <Container>
        <div className="footer sm:footer-horizontal">
          {/* 🟣 Logo Section */}
          <aside>
            <div className="flex items-center cursor-pointer mb-3">
              <img className="w-12 h-12" src={logo} alt="Logo" />
              <span className="uppercase font-bold text-xl ml-2 bg-gradient-to-l from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                Hero.Io
              </span>
            </div>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>

          {/* 🟢 Services */}
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>

          {/* 🟠 Company */}
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>

          {/* 🔵 Legal */}
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
