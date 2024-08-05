import React from 'react'
import { useState,useRef,useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';


function Semiconductor() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
   const [Ate,setAte]=useState(true);
   const [reliability,setreliablity]=useState(false);
   const [Ic,setIc]=useState(false);
   const [Ref,setRef]=useState(false);
   const [Turnkey,setTurnkey]=useState(false);
   const ate=useRef(null);
   const reli=useRef(null);
   const ic=useRef(null);
   const refer=useRef(null);
   const turn=useRef(null);
   const getAte=()=>{
      setAte(true);
      setreliablity(false);
      setIc(false);
      setRef(false);
      setTurnkey(false);
      ate.current.classList.add('active');
      reli.current.classList.remove('active');
      ic.current.classList.remove('active');
      refer.current.classList.remove('active');
      turn.current.classList.remove('active');
   }
   const getreli=()=>{
      setAte(false);
      setreliablity(true);
      setIc(false);
      setRef(false);
      setTurnkey(false);
      ate.current.classList.remove('active');
      reli.current.classList.add('active');
      ic.current.classList.remove('active');
      refer.current.classList.remove('active');
      turn.current.classList.remove('active');
   }
   const getIc=()=>{
      setAte(false);
      setreliablity(false);
      setIc(true);
      setRef(false);
      setTurnkey(false);
      ate.current.classList.remove('active');
      reli.current.classList.remove('active');
      ic.current.classList.add('active');
      refer.current.classList.remove('active');
      turn.current.classList.remove('active');
   }
   const getRef=()=>{
      setAte(false);
      setreliablity(false);
      setIc(false);
      setRef(true);
      setTurnkey(false);
      ate.current.classList.remove('active');
      reli.current.classList.remove('active');
      ic.current.classList.remove('active');
      refer.current.classList.add('active');
      turn.current.classList.remove('active');
   }
   const getTurn=()=>{
      setAte(false);
      setreliablity(false);
      setIc(false);
      setRef(false);
      setTurnkey(true);
      ate.current.classList.remove('active');
      reli.current.classList.remove('active');
      ic.current.classList.remove('active');
      refer.current.classList.remove('active');
      turn.current.classList.add('active');
   }
  return (
    <div>
              <main>
         <section className="banner bannerWithContent semi_servicesBanner__uPN_c">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="vstack">
                        <h1 data-aos="fade-up">Semiconductor Services</h1>
                        <p data-aos="fade-up" data-aos-delay="200">Utilizing our semiconductor services enables our customers to tap into specialized expertise, cutting-edge manufacturing capabilities, and comprehensive support. This accelerates product development, enhances quality, minimizes costs, and streamlines the process of bringing innovative semiconductor solutions to market.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="serviceCoreSection">
            <div className="container">
               <div className="row">
                  <div className="leftTabBar col-xl-3 col-lg-4 col-md-5">
                     <div className="flex-column nav nav-pills" role="tablist">
                        <div className="nav-item" data-aos="fade-right" data-aos-delay="0"><Link role="tab" data-rr-ui-event-key="first" id="left-tabs-example-tab-first" aria-controls="left-tabs-example-tabpane-first" aria-selected="true" className="nav-link active" tabindex="0" onClick={getAte} ref={ate}>ATE Services</Link></div>
                        <div className="nav-item" data-aos="fade-right" data-aos-delay="100"><Link role="tab" data-rr-ui-event-key="second" id="left-tabs-example-tab-second" aria-controls="left-tabs-example-tabpane-second" aria-selected="false" tabindex="-1" className="nav-link"  onClick={getreli}
                        ref={reli}>Reliability and Burn-in-Engineering</Link></div>
                        <div className="nav-item" data-aos="fade-right" data-aos-delay="200"><Link role="tab" data-rr-ui-event-key="third" id="left-tabs-example-tab-third" aria-controls="left-tabs-example-tabpane-third" aria-selected="false" tabindex="-1" className="nav-link"  onClick={getIc}
                        ref={ic}>IC Characterization Board</Link></div>
                        <div className="nav-item" data-aos="fade-right" data-aos-delay="300"><Link role="tab" data-rr-ui-event-key="fourth" id="left-tabs-example-tab-fourth" aria-controls="left-tabs-example-tabpane-fourth" aria-selected="false" tabindex="-1" className="nav-link"  onClick={getRef}
                        ref={refer}>Reference Design &amp; Development</Link></div>
                        <div className="nav-item" data-aos="fade-right" data-aos-delay="400"><Link role="tab" data-rr-ui-event-key="fifth" id="left-tabs-example-tab-fifth" aria-controls="left-tabs-example-tabpane-fifth" aria-selected="false" tabindex="-1" className="nav-link"  onClick={getTurn}
                        ref={turn}>Turnkey Build &amp; Kit Development</Link></div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-8 col-md-7">
                     <div className="rightTabBar tab-content">
                       {Ate&& <div role="tabpanel" id="left-tabs-example-tabpane-first" aria-labelledby="left-tabs-example-tab-first" className="  active show">
                           <div className="row">
                              <div className="col-xl-4"><img data-aos="fade-up" data-aos-delay="300" alt="ATI solutions" fetchpriority="high" width="400" height="400" decoding="async" data-nimg="1" style={{color:'transparent'}} src="images-semi/ati-banner.28fd1411.webp"/></div>
                              <div className="col-xl-8">
                                 <div className="servInnerBannerContent">
                                    <h4 data-aos="fade-up" data-aos-delay="100">ATE Services</h4>
                                    <p data-aos="fade-up" data-aos-delay="200">Through SenaniTech's ATE board development solutions, semiconductor manufacturers gain access to expertise and resources essential for designing, developing, and manufacturing top-tier ATE boards. These boards adhere to the rigorous standards of semiconductor testing, ensuring high quality and reliability.</p>
                                    <p data-aos="fade-up" data-aos-delay="300">These solutions contribute to reliable, accurate and efficient testing processes, leading to improved quality control, increased productivity and reduced time-to-market for semiconductor devices. SenaniTech Specializes in ATE hardware, facilitating accurate testing and measurement of the Device under tests performance &amp; functionality.</p>
                                    <ul data-aos="fade-up" data-aos-delay="0">
                                       <li>Universal probe cards</li>
                                       <li>Device interface board</li>
                                       <li>Handler interface boards</li>
                                       <li>Load boards</li>
                                       <li>Probe interface boards</li>
                                       <li>Characterization boards</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="d-flex col-lg-6">
                                 <div className="semi_servInnerCard__Aw4rN">
                                    <img data-aos-delay="300" alt="Final test board" loading="lazy" width="300" height="188" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="images-semi/final-test-board.80b214cc.webp"/>
                                    <h5 data-aos-delay="0">Final Test Board</h5>
                                    <p data-aos-delay="100">SenaniTech provides customized solutions designed to meet specific IC testing requirements, ensuring accurate and reliable interfacing between the device under test and automated test equipment.</p>
                                    <ul data-aos-delay="200">
                                       <li>Experience in all major ATE platforms – Teradyne, Advantest, Nextest, Chroma, NI &amp; other platforms.</li>
                                       <li>Simulation Correlation - TDR Measurement on board to verify back drill stub effect.</li>
                                       <li>Decoupling Scheme Recommendation to meet transient current requirement.</li>
                                       <li>Power Integrity – IR Drop Optimization, Site to Site correlation.</li>
                                       <li>Step Drilling for Test Pogo vias, via modelling for high frequency, optimized pogo footprint.</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="d-flex col-lg-6">
                                 <div className="semi_servInnerCard__Aw4rN">
                                    <img data-aos-delay="300" alt="Probe cards" loading="lazy" width="300" height="188" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/probe-card.fb07f9c5_1.webp 1x, images-semi/probe-card.fb07f9c5.webp 2x" src="images-semi/probe-card.fb07f9c5.webp"/>
                                    <h5 data-aos-delay="0">Probe Cards</h5>
                                    <p data-aos-delay="100">SenaniTech offers advanced technology and design services to create precise and durable cards suitable for wafer-level testing, ensuring high-quality and efficient testing for semiconductor wafers before they are packaged.</p>
                                    <ul data-aos-delay="200">
                                       <li>
                                          Blind Vias for  20GHz to eliminate stub effect
                                       </li>
                                       <li>Impedance optimization for BGA Vias, BGA Breakout region, Differential Via Modelling, Die pad optimizations.</li>
                                       <li>Hybrid PCB Stack up with Low Dk Material for High-Speed layers Megtron7, Megtron6, Rogers 4003C, Rogers 4350B etc.,</li>
                                       <li>Max Layer Count – 82 Layers/ PCB Size/Diameter – Up to 520 mm</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>}
                        {reliability&&<div role="tabpanel" id="left-tabs-example-tabpane-second" aria-labelledby="left-tabs-example-tab-second" className=" ">
                           <div className="row">
                              <div className="col-lg-4"><img data-aos="fade-up" data-aos-delay="300" alt="Reliability and burn-in-engineering" fetchpriority="high" width="400" height="400" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/reliability.f5b143a2_1.webp 1x, images-semi/reliability.f5b143a2.webp 2x" src="images-semi/reliability.f5b143a2.webp"/></div>
                              <div className="col-lg-8">
                                 <div className="servInnerBannerContent">
                                    <h4 data-aos="fade-up" data-aos-delay="100">Reliability and Burn-in-Engineering</h4>
                                    <p data-aos="fade-up" data-aos-delay="200">SenaniTech is a leading provider of specialized design and manufacturing services for a wide range of Reliability PCBs specifically tailored to meet the stringent requirements of semiconductor companies.</p>
                                    <ul data-aos="fade-up" data-aos-delay="0">
                                       <li>HTOL</li>
                                       <li>HAST/THB</li>
                                       <li>HBM/LU Boards</li>
                                       <li>MCC – LC2</li>
                                       <li>AEHR MAX 3</li>
                                       <li>REL INC</li>
                                       <li>Delta – V (PTC)</li>
                                       <li>Program Cards/Coupon Boards/ADAPTER Boards</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>}
                        {Ic&&<div role="tabpanel" id="left-tabs-example-tabpane-third" aria-labelledby="left-tabs-example-tab-third" className=" ">
                           <div className="row">
                              <div className="col-lg-4"><img data-aos="fade-up" data-aos-delay="300" alt="Characterization boards" fetchpriority="high" width="400" height="400" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/characterization.e48e2927_1.webp 1x, images-semi/characterization.e48e2927.webp 2x" src="images-semi/characterization.e48e2927.webp"/></div>
                              <div className="col-lg-8">
                                 <div className="servInnerBannerContent servInnerBannerContent--singleLine">
                                    <h4 data-aos="fade-up" data-aos-delay="100">IC Characterization Board</h4>
                                    <p data-aos="fade-up" data-aos-delay="200">At SenaniTech, we recognize the pivotal role that characterization boards play throughout the device development, testing and validation phases. Our hardware development platform for characterization facilitates crucial evaluations, including performance assessment, vital parameter measurement, calibration and IC validation. Leveraging our expertise in hardware design, signal and power integrity simulations, intricate PCB layout and high-quality PCBA, we serve as the ideal design partner for achieving successful IC development.</p>
                                    <ul data-aos="fade-up" data-aos-delay="0">
                                       <li>Requirement Analysis</li>
                                       <li>Hardware Design and Prototyping</li>
                                       <li>Signal Integrity and Performance Optimization</li>
                                       <li>Software Development and Integration</li>
                                       <li>Testing and Validation</li>
                                       <li>Documentation and Support</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>}
                        {Ref&&<div role="tabpanel" id="left-tabs-example-tabpane-fourth" aria-labelledby="left-tabs-example-tab-fourth" className=" ">
                           <div className="row">
                              <div className="col-lg-4"><img data-aos="fade-up" data-aos-delay="300" alt="Reference design &amp; development" fetchpriority="high" width="400" height="400" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/reference.b2f3546d_1.webp 1x, images-semi/reference.b2f3546d.webp 2x" src="images-semi/reference.b2f3546d.webp"/></div>
                              <div className="col-lg-8">
                                 <div className="servInnerBannerContent servInnerBannerContent--singleLine">
                                    <h4 data-aos="fade-up"  data-aos-delay="100">Reference Design &amp; Development</h4>
                                    <p data-aos="fade-up" data-aos-delay="200">SenaniTech provides tailored IC Reference Kit development services designed to meet specific requirements. Through our expertise in customized IC Reference Kit development, semiconductor developers can accelerate the design process, validate performance and guarantee the quality of their integrated circuits. This results in faster time-to-market and increased competitiveness within the industry.</p>
                                    <ul data-aos="fade-up" data-aos-delay="0">
                                       <li>Requirement Analysis</li>
                                       <li>Hardware Design and Prototyping</li>
                                       <li>Signal Integrity and Performance Optimization</li>
                                       <li>Software Development and Integration</li>
                                       <li>Testing and Validation</li>
                                       <li>Documentation and Support</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>}
                        {Turnkey&&<div role="tabpanel" id="left-tabs-example-tabpane-fifth" aria-labelledby="left-tabs-example-tab-fifth" className=" ">
                           <div className="row">
                              <div className="col-lg-6 offset-lg-3"><img data-aos="fade-up" data-aos-delay="300" alt="Turnkey Build &amp; Kit Development" loading="lazy" width="618" height="413" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/semiconductor-tab.099b4d7c_1.webp 1x, images-semi/semiconductor-tab.099b4d7c.webp 2x" src="images-semi/semiconductor-tab.099b4d7c.webp"/></div>
                              <div className="col-lg-12">
                                 <div className="servInnerBannerContent servInnerBannerContent--singleLine">
                                    <h4 data-aos="fade-up" data-aos-delay="100">Turnkey Build &amp; Kit Development</h4>
                                    <p data-aos="fade-up" data-aos-delay="200">SenaniTech's PCB turnkey build services, inclusive of kit development, deliver seamless solutions from initial concept to final delivery. We employ state-of-the-art PCB fabrication, precise assembly techniques, efficient inventory management, meticulous kitting, comprehensive test coverage and timely shipment. This ensures optimal execution of New Product Introduction projects (NPI) and small volume proto builds.</p>
                                    <h5 data-aos="fade-up" data-aos-delay="0" className="semi_innerHead__IMz_2">Key elements encompass:</h5>
                                    <div className="row">
                                       <div className="col-xl-4 col-lg-6">
                                          <div className="semi_semiBlock__B5y3Y">
                                             <img data-aos="fade-up" data-aos-delay="300" alt="PCB Assembly:" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/acb-assembly.dfa72459_1.webp 1x, images-semi/acb-assembly.dfa72459.webp 2x" src="images-semi/acb-assembly.dfa72459.webp"/>
                                             <h6>PCB Assembly:</h6>
                                             <p>Precise fabrication and assembly of printed circuit boards according to specified requirements.</p>
                                          </div>
                                       </div>
                                       <div className="col-xl-4 col-lg-6">
                                          <div className="semi_semiBlock__B5y3Y">
                                             <img data-aos="fade-up" data-aos-delay="300" alt="Inventory Management:" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/inventory.8062f063_1.webp 1x, images-semi/inventory.8062f063.webp 2x" src="images-semi/inventory.8062f063.webp"/>
                                             <h6>Inventory Management:</h6>
                                             <p>Efficient tracking and management of electronic components, guaranteeing their availability throughout production.</p>
                                          </div>
                                       </div>
                                       <div className="col-xl-4 col-lg-6">
                                          <div className="semi_semiBlock__B5y3Y">
                                             <img data-aos="fade-up" data-aos-delay="300" alt="Kitting:" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/kitting.fbc1f6f5_1.webp 1x, images-semi/kitting.fbc1f6f5.webp 2x" src="images-semi/kitting.fbc1f6f5.webp"/>
                                             <h6>Kitting:</h6>
                                             <p>Methodical compilation of all essential components into organized kits, enhancing the efficiency of the assembly process.</p>
                                          </div>
                                       </div>
                                       <div className="col-xl-4 col-lg-6">
                                          <div className="semi_semiBlock__B5y3Y">
                                             <img data-aos="fade-up" data-aos-delay="300" alt="Shipment:" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/shipment.94dcdae0_1.webp 1x, images-semi/shipment.94dcdae0.webp 2x" src="images-semi/shipment.94dcdae0.webp"/>
                                             <h6>Shipment:</h6>
                                             <p>Coordination of logistics to ensure timely delivery of kits to end-users or production facilities, optimizing project timelines.</p>
                                          </div>
                                       </div>
                                       <div className="col-xl-4 col-lg-6">
                                          <div className="semi_semiBlock__B5y3Y">
                                             <img data-aos="fade-up" data-aos-delay="300" alt="Kit Documentation:�&nbsp;" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/guidance.cef682c3_1.webp 1x, images-semi/guidance.cef682c3.webp 2x" src="images-semi/guidance.cef682c3.webp"/>
                                             <h6>Kit Documentation:�&nbsp;</h6>
                                             <p>Thorough documentation accompanying each kit, providing comprehensive guidance and reference for assembly and usage.</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>}
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="getInTouch_getInTochSection__5D0lg">
            <Link to="/contact">
               <div className="d-flex container"><span className="getInTouch_gitButton__mmEDS" data-aos="fade-left" data-aos-offset="100"><span>Get in touch with us</span><img alt="Get in Touch" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/arrow-right.236eb624_1.svg 1x, images-semi/arrow-right.236eb624.svg 2x" src="images-semi/arrow-right.236eb624.svg"/></span></div>
            </Link>
         </section>
      </main>
    </div>
  )
}

export default Semiconductor