import React from 'react';
import { useState,useRef,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function SysSoln() {
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    const hardware=useRef(null);
    const simulations=useRef(null);
    const fgpa=useRef(null);
    const embedded=useRef(null);
    const mechanical=useRef(null);
    const product=useRef(null);
    const productbuild=useRef(null);
    const [Hardware,sethardware]=useState(true);
    const [Simulation,setsim]=useState(false);
    const [Fgpa,setfgpa]=useState(false);
    const [Embedded,setemb]=useState(false);
    const [Mechanical,setmech]=useState(false);
    const [Product,setprod]=useState(false);
    const [ProductBuild,setproductbuild]=useState(false);
    const gethardware=()=>{
        hardware.current.classList.add('active');
        simulations.current.classList.remove('active');
        fgpa.current.classList.remove('active');
        embedded.current.classList.remove('active');
        mechanical.current.classList.remove('active');
        product.current.classList.remove('active');
        productbuild.current.classList.remove('active');
        
        sethardware(true);
        setsim(false);
        setfgpa(false);
        setemb(false);
        setmech(false);
        setprod(false);
        setproductbuild(false);
    }
    const getsim=()=>{
        hardware.current.classList.remove('active');
        simulations.current.classList.add('active');
        fgpa.current.classList.remove('active');
        embedded.current.classList.remove('active');
        mechanical.current.classList.remove('active');
        product.current.classList.remove('active');
        productbuild.current.classList.remove('active');

        sethardware(false);
        setsim(true);
        setfgpa(false);
        setemb(false);
        setmech(false);
        setprod(false);
        setproductbuild(false);
    }
    const getfgpa=()=>{
        hardware.current.classList.remove('active');
        simulations.current.classList.remove('active');
        fgpa.current.classList.add('active');
        embedded.current.classList.remove('active');
        mechanical.current.classList.remove('active');
        product.current.classList.remove('active');
        productbuild.current.classList.remove('active');

        sethardware(false);
        setsim(false);
        setfgpa(true);
        setemb(false);
        setmech(false);
        setprod(false);
        setproductbuild(false);
    }
    const getembedded=()=>{
        hardware.current.classList.remove('active');
        simulations.current.classList.remove('active');
        fgpa.current.classList.remove('active');
        embedded.current.classList.add('active');
        mechanical.current.classList.remove('active');
        product.current.classList.remove('active');
        productbuild.current.classList.remove('active');

        sethardware(false);
        setsim(false);
        setfgpa(false);
        setemb(true);
        setmech(false);
        setprod(false);
        setproductbuild(false);
    }
    const getmechanical=()=>{
        hardware.current.classList.remove('active');
        simulations.current.classList.remove('active');
        fgpa.current.classList.remove('active');
        embedded.current.classList.remove('active');
        mechanical.current.classList.add('active');
        product.current.classList.remove('active');
        productbuild.current.classList.remove('active');

        sethardware(false);
        setsim(false);
        setfgpa(false);
        setemb(false);
        setmech(true);
        setprod(false);
        setproductbuild(false);
    }
    const getproduct=()=>{
        hardware.current.classList.remove('active');
        simulations.current.classList.remove('active');
        fgpa.current.classList.remove('active');
        embedded.current.classList.remove('active');
        mechanical.current.classList.remove('active');
        product.current.classList.add('active');
        productbuild.current.classList.remove('active');

        sethardware(false);
        setsim(false);
        setfgpa(false);
        setemb(false);
        setmech(false);
        setprod(true);
        setproductbuild(false);
    }
    const getproductBuild=()=>{
        hardware.current.classList.remove('active');
        simulations.current.classList.remove('active');
        fgpa.current.classList.remove('active');
        embedded.current.classList.remove('active');
        mechanical.current.classList.remove('active');
        product.current.classList.remove('active');
        productbuild.current.classList.add('active');
        
        sethardware(false);
        setsim(false);
        setfgpa(false);
        setemb(false);
        setmech(false);
        setprod(false);
        setproductbuild(true);
    }
  return (
<div>
   <main>
   <section class="banner bannerWithContent system-solution_servicesBanner__UH2NL" data-aos="fade-up" data-aos-duration="1000">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="vstack">
          <h1 data-aos="fade-up" data-aos-duration="1000">Systems Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            SenaniTech works hand in hand with its clients to offer extensive coverage throughout the entire product development lifecycle. By blending advanced technology, engineering expertise, structured process, and deep domain knowledge, SenaniTech is dedicated to delivering innovative and game-changing products.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="system-solution_productDev__D8AS_">
  <div class="containerSm container">
    <div class="system-solution_productLead__ea4qe">
      <div class="align-items-center row">
        <div class="col-lg-8">
          <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="aos-init aos-animate">Product Development</h2>
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" class="aos-init aos-animate">
            SenaniTech, in conjunction with its clients, covers the entire product development lifecycle. SenaniTech combines state-of-the-art technology with engineering expertise, structured processes, and deep domain experience to deliver innovative products.
          </p>
          <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" class="aos-init aos-animate">
            Our technical insight comes from years of market and customer understanding. Our integrated approach keeps critical disciplines in full communication, minimizing cost and valuable time while moving through the product lifecycle.
          </p>
        </div>
        <div class="col-lg-4">
          <img data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" alt="product development" fetchpriority="high" width="600" height="567" decoding="async" data-nimg="1" style={{color:'transparent'}} src="./images-sys/product.webp"/>
        </div>
      </div>
    </div>
  </div>
</section>

      <section class="serviceCoreSection system-solution_hardwareCore__9DTQ7">
         <div class="container">
            <div class="row">
               <div class="leftTabBar col-xl-3 col-lg-4 col-md-5">
                  <div class="flex-column nav nav-pills" role="tablist">
                     <div class="nav-item aos-init aos-animate" data-aos="fade-right" data-aos-delay="0"><a role="tab" data-rr-ui-event-key="first" id="left-tabs-example-tab-first" aria-controls="left-tabs-example-tabpane-first" aria-selected="true" class="nav-link active" tabindex="0" onClick={gethardware} ref={hardware}>Hardware Design</a></div>
                     <div class="nav-item aos-init aos-animate" data-aos="fade-right" data-aos-delay="0"><a role="tab" data-rr-ui-event-key="second" id="left-tabs-example-tab-second" aria-controls="left-tabs-example-tabpane-second" aria-selected="false" tabindex="-1" class="nav-link" onClick={getsim} ref={simulations}>Simulations</a></div>
                     <div class="nav-item aos-init aos-animate" data-aos="fade-right" data-aos-delay="0"><a role="tab" data-rr-ui-event-key="thirda" id="left-tabs-example-tab-thirda" aria-controls="left-tabs-example-tabpane-thirda" aria-selected="false" tabindex="-1" class="nav-link" onClick={getfgpa} ref={fgpa}>FPGA Design</a></div>
                     <div class="nav-item aos-init aos-animate" data-aos="fade-right" data-aos-delay="0"><a role="tab" data-rr-ui-event-key="thirdb" id="left-tabs-example-tab-thirdb" aria-controls="left-tabs-example-tabpane-thirdb" aria-selected="false" tabindex="-1" class="nav-link" onClick={getembedded} ref={embedded}>Embedded Software</a></div>
                     <div class="nav-item aos-init aos-animate" data-aos="fade-right" data-aos-delay="0"><a role="tab" data-rr-ui-event-key="fourth" id="left-tabs-example-tab-fourth" aria-controls="left-tabs-example-tabpane-fourth" aria-selected="false" tabindex="-1" class="nav-link" onClick={getmechanical} ref={mechanical}>Mechanical &amp; Thermal Capability</a></div>
                     <div class="nav-item aos-init aos-animate" data-aos="fade-right" data-aos-delay="0"><a role="tab" data-rr-ui-event-key="fifth" id="left-tabs-example-tab-fifth" aria-controls="left-tabs-example-tabpane-fifth" aria-selected="false" tabindex="-1" class="nav-link" onClick={getproduct} ref={product}>Product Bring up &amp; Validation</a></div>
                     <div class="nav-item aos-init aos-animate" data-aos="fade-right" data-aos-delay="0"><a role="tab" data-rr-ui-event-key="sixth" id="left-tabs-example-tab-sixth" aria-controls="left-tabs-example-tabpane-sixth" aria-selected="false" tabindex="-1" class="nav-link" onClick={getproductBuild}
                     ref={productbuild}>Production Build</a></div>
                  </div>
               </div>
               <div class="col-xl-9 col-lg-8 col-md-7">
                  <div class="rightTabBar system-solution_rightTabBar__9hEv8 tab-content">
                    {Hardware&& <div role="tabpanel" id="left-tabs-example-tabpane-first" aria-labelledby="left-tabs-example-tab-first" class=" active show">
                        <div class="system-solution_hardwareItems__e9sqv">
                           <div class="row">
                              <div data-aos="fade-up" data-aos-delay="100" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="System Architecture &amp; Component Selection" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon1.webp"/>
                                    <p>System Architecture &amp; Component Selection</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Technical Hardware Design Document" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon2.webp"/>
                                    <p>Technical Hardware Design Document</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="300" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Schematic Engineering" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon3.webp"/>
                                    <p>Schematic Engineering</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="400" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Circuit Simulations" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon4.webp"/>
                                    <p>Circuit Simulations</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="500" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Layout Engineering" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon5.webp"/>
                                    <p>Layout Engineering</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="DFM/DFA Analysis" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}} src='./images-sys/icon6.webp'/>
                                    <p>DFM/DFA Analysis</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                    {Simulation && <div role="tabpanel" id="left-tabs-example-tabpane-second" aria-labelledby="left-tabs-example-tab-second" class="">
                        <div class="system-solution_hardwareItems__e9sqv">
                           <div class="row">
                              <div data-aos="fade-up"  data-aos-delay="100" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Stack-up Engineering" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon7.webp"/>
                                    <p>Stack-up Engineering</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Signal Integrity Analysis" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon8.webp"/>
                                    <p>Signal Integrity Analysis</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="300" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Power Integrity Analysis" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon9.webp"/>
                                    <p>Power Integrity Analysis</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                     {Fgpa &&<div role="tabpanel" id="left-tabs-example-tabpane-thirda" aria-labelledby="left-tabs-example-tab-thirda" class="">
                        <div class="system-solution_hardwareItems__e9sqv">
                           <div class="row">
                              <div data-aos="fade-up"  data-aos-delay="100" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Microarchitecture Development" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon10.webp"/>
                                    <p>Microarchitecture Development</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="FPGA RTL Design" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon11.webp"/>
                                    <p>FPGA RTL Design</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="300" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Board Validation" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon12.webp"/>
                                    <p>Board Validation</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                     {Embedded &&<div role="tabpanel" id="left-tabs-example-tabpane-thirdb" aria-labelledby="left-tabs-example-tab-thirdb" class="">
                        <div class="system-solution_hardwareItems__e9sqv">
                           <div class="row">
                              <div data-aos="fade-up" data-aos-delay="100" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Filmware and BSP Development" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon13.webp"/>
                                    <p>Filmware and BSP Development</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Application and UI Software Development" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon14.webp"/>
                                    <p>Application and UI Software Development</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Device drivers and API Development" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon15.webp"/>
                                    <p>Device drivers and API Development</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="300" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Board bringup and Hardware Validation" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon16.webp"/>
                                    <p>Board bringup and Hardware Validation</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                     {Mechanical &&<div role="tabpanel" id="left-tabs-example-tabpane-fourth" aria-labelledby="left-tabs-example-tab-fourth" class="">
                        <div class="system-solution_hardwareItems__e9sqv">
                           <div class="row">
                              <div data-aos="fade-up" data-aos-delay="100" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Industrial Design" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon17.webp"/>
                                    <p>Industrial Design</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Structural Analysis" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon18.webp"/>
                                    <p>Structural Analysis</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="300" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Mechanical Design" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon19.webp"/>
                                    <p>Mechanical Design</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="400" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Thermal Simulations" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon20.webp"/>
                                    <p>Thermal Simulations</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="500" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="MTBF Analysis" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon21.webp"/>
                                    <p>MTBF Analysis</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                     {Product &&<div role="tabpanel" id="left-tabs-example-tabpane-fifth" aria-labelledby="left-tabs-example-tab-fifth" class="">
                        <div class="system-solution_hardwareItems__e9sqv">
                           <div class="row">
                              <div data-aos="fade-up"  data-aos-delay="100" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Hardware Function Bringing up" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon22.webp  "/>
                                    <p>Hardware Functional Bring up</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Electrical Design Validation Test (EDTV)" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}} src="./images-sys/icon23.webp"/>
                                    <p>Electrical DVT (EDVT)</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="300" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Mechanical Design Validaion Test (MDTV)" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}} src="./images-sys/icon24.webp"/>
                                    <p>Mechanical DVT (MDVT)</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="400" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="FCC and UL Safety Certifications" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon25.webp"/>
                                    <p>Certification - FCC Class </p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="500" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Safety – UL and TUV" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}} src="./images-sys/icon26.webp"/>
                                    <p>Safety – UL and TUV</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>}
                    {ProductBuild && <div role="tabpanel" id="left-tabs-example-tabpane-sixth" aria-labelledby="left-tabs-example-tab-sixth" class="">
                        <div class="system-solution_hardwareItems__e9sqv">
                           <div class="row">
                              <div  data-aos="fade-up" data-aos-delay="100" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="NPI/Prototype Build" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}} src="./images-sys/icon27.webp"/>
                                    <p>NPI/Prototype Build</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up"  data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Production Ramp up" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon28.webp"/>
                                    <p>Production Ramp up</p>
                                 </div>
                              </div>
                              <div  data-aos="fade-up" data-aos-delay="200" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Integration and Test Development" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon28.webp"/>
                                    <p>Integration and Test Development</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="300" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Certification and Compliance" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon29.webp"/>
                                    <p>Certification and Compliance</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="400" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Packaging and Inventory Management" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon30.webp"/>
                                    <p>Packaging and Inventory Management</p>
                                 </div>
                              </div>
                              <div data-aos="fade-up" data-aos-delay="400" class="d-flex col-xl-4 col-lg-6 aos-init aos-animate">
                                 <div class="system-solution_hardwareItem__QddPI">
                                    <img alt="Distribution and Support" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" style={{color:'transparent'}}  src="./images-sys/icon30.webp"/>
                                    <p>Distribution and Support</p>
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
            <a href="/contact-us/">
               <div className="d-flex container"><span className="getInTouch_gitButton__mmEDS" data-aos="fade-left" data-aos-delay="100"><span>Get in touch with us</span><img alt="Get in Touch" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" style={{color:'transparent'}}  srcset="images-semi/arrow-right.236eb624_1.svg 1x, images-semi/arrow-right.236eb624.svg 2x" src="images-semi/arrow-right.236eb624.svg"/></span></div>
            </a>
         </section>
   </main>
</div>
  )
}

export default SysSoln