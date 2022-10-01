import React from "react";
import { ImWarning } from "react-icons/im";
import { FaCopy } from "react-icons/fa";
const Hero1 = () => {
  return (
    <>
      <div className="container hero1_container">
        <div className="row text-white">
          <div className="col-sm-12 d-flex warning_div">
            <div className="warn_icon">
              {" "}
              <ImWarning />{" "}
            </div>
            <p className="ml-5">
              {" "}
              <b>We've Evolved: </b>Support for V1 SafeMoon has been officially
              closed.As previously announced, all transfers of SafeMoon V1 will
              be subjected to a 100% tax to disincentivize any trading or
              purchasing of V1 SafeMoon. The ability to migrate from V1 to V2
              SafeMoon (SFM) will remain open for those who have yet to migrate.
              Please migrate to V2 (SFM) immediately to minimize any risk or
              potential loss. For migration questions you can visit our FAQ
              here.
            </p>
          </div>
          <div className="row mt-4 mb-5">
            <div className="col-lg-6">
              <p className="text-uppercase"> welcome to </p>
              <div className="text-uppercase typing-text">
              <h1>safemoon</h1>
              </div>
              <p className="">Community-driven Innovation for Good</p>

              <div>
                <a
                  className="btn btn-info btn-consolidatev2 text-white pulse-info btn-lg px-4 me-4"
                  href="https://swap.safemoon.com/#/swap?inputCurrency=0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3&outputCurrency=0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Consolidate to V2 SafeMoon!
                </a>
                <a
                  className="btn btn-link text-light btn-lg px-0 me-4 font-weight-bold buybtn text-decoration-none"
                  href="https://swap.safemoon.com/#/swap?outputCurrency=0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Buy V2
                </a>
                <a
                  href="https://swap.safemoon.com"
                  className="btn btn-link text-light btn-lg px-0 me-4 font-weight-bold buybtn text-decoration-none"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Swap
                </a>
                <a
                  href="https://dexscreener.com/bsc/0x856a1c95bef293de7367b908df2b63ba30fbdd59"
                  className="btn btn-link text-light btn-lg px-0 font-weight-bold buybtn text-decoration-none"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Live Chart
                </a>
                <p className="mb-5 mt-4 header-label">
                  SafeMoon (SFM) V2 Contract:
                </p>
                <span className="copy_link">0x42981d0bf...b9092fcB5 <FaCopy className="ms-1" /></span>
                
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <p className="mb-0 ">Out Now:</p>
              <h4 title="SafeMoon Wallet" >SafeMoon Wallet</h4>
              <p >Get it on:</p>
              <a
                className="btn border-0 p-0 me-2 mb-2 "
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=net.safemoon.androidwallet"
              >
                <img
                  className="img_store"
                  src="assets/google_play.png"
                  alt=" "
                />
              </a>
              <a
                className="btn border-0 p-0 me-2 "
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://apps.apple.com/us/app/safemoon/id1579735495"
              >
                <img className="img_store" src="assets/app_store.png" alt=" " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
