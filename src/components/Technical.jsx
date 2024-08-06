import React from 'react'
import { useRef,useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Technical() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  const sim=useRef(null);
  const sub=useRef(null);
  const emb=useRef(null);
  const fgp=useRef(null);
  const manufacture=useRef(null);
  const [Simulation,SetSimulation]=useState(true);
  const [Substrate,SetSubstrate]=useState(false);
  const [Embedded,SetEmbedded]=useState(false);
  const [Fgpa,SetFgpa]=useState(false);
  const [Manufacturing,SetManufacturing]=useState(false);
  const getSim=()=>{
    sim.current.classList.add('active');
    sub.current.classList.remove('active');
    emb.current.classList.remove('active');
    fgp.current.classList.remove('active');
    manufacture.current.classList.remove('active');

    SetSimulation(true);
    SetSubstrate(false);
    SetEmbedded(false);
    SetFgpa(false);
    SetManufacturing(false);
  }
  const getSub=()=>{
    sim.current.classList.remove('active');
    sub.current.classList.add('active');
    emb.current.classList.remove('active');
    fgp.current.classList.remove('active');
    manufacture.current.classList.remove('active');

    SetSimulation(false);
    SetSubstrate(true);
    SetEmbedded(false);
    SetFgpa(false);
    SetManufacturing(false);
  }
  const getemb=()=>{
    sim.current.classList.remove('active');
    sub.current.classList.remove('active');
    emb.current.classList.add('active');
    fgp.current.classList.remove('active');
    manufacture.current.classList.remove('active');

    SetSimulation(false);
    SetSubstrate(false);
    SetEmbedded(true);
    SetFgpa(false);
    SetManufacturing(false);
  }
  const getfpgp=()=>{
    sim.current.classList.remove('active');
    sub.current.classList.remove('active');
    emb.current.classList.remove('active');
    fgp.current.classList.add('active');
    manufacture.current.classList.remove('active');

    SetSimulation(false);
    SetSubstrate(false);
    SetEmbedded(false);
    SetFgpa(true);
    SetManufacturing(false);
  }
  const getmanu=()=>{
    sim.current.classList.remove('active');
    sub.current.classList.remove('active');
    emb.current.classList.remove('active');
    fgp.current.classList.remove('active');
    manufacture.current.classList.add('active');

    SetSimulation(false);
    SetSubstrate(false);
    SetEmbedded(false);
    SetFgpa(false);
    SetManufacturing(true);
  }
  return (
<div>
   <main>
      <section className="banner bannerWithContent tech-service_servicesBanner__69_g6">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="vstack">
                     <h1>Technology services</h1>
                     <p data-aos="fade-up" data-aos-delay="200">SenaniTech’s technology services are tightly integrated with its prototyping validation services. Through its integrated environment, SenaniTech’s customers will be able to realize a one-stop solution for their engineering &amp; manufacturing requirements.</p>
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
                     <div className="nav-item" data-aos="fade-right" data-aos-delay="0"><Link role="tab" data-rr-ui-event-key="first" id="left-tabs-example-tab-first" aria-controls="left-tabs-example-tabpane-first" aria-selected="true" className="nav-link active" tabindex="0" onClick={getSim} ref={sim}>Simulation Services</Link></div>
                     <div className="nav-item" data-aos="fade-right" data-aos-delay="100"><Link role="tab" data-rr-ui-event-key="second" id="left-tabs-example-tab-second" aria-controls="left-tabs-example-tabpane-second" aria-selected="false" tabindex="-1" className="nav-link" onClick={getSub}
                     ref={sub}>Substrate Design</Link></div>
                     <div className="nav-item" data-aos="fade-right" data-aos-delay="200"><Link role="tab" data-rr-ui-event-key="third" id="left-tabs-example-tab-third" aria-controls="left-tabs-example-tabpane-third" aria-selected="false" tabindex="-1" className="nav-link" onClick={getemb} ref={emb}>Embedded Software Development</Link></div>
                     <div className="nav-item" data-aos="fade-right" data-aos-delay="0"><Link role="tab" data-rr-ui-event-key="fourth" id="left-tabs-example-tab-fourth" aria-controls="left-tabs-example-tabpane-fourth" aria-selected="false" tabindex="-1" className="nav-link" onClick={getfpgp} ref={fgp} >FPGA Design</Link></div>
                     <div className="nav-item" data-aos="fade-right" data-aos-delay="0"><Link role="tab" data-rr-ui-event-key="fifth" id="left-tabs-example-tab-fifth" aria-controls="left-tabs-example-tabpane-fifth" aria-selected="false" tabindex="-1" className="nav-link" onClick={getmanu} ref={manufacture}>Manufacturing Services</Link></div>
                  </div>
               </div>
               <div className="col-xl-9 col-lg-8 col-md-7">
                  <div className="rightTabBar tab-content">
                    {Simulation&& <div role="tabpanel" id="left-tabs-example-tabpane-first" aria-labelledby="left-tabs-example-tab-first" className="  active show">
                        <div className="row">
                           <div className="col-xl-6">
                              <div className="servInnerBannerContent tech-service_techInnerBannerContent__leDNL">
                                 <img data-aos="fade-up" data-aos-delay="300" alt="Signal Integrity Simulations" loading="lazy" width="64" height="75" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images/signal-integrity.7bb61b1d_1.svg 1x, images/signal-integrity.7bb61b1d.svg 2x" src="images/signal-integrity.7bb61b1d.svg"/>
                                 <h4 data-aos="fade-up" data-aos-delay="100">Signal Integrity Simulations</h4>
                                 <p data-aos="fade-up" data-aos-delay="200">Ensures accurate and noise-free high speed data transmission in PCBs for optimal electronic communication.</p>
                                 <ul data-aos="fade-up" data-aos-delay="0" className="tech-service_fullWidthList__1R18W">
                                    <li>Impedance Optimization to minimize Return Loss.</li>
                                    <li>System Loss Estimation and analysis</li>
                                    <li>Simulation Correlation - TDR Measurement</li>
                                    <li>Simulations to verify compliance of High Speed Interfaces</li>
                                    <li>Pre and Post Layout DDR simulations</li>
                                    <li>Co Design – (Die/Package/Board)</li>
                                 </ul>
                              </div>
                           </div>
                           <div className="col-xl-6">
                              <div className="servInnerBannerContent tech-service_techInnerBannerContent__leDNL">
                                 <img data-aos="fade-up" data-aos-delay="300" alt="Power Integrity Simulations" loading="lazy" width="78" height="75" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images/power-integrity.29f856cf_1.svg 1x, images/power-integrity.29f856cf.svg 2x" src="images/power-integrity.29f856cf.svg"/
                                    >
                                 <h4 data-aos="fade-up" data-aos-delay="100">Power Integrity Simulations</h4>
                                 <p data-aos="fade-up" data-aos-delay="200">Guarantees stable and efficient power distribution to all PCB components, enhancing overall system reliability.</p>
                                 <ul data-aos="fade-up" data-aos-delay="0" className="tech-service_fullWidthList__1R18W">
                                    <li>DC Analysis – IR Drop, Voltage and Current Distribution Analysis</li>
                                    <li>Decoupling Scheme Optimization</li>
                                    <li>Target Impedance Simulations for power planes across Die, Package and PCB.</li>
                                    <li>AC Analysis – Transient Noise analysis</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>}
                    {Substrate&&<div role="tabpanel" id="left-tabs-example-tabpane-second" aria-labelledby="left-tabs-example-tab-second" className=" ">
                        <div className="servInnerBannerContent tech-service_techInnerBannerContent__leDNL">
                           <div className="row">
                              <div className="col-xl-12"><img data-aos="fade-up" data-aos-delay="300" alt="Substrate and MLO/MLC Design" loading="lazy" width="140" height="75" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images/substrate.1e0bf9a8_1.svg 1x, images/substrate.1e0bf9a8.svg 2x" src="images/substrate.1e0bf9a8.svg"/></div>
                              <div className="col-xl-6">
                                 <h4 data-aos="fade-up" data-aos-delay="100">Substrate Design</h4>
                                 <p data-aos="fade-up" data-aos-delay="200">At SenaniTech, we excel in advanced substrate and MLO/MLC design, ensuring optimal system performance through specialized SI/PI analysis, Package-PCB fan-out optimization, and strategic ball map analysis.</p>
                                 <p>Our designs are not only compact with high I/O density but also refined for reduced BGA pitch and precise ball assignment, addressing high current needs while minimizing delay and crosstalk, all within stringent impedance and IR drop standards.</p>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tech-service_servInnerCard__H8tNI">
                                    <h5 data-aos="fade-up" data-aos-delay="0">Design Capability Highlights</h5>
                                    <ul data-aos="fade-up" data-aos-delay="100" className="tech-service_fullWidthList__1R18W">
                                       <li>Interpret electrical characterization and requirement for power distribution networks.</li>
                                       <li>Delivered several Substrate / Package designs for different manufacturer specifications.</li>
                                       <li>Insertion and Return loss Optimization for High-Speed Signals.</li>
                                       <li>Integrated Power Distribution Network analysis.</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                     {Embedded&&<div role="tabpanel" id="left-tabs-example-tabpane-third" aria-labelledby="left-tabs-example-tab-third" className="">
                        <div className="servInnerBannerContent tech-service_techInnerBannerContent__leDNL">
                           <div className="row">
                              <div className="col-xl-12"><img data-aos="fade-up" data-aos-delay="300" alt="Embedded Software Development" loading="lazy" width="1058" height="264" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images/embedded-system-v1.01efcc60_1.webp 1x, images/embedded-system-v1.01efcc60.webp 2x" src="images/embedded-system-v1.01efcc60.webp"/></div>
                              <div className="col-xl-6">
                                 <h4 data-aos="fade-up" data-aos-delay="100">Embedded Software Development</h4>
                                 <p data-aos="fade-up" data-aos-delay="200">Harnessing the synergy of low-level abstraction, real-time systems, and intricate hardware interplay, our embedded software development delves into the core fabric of technology, crafting optimized and scalable solutions that unlock the full potential of hardware-software integration.</p>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tech-service_servInnerCard__H8tNI">
                                    <ul data-aos="fade-up" data-aos-delay="100" className="tech-service_fullWidthList__1R18W">
                                       <li>Application Software and UI Development</li>
                                       <li>Board Support Package (BSP) and Middleware Development.</li>
                                       <li>Driver Development and Porting</li>
                                       <li>Board Bring-up and HW Diagnostics</li>
                                       <li>Embedded Application</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                     {Fgpa&&<div role="tabpanel" id="left-tabs-example-tabpane-fourth" aria-labelledby="left-tabs-example-tab-fourth" className="">
                        <div className="servInnerBannerContent tech-service_techInnerBannerContent__leDNL">
                           <div className="row">
                              <div className="col-xl-12"><img data-aos="fade-up" data-aos-delay="300" alt="FPGA Design &amp; Prototyping" loading="lazy" width="75" height="75" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images/fpga.e10da9cc_1.svg 1x, images/fpga.e10da9cc.svg 2x" src="images/fpga.e10da9cc.svg"/></div>
                              <div className="col-xl-6">
                                 <h4 data-aos="fade-up" data-aos-delay="100">FPGA Design &amp; Prototyping</h4>
                                 <p data-aos="fade-up" data-aos-delay="200">SenaniTech specializes in delivering FPGA solutions that enable the creation of customized hardware designed to meet precise specifications, resulting in enhanced performance and minimized power usage. With a remarkable expertise in Board testing and debugging, we excel in crafting top-notch FPGA designs that perfectly align with the unique demands of various applications.</p>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tech-service_servInnerCard__H8tNI">
                                    <ul data-aos="fade-up" data-aos-delay="100" className="tech-service_fullWidthList__1R18W">
                                       <li>Architecture/ Microarchitecture development</li>
                                       <li>IP Development in industry standard HDL languages</li>
                                       <li>Expertise in Board testing and debugging</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                     {Manufacturing&&<div role="tabpanel" id="left-tabs-example-tabpane-fifth" aria-labelledby="left-tabs-example-tab-fifth" className="">
                        <div className="servInnerBannerContent tech-service_techInnerBannerContent__leDNL">
                           <div className="row">
                              <div className="col-xl-12">
                                 <img data-aos="fade-up" data-aos-delay="300" alt="Prototyping Services" loading="lazy" width="75" height="75" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images/prototyping.c614b3cb_1.webp 1x, images/prototyping.c614b3cb.webp 2x" src="images/prototyping.c614b3cb.webp"/>
                                 <h4 data-aos="fade-up" data-aos-delay="100">Manufacturing Services</h4>
                              </div>
                              <div className="col-xl-6">
                                 <h5 data-aos="fade-up" data-aos-delay="0">NPI/Prototype Build</h5>
                                 <p data-aos="fade-up" data-aos-delay="200">At SenaniTech, we assist our clients in transforming their ideas into tangible products during this pivotal phase where concepts evolve into reality. Through our NPI (New Product Introduction) and prototyping services, we empower companies to expedite their time-to-market by reducing development cycles and promptly adapting to market dynamics.</p>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tech-service_servInnerCard__H8tNI">
                                    <ul data-aos="fade-up" data-aos-delay="100" className="tech-service_fullWidthList__1R18W">
                                       <li>Concept to Design</li>
                                       <li>Turnkey Assembly</li>
                                       <li>Functional Test &amp; Debug</li>
                                       <li>Prototyping Iterations</li>
                                       <li>Documentation and report</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <h5 data-aos="fade-up" data-aos-delay="0">Production Build</h5>
                                 <p data-aos="fade-up" data-aos-delay="200">Our small and medium volume PCBA production services are tailored to meet the diverse needs of businesses, spanning from startups to well-established enterprises. </p>
                              </div>
                              <div className="col-xl-6">
                                 <div className="tech-service_servInnerCard__H8tNI">
                                    <ul data-aos="fade-up" data-aos-delay="100" className="tech-service_fullWidthList__1R18W">
                                       <li>Production Planning and Scheduling</li>
                                       <li>Material Procurement &amp; Inventory Management</li>
                                       <li>PCB Assembly</li>
                                       <li>Quality Control &amp; Testing</li>
                                       <li>Production Support &amp; Troubleshooting</li>
                                       <li>Continuous Improvement and Optimization</li>
                                       <li>Logistics &amp; Distribution</li>
                                    </ul>
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
            <div className="d-flex container"><span className="getInTouch_gitButton__mmEDS" data-aos="fade-left" data-aos-offset="100"><span>Get in touch with us</span><img alt="Get in Touch" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="images/arrow-right.236eb624.svg"/></span></div>
         </Link>
      </section>
   </main>
</div>
  )
}

export default Technical