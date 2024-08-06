import React, { useState, useEffect, useRef } from 'react';
import Image1 from "../images/hp-banner-mobile.0b0478c0.webp";
import Video from "../media/hp-banner-video.mp4";
import Semiconductor from './Home components/Semiconductor';
import System from './Home components/System';
import Technological from './Home components/Technological';
import { Link } from 'react-router-dom';
import Service1 from "../images/semiconductor-icon.7582ccda.webp";
import Service2 from "../images/ml-ai.46ad2e99.webp";
import Service3 from "../images/data-centre.08db1a37.webp";
import Service4 from "../images/storage.66fc36dd.webp";
import Service5 from "../images/networking.c451564d.webp";
import Service6 from "../images/healthcare.2df72324.webp";
import Service7 from "../images/automotive.8a2e50c7.webp";
import logo from '../images/SENANI-removebg-preview (1).png';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [semi, setsemi] = useState(true);
  const [system, setsystem] = useState(false);
  const [technology, settechnology] = useState(false);
  const semiac = useRef(null);
  const sysac = useRef(null);
  const techac = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const getsemi = () => {
    setsemi(true);
    setsystem(false);
    settechnology(false);
    semiac.current.classList.add('active');
    sysac.current.classList.remove('active');
    techac.current.classList.remove('active');
  };

  const getsys = () => {
    setsemi(false);
    setsystem(true);
    settechnology(false);
    semiac.current.classList.remove('active');
    sysac.current.classList.add('active');
    techac.current.classList.remove('active');
  };

  const gettech = () => {
    setsemi(false);
    setsystem(false);
    settechnology(true);
    semiac.current.classList.remove('active');
    sysac.current.classList.remove('active');
    techac.current.classList.add('active');
  };

  return (
    <div>
      <main>
        <section className="banner bannerWithContent page_homeBanner___C8lq" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="vstack">
                  <h1><span>Let’s Design the</span> Future Together</h1>
                  <p>
                    Solving complex engineering challenges across the full Semiconductor and Technology spectrum,
                    leveraging best-in-class design and integrated manufacturing.
                  </p>
                  <div className="buttonContainer">
                    <Link role="button" tabIndex="0" href="#servicesSection" className="button btn btn-primary">
                      Learn more <span className="d-none">Semiconductor Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="SenaniTech banner"
            fetchPriority="high"
            width="415"
            height="604"
            decoding="async"
            data-nimg="1"
            className="page_bannerImage__MeuLX"
            style={{ color: 'transparent' }}
            src={Image1}
          />
          <video
            className="page_bannerVideo__Q_vff"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="page_numberedSection__Ec5Z3 page_valuesSection__wF0_q" data-aos="fade-left">
          <div className="containerSm container">
            <div className="page_values__PFg8x">
              <div className="row">
                <div className="col">
                  <h3><span></span>+</h3>
                  <p>years in the semiconductor business</p>
                </div>
                <div className="col">
                  <h3><span></span>+</h3>
                  <p>Growing team of industry experts</p>
                </div>
                <div className="col">
                  <h3><span></span>+</h3>
                  <p>Designs created every year</p>
                </div>
                <div className="col">
                  <h3><span></span>+</h3>
                  <p>Products Manufactured so far</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page_servicesSection__0UHoG" id="servicesSection" data-aos="fade-right">
          <div className="container">
            <h2>Our services</h2>
            <div className="page_tabHeader__7v13_ row">
              <div className="col-xl-6 col-lg-7 col-md-12">
                <div className="nav nav-pills nav-fill" role="tablist">
                  <div className="nav-item">
                    <Link
                      role="tab"
                      data-rr-ui-event-key="scs"
                      id="servicesTab-tab-scs"
                      aria-controls="servicesTab-tabpane-scs"
                      aria-selected="true"
                      className="nav-link active"
                      tabIndex="0"
                      ref={semiac}
                      onClick={getsemi}
                    >
                      Semiconductor services
                    </Link>
                  </div>
                  <div className="nav-item">
                    <Link
                      role="tab"
                      data-rr-ui-event-key="sls"
                      id="servicesTab-tab-sls"
                      aria-controls="servicesTab-tabpane-sls"
                      aria-selected="false"
                      tabIndex="-1"
                      className="nav-link"
                      onClick={getsys}
                      ref={sysac}
                    >
                      System solutions
                    </Link>
                  </div>
                  <div className="nav-item">
                    <Link
                      role="tab"
                      data-rr-ui-event-key="sgs"
                      id="servicesTab-tab-sgs"
                      aria-controls="servicesTab-tabpane-sgs"
                      aria-selected="false"
                      tabIndex="-1"
                      className="nav-link"
                      onClick={gettech}
                      ref={techac}
                    >
                      Technology services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content">
              {semi && <Semiconductor />}
              {system && <System />}
              {technology && <Technological />}
            </div>
          </div>
        </section>

        <div className="container pb-5">
          <h4>Domains we transform</h4>
          <div className="row justify-content-center">
            <div className="col-6 col-lg-3 text-center border p-4" data-aos="fade-up">
              <div>
                <img src={Service1} className="img-fluid mx-auto" alt="Trackers"/>
                <p className="pt-3 font-weight-medium text-secondary">
                  Semiconductor
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 text-center border p-4" data-aos="fade-up" data-aos-delay="100">
              <div>
                <img src={Service2} className="img-fluid mx-auto" alt="Cameras"/>
                <p className="pt-3 font-weight-medium text-secondary">
                  AI &amp; ML
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 text-center border p-4" data-aos="fade-up" data-aos-delay="200">
              <div>
                <img src={Service3} className="img-fluid mx-auto" alt="Wearables &amp; Hearables"/>
                <p className="pt-3 font-weight-medium text-secondary">
                  Data center
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 text-center border p-4" data-aos="fade-up" data-aos-delay="300">
              <div>
                <img src={Service4} className="img-fluid mx-auto" alt="Wi-Fi Products"/>
                <p className="pt-3 font-weight-medium text-secondary">
                  Storage
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 text-center border p-4" data-aos="fade-up" data-aos-delay="400">
              <div>
                <img src={Service5} className="img-fluid mx-auto" alt="Smart Home Appliances"/>
                <p className="pt-3 font-weight-medium text-secondary">
                  Networking
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 text-center border p-4" data-aos="fade-up" data-aos-delay="500">
              <div>
                <img src={Service6} className="img-fluid mx-auto" alt="IT Hardware"/>
                <p className="pt-3 font-weight-medium text-secondary">
                  Healthcare
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 text-center border p-4" data-aos="fade-up" data-aos-delay="600">
              <div>
                <img src={Service7} className="img-fluid mx-auto" alt="Smart Medical Products"/>
                <p className="pt-3 font-weight-medium text-secondary">
                  Automotive
                </p>
              </div>
            </div>
          </div>
        </div>



        <section className="getInTouch_getInTochSection__5D0lg" data-aos="slide-up">
          <Link to='/contact'>
            <div className="d-flex container">
              <span className="getInTouch_gitButton__mmEDS" data-aos="fade-left" data-aos-offset="100">
                <span>Get in touch with us</span>
                <img alt="Get in Touch" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images/arrow-right.236eb624.svg"/>
              </span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
