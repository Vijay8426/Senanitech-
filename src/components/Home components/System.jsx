import React from 'react'
import { Link } from 'react-router-dom'
import Image5 from "../../images/systemsolutions.webp"
function System() {
  return (
    <div>
                          <div
                    role="tabpanel"
                    id="servicesTab-tabpane-sls"
                    aria-labelledby="servicesTab-tab-sls"
                    className=" page_serviceTabPane__SvNni tab-pane"
                  >
                    <div className="row">
                      <div className="col-md-6 order-lg-1">
                        <img
                          alt="System Solutions"
                    
                          loading="lazy"
                          width="670"
                          height="400"
                          decoding="async"
                          data-nimg="1"
                          className="page_serviceImage__97B3_ undefined"
                          

                          src={Image5}
                        />
                      </div>
                      <div className="col-lg-6">
                        <p>
                          SenaniTech collaborates closely with its clients to provide comprehensive coverage of the entire
                          product development lifecycle. By merging cutting-edge technology, engineering excellence,
                          structured processes, and extensive domain knowledge, SenaniTech is committed to delivering
                          innovative and transformative products.
                        </p>
                        <div className="buttonContainer">
                          <Link role="button" tabIndex="0" to='/' className="button btn btn-primary">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

    </div>
  )
}

export default System