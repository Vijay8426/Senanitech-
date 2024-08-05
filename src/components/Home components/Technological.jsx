import React from 'react'
import { Link } from 'react-router-dom'
import Image4 from "../../images/technology-service.cfc49b58.webp"
function Technological() {
  return (
    <div>
                          <div
                    role="tabpanel"
                    id="servicesTab-tabpane-sgs"
                    aria-labelledby="servicesTab-tab-sgs"
                    className=" page_serviceTabPane__SvNni tab-pane"
                  >
                    <div className="row">
                      <div className="col-md-6 order-lg-1">
                        <img
                          alt="Technology Services"
                          data-aos="fade-left"
                          loading="lazy"
                          width="1100"
                          height="880"
                          decoding="async"
                          data-nimg="1"
                          className="page_serviceImage__97B3_ undefined"
                          style={{ color: 'transparent' }}
                          src={Image4}
                        />
                      </div>
                      <div className="col-lg-6">
                        <p>
                          SenaniTech’s technology services are tightly integrated with its prototyping validation services.
                          Through its integrated environment, SenaniTech’s customers will be able to realize a one-stop
                          solution for their engineering & manufacturing requirements.
                        </p>
                        <div className="buttonContainer">
                          <Link role="button" tabIndex="0" to="/technological-services" className="button btn btn-primary">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Technological