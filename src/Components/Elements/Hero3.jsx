import React from 'react'
const Hero3 = () => {
  return (
    <div>
       <div className="app bg-dark">
        <div className="container">
          <div className="row align-items-center text-white">
            <div className="col-xl-6 col-lg-4 col-md-8 col-12">
              <button className=" mt-4 mb-2 intro_btn">Introducing</button>
              <h4 title="The SafeMoon Exchange" className="title-heading">
                The SafeMoon Exchange
              </h4>
              <p className="mb-5">
                The SafeMoon exchange is a revolutionary new idea that will
                bring tokenomics to all of crypto on its platform. We call this
                Cryptonomics.
              </p>
              <a
                href="/"
                className="btn btn-outline-light px-5 btn-lg rounded-pill disabled"
              >
                Coming Soon
              </a>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-8 col-12 d-none d-md-block " data-aos="fade-left">
              <div>
                <img className="img-fluid" src="assets/mobile.png" alt="mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3
