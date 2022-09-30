import React from "react";
import {
  FaUsers,
  FaWater,
  FaHandHoldingUsd,
  FaArrowRight,
  FaCat,
} from "react-icons/fa";
const Hero2 = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white pt-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-12">
              <button className=" mt-4 mb-2 intro_btn">About Us</button>
              <h4 class="title-heading">
                A human-focused technology and innovation business expanding
                blockchain technologies for a brighter tomorrow.
              </h4>
              <br />
              <p class="mb-0">
                Deeply connected to and driven by our award winning community
                (The SafeMoon Army), we are innovating for good. Building
                blockchain, commerce, metaverse and NFT products to derive new
                kinds of value from crypto technology and to apply it to
                increasingly better use. <br /> <br />
                We are now addressing the second part of our mission – the
                expansion and channeling of our technology to propel new
                innovations for good, and a Venture Philanthropy model to
                advance those innovations to every part of the world.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <div className="image-container mt-4 mb-4">
                <img
                  className="img-fluid image-space"
                  alt="spaceman stars"
                  src="assets/world.jpg"
                  width="380"
                  height="380"
                />
              </div>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 col-12">
              <button className="   intro_btn">The Token</button>
              <h4 className="title-heading">
                The SafeMoon Protocol V2 is a community focused DeFi token that
                forms part of the expanding SafeMoon ecosystem.
              </h4>
              <br />
              <p className="mb-5">
                Four simple functions occur during each trade
              </p>
              <div className="d-flex flex-column">
                <div
                  className="mb-3 aos-init aos-animate font-weight-bold d-flex "
                  data-aos="fade-in"
                >
                  <div>
                    <FaCat size={50} className="cat" />
                  </div>
                  <p>
                    &nbsp; Reflections
                    <br /> &nbsp;
                    <small className="text-muted mb-0">
                      4% is Redistributed to all existing holders
                    </small>
                  </p>
                </div>

                <div
                  className="mb-3 aos-init aos-animate font-weight-bold d-flex "
                  data-aos="fade-in"
                >
                  <div>
                    <FaCat size={50} className="cat"/>
                  </div>
                  <p>
                    &nbsp; LP Acquisition
                    <br /> &nbsp;
                    <small className="text-muted mb-0">
                      3% is added to liquidity
                    </small>
                  </p>
                </div>

                <div
                  className="mb-3 aos-init aos-animate font-weight-bold d-flex "
                  data-aos="fade-in"
                >
                  <div>
                    <FaCat size={50} className="cat"/>
                  </div>
                  <p>
                    &nbsp; Growth Fund
                    <br /> &nbsp;
                    <small className="text-muted mb-0">
                      1% is added to the SafeMoon Ecosystem Growth Fund
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="image-container mt-4 mb-4">
                <img
                  className="img-fluid image-space"
                  alt="spaceman stars"
                  src="assets/spaceman.png"
                  width="420"
                  height="380"
                />
              </div>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-xl-4 col-12">
              <div
                className="d-flex align-items-center mb-3 mb-lg-0 aos-init aos-animate"
                data-aos="fade-in"
              >
                <div className="me-5">
                  <div className="about-icon shadow-sm">
                    <FaUsers />
                  </div>
                </div>
                <div className="">
                  <h4 className="fw-bold" title="Community Focused">
                    Community Focused
                  </h4>
                  <p>
                    Community Focused and fair launch. The dev team burned all
                    of their tokens and participated with everyone else.
                  </p>
                  <a
                    href="https://discord.gg/safemoon"
                    className="fw-b text-highlight text-decoration-none"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Join Us <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12">
              <div
                className="d-flex align-items-center mb-3 mb-lg-0 aos-init aos-animate"
                data-aos="fade-in"
              >
                <div className="me-5">
                  <div className="about-icon shadow-sm">
                    <FaWater />
                  </div>
                </div>
                <div className="">
                  <h4 className="fw-bold" title="Automatic LP">
                    Automatic LP
                  </h4>
                  <p>
                    Every trade contributes towards auto-generating liquidity
                    that goes into multiple pools used by exchanges
                  </p>
                  <a
                    href="https://bscscan.com/token/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5"
                    className="fw-b text-highlight text-decoration-none"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    View BscScan <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-12">
              <div
                className="d-flex align-items-center mb-3 mb-lg-0 aos-init aos-animate"
                data-aos="fade-in"
              >
                <div className="me-5">
                  <div className="about-icon shadow-sm">
                    <FaHandHoldingUsd />
                  </div>
                </div>
                <div className="">
                  <h4 className="fw-bold" title="RFI Static Rewards">
                    RFI Static Rewards
                  </h4>
                  <p>
                    Holders earn passive rewards through static reflection as
                    they watch their balance of SafeMoon grow indefinitely.
                  </p>
                  <a
                    className="fw-b text-highlight text-decoration-none"
                    href="/wallet"
                  >
                    Check your Wallet <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
