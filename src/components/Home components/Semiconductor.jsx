import React from 'react'
import { Link } from 'react-router-dom';
import Image2 from "../../images/semiconductor.cdfd8f79.webp";
function Semiconductor() {
  return (
    <div>
                          <div
                    role="tabpanel"
                    id="servicesTab-tabpane-scs"
                    aria-labelledby="servicesTab-tab-scs"
                    className="fade page_serviceTabPane__SvNni tab-pane active show"
                  >
                    <div className="row">
                      <div className="col-md-6 order-lg-1">
                        <img
                          alt="Semiconductor services"
                          data-aos="fade-left"
                          loading="lazy"
                          width="693"
                          height="561"
                          decoding="async"
                          data-nimg="1"
                          className="page_serviceImage__97B3_ undefined"
                          style={{ color: 'transparent' }}
                          src={Image2}
                        />
                      </div>
                      <div className="col-lg-6">
                        <p>
                          By leveraging our semiconductor services, companies can access specialized expertise,
                          state-of-the-art manufacturing capabilities, and comprehensive support to accelerate product
                          development, improve quality, reduce costs, and bring innovative semiconductor solutions to
                          market more efficiently.
                        </p>
                        <div className="buttonContainer">
                          <Link role="button" tabIndex="0" to='/semiconductor' className="button btn btn-primary">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Semiconductor