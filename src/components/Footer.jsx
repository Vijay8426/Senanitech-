import React from 'react'
import logo from '../images/SENANI-removebg-preview (1).png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
                  <section id="footer" className="footer_footer__avDgs">
        <div className="container">
          <div className="row">
            <Link className="footer_footerBrand__N5EKR col-lg-4"
            to='/'>
              <img
                alt="SenaniTech Logo"
                fetchpriority="high"
                width="200"
                height="45"
                decoding="async"
                data-nimg="1"
                className="undefined"
                style={{ color: 'transparent' }}
                src={logo}
              />
            </Link>
            <div className="col-lg-8">
              <div className="row">
                <div className="footer_footerCatagory__X2uYx col-lg-4 col-md-3 col-sm-6">
                  <h6>Services</h6>
                  <Link title="Semiconductor service" to="/semiconductor">Semiconductor services</Link>
                  <Link title="Systems solution" to="/system-soln">Systems solutions</Link>
                  <Link title="Technology services" to="/technological-services">Technology services</Link>
                </div>
                <div className="footer_footerCatagory__X2uYx col-lg-3 col-md-3 col-sm-6">
                  <h6>Quick links</h6>
                  <Link title="About us" to="/about-us">About us</Link>
                  <Link title="Contact us" to="/contact">Contact us</Link>
                </div>
                <div className="footer_footerCatagory__X2uYx col-lg-2 col-md-3 col-sm-6">
                  <h6>Social</h6>
                  <Link title="info@pactroninc.com" href="mailto:info@pactroninc.com">
                    <img
                      alt="mail"
                      loading="lazy"
                      width="16"
                      height="13"
                      decoding="async"
                      data-nimg="1"
                      className="footer_socialIcon__wDkOR"
                      style={{ color: 'transparent' }}
                      srcSet="images/mail.36f64b8e_1.svg 1x, images/mail.36f64b8e.svg 2x"
                      src="images/mail.36f64b8e.svg"
                    />
                    Mail
                  </Link>
                  <Link target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://in.linkedin.com/company/pactron">
                    <img
                      alt="LinkedIn"
                      loading="lazy"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="footer_socialIcon__wDkOR"
                      style={{ color: 'transparent' }}
                      srcSet="images/linkedin.607bb09a_1.svg 1x, images/linkedin.607bb09a.svg 2x"
                      src="images/linkedin.607bb09a.svg"
                    />
                    LinkedIn
                  </Link>
                </div>
                <div className="footer_footerCatagory__X2uYx col-lg-3 col-md-3 col-sm-6">
                  <h6>Address</h6>
                  <p>Vattamalaipalayam N.G.G.O colony, Coimbatore district, Tamilnadu - 641022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer_footerBottom__E_4ya">
        <div className="row">
          <div className="col-lg-12">
            <span>
              Copyright © 2024 SenaniTech Inc. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer