import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaRedditSquare,
  FaMoon,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer pt-5 pb-4">
      <div className="container text-left ">
        <div className="row">
          <div className="col-md-2">
            <img
              className="logo_image"
              src="safeMoon.png"
              alt="Logo"
              width="100"
              height="100"
            />
          </div>
          <div className="col-md-6">
            <h4 title="SafeMoon - Innovating for Good">
              SafeMoon - Innovating for Good
            </h4>
            <p>
              Building blockchain, commerce, metaverse and NFT products to
              derive new kinds of value from crypto technology and to apply it
              to increasingly better use. Advancing our innovations to every
              part of the world.
            </p>
            <p className="mb-1">
              <a
                className="text-info text-white"
                href="https://discord.gg/safemoon"
              >
                <FaDiscord />
              </a>
              <a
                className="text-info text-white"
                href="https://facebook.com/safemoonofficial"
              >
                <FaFacebookSquare />
              </a>
              <a
                className="text-info text-white"
                href="https://twitter.com/safemoon"
              >
                <FaTwitterSquare />
              </a>
              <a
                className="text-info text-white"
                href="https://www.instagram.com/safemoonhq/"
              >
                <FaInstagram />
              </a>
              <a
                className="text-info text-white"
                href="https://www.linkedin.com/company/safemoon/"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-info text-white"
                href="http://youtube.com/safemoonhq"
              >
                <FaYoutube />
              </a>
              <a
                className="text-info text-white"
                href="https://www.reddit.com/r/SafeMoon/"
              >
                <FaRedditSquare />
              </a>
            </p>
          </div>
          <div className=" col-sm-6 col-md-2 ">
            <ul className="list-unstyled">
              <li className="pb-2">
                <a href="/wallet" className="text-white text-decoration-none">
                  Wallet Tracker
                </a>
              </li>
              <li className="pb-2">
                <a href="/branding" className="text-white text-decoration-none">
                  Branding
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="whitepaper.pdf"
                  className="text-white text-decoration-none"
                  target="_blank"
                >
                  White Paper
                </a>
              </li>
              <li className="pb-2">
                <a
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="text-white text-decoration-none"
                  href="https://bscscan.com/address/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5"
                >
                  Contract
                </a>
              </li>
              <li className="pb-2">
                <a href="/status" className="text-white text-decoration-none">
                  Status
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="/cardwaitlist"
                  className="text-white text-decoration-none"
                >
                  SafeMoon Card
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-2">
            <ul className="list-unstyled">
              <li className="pb-2">
                <a href="/support" className="text-white text-decoration-none">
                  Support
                </a>
              </li>
              <li className="pb-2 ">
                <a href="/apply" className="text-white text-decoration-none">
                  List a Token
                </a>
              </li>
              <li className="pb-2 ">
                <a href="/careers" className="text-white text-decoration-none">
                  Careers
                </a>
              </li>
              <li className="pb-2 ">
                <a
                  target="_blank"
                  rel="nofollow noopener"
                  href="/#"
                  className="text-white text-decoration-none"
                >
                  Education <i className="fal fa-external-link-alt" />
                </a>
              </li>
              <li className="pb-2 ">
                <a
                  href="/wallpaper"
                  className="text-white text-decoration-none"
                >
                  Wallpaper
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-dark py-2">
        <div className="container">
          <div className="align-items-center text-center row ">
            <div className="col">
              <p>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/legal/terms"
                >
                  Terms of Use
                </a>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/legal/privacy"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/legal/privacy"
                >
                  Cookies Policy
                </a>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/legal/wallet/eula"
                >
                  Wallet EULA
                </a>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/legal/wallet/privacy"
                >
                  Wallet Privacy
                </a>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/legal/disclaimer"
                >
                  Disclaimer
                </a>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/faq"
                >
                  FAQ
                </a>
                <a
                  className="text-info btn btn-link py-0 text-decoration-none text-white"
                  href="/partners"
                >
                  Our Partners
                </a>
              </p>
              <p className="mb-0 text-white">
                Copyright © {/* */}2022{/* */} SafeMoon US LLC | All Rights
                Reserved.
                <a href="/" id="themeToggle" className="ms-2 text-white">
                  <FaMoon />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
