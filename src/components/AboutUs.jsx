import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Home.css'

function AboutUs() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div>
            <main>
         <section className="banner bannerWithContent about_aboutBanner__4gKit">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="vstack">
                        <h1 style={{fontWeight:'600'}}><span>Bringing your ideas from</span> Mind to market</h1>
                        <p data-aos="fade-up" data-aos-delay="200" style={{fontWeight:'400'}} >Solving complex engineering challenges across the full Semiconductor and Technology spectrum, leveraging best-in class design and integrated manufacturing.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="about_ourValuesSection__rg5AO">
            <div className="containerMd container">
               <div className="text-center about_valuesLead__4pEr6">
                  <h2 data-aos="fade-up"  data-aos-delay="100" className="text-center display-6 " style={{fontWeight:'600'}}>Our values</h2>
               </div>
               <div className="about_valuesRow__xiEW_ row">
                  <div className="col-lg-3 col-md-4">
                     <div className="about_values__CytV8" data-aos="fade-up" data-aos-delay="0">
                        <img alt="Quality Driven" loading="lazy" width="75" height="75" decoding="async" data-nimg="1" style={{color : 'transparent'}} srcset="images-about/quality-driven.8a46d6f5_1.webp 1x, images-about/quality-driven.8a46d6f5.webp 2x" src="images-about/quality-driven.8a46d6f5.webp"/>
                        <h4>Quality driven</h4>
                        <p>As a quality-driven company, we are committed to delivering quality products and services that meet the highest industry standards</p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                     <div className="about_values__CytV8" data-aos="fade-up"  data-aos-delay="100">
                        <img alt="Quality Driven" loading="lazy" width="75" height="75" decoding="async" data-nimg="1" style={{color : 'transparent'}} srcset="images-about/process-oriented.e54c1f5e_1.webp 1x, images-about/process-oriented.e54c1f5e.webp 2x" src="images-about/process-oriented.e54c1f5e.webp"/>
                        <h4>Process oriented</h4>
                        <p>At SenaniTech, we are process oriented. We believe in leveraging the latest technologies and tools to create efficient and reliable processes</p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                     <div className="about_values__CytV8" data-aos="fade-up"  data-aos-delay="200">
                        <img alt="Quality Driven" loading="lazy" width="75" height="75" decoding="async" data-nimg="1" style={{color : 'transparent'}} srcset="images-about/people-focused.53b597f4_1.webp 1x, images-about/people-focused.53b597f4.webp 2x" src="images-about/people-focused.53b597f4.webp"/>
                        <h4>People focused</h4>
                        <p>SenaniTech fosters a culture of care, respect and collaboration ensuring we create meaningful connections and empower our folks to thrive.</p>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                     <div className="about_values__CytV8" data-aos="fade-up"  data-aos-delay="200">
                        <img alt="Quality Driven" loading="lazy" width="75" height="75" decoding="async" data-nimg="1" style={{color : 'transparent'}} srcset="images-about/people-focused.53b597f4_1.webp 1x, images-about/people-focused.53b597f4.webp 2x" src="images-about/people-focused.53b597f4.webp"/>
                        <h4>Engineering excellence</h4>
                        <p>SenaniTech utilizes the power of innovation coupled with engineering prowess to deliver top-tier solutions.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className="container h-100 p-5" style={{overflow:'hidden'}} data-aos="fade-up" data-aos-delay="100">
  <div className="row align-items-center h-100">
    <div className="container rounded">
      <h1 className="text-center display-6 " style={{fontWeight:'600'}}>Our valuable clients</h1>
      <div className="slider">
        <div className="logos">
        <img src="images/Clients/Client-1.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-2.png" className="img-fluid logo-2" alt=""/>
        <img src="images/Clients/Client-3.png" className="img-fluid logo-2" alt=""/>
        <img src="images/Clients/Client-4.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-5.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-6.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-7.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-8.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-9.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-10.png" className="img-fluid" alt=""/>

        </div>
        <div className="logos"
        style={{marginLeft:'400px'}}>
        <img src="images/Clients/Client-1.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-2.png" className="img-fluid logo-2" alt=""/>
        <img src="images/Clients/Client-3.png" className="img-fluid logo-2" alt=""/>
        <img src="images/Clients/Client-4.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-5.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-6.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-7.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-8.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-9.png" className="img-fluid" alt=""/>
        <img src="images/Clients/Client-10.png" className="img-fluid" alt=""/>

        </div>        

      </div>
    </div>
  </div>

</div>
         <section className="getInTouch_getInTochSection__5D0lg">
         <Link to='/contact'>
               <div className="d-flex container"><span className="getInTouch_gitButton__mmEDS" data-aos="fade-left" data-aos-offset="100"><span>Get in touch with us</span><img alt="Get in Touch" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" style={{color : 'transparent'}} srcset="images-about/arrow-right.236eb624_1.svg 1x, images-about/arrow-right.236eb624.svg 2x" src="images-about/arrow-right.236eb624.svg"/></span></div>
            </Link>
         </section>
      </main>
    </div>
  )
}

export default AboutUs