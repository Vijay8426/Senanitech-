import React, { useRef,useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS (includes Popper.js)

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
  const mapRef = useRef(null);
  const latitude = 11.117590;
  const longitude = 76.969520;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Email sent successfully!');
        e.target.reset(); // Optional: Clear form after submission
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      alert('Failed to send email. Error: ' + error.message);
    }
  };

  return (
    <main>
      <section className="banner contact_contactBanner__Guu9D">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vstack" data-aos="fade-up" data-aos-delay="200">
                <h1>Connect with SenaniTech</h1>
                <p data-aos-delay="200">
                  Offering world-class semiconductor solutions globally. Your worldwide partner in quality and innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_formSection__7d_hM">
        <div className="containerSm container">
          <div className="contact_formBox__UxtOx">
            <div className="row">
              <div className="contact_formLeft__tlkQu col-md-8">
                <h2 data-aos="fade-right" data-aos-delay="0">Get in touch</h2>
                <p data-aos="fade-right" data-aos-delay="100">
                  Talk to a member of our team around the world, We will help in addressing your business needs.
                </p>
                <form
                  id="form"
                  className="form_form__ZPG10"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="0">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form_formControl__bOqQT"
                      required
                      name="name"
                    />
                  </div>
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="form_formControl__bOqQT"
                      required
                      name="email"
                    />
                  </div>
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                    <input
                      type="number"
                      placeholder="Phone"
                      className="form_formControl__bOqQT"
                      name="phone"
                    />
                  </div>

                  <div className="d-flex justify-content-center pb-5" data-aos="fade-up" data-aos-delay="300">
                    <label
                      htmlFor="dropzone-file"
                      className="d-flex flex-column align-items-center justify-content-center w-100 h-64 border border-secondary border-dashed rounded bg-light hover:bg-secondary hover:text-white cursor-pointer"
                    >
                      <div className="d-flex flex-column align-items-center justify-content-center pt-5 pb-6">
                        <svg
                          className="w-2 h-2 mb-5 text-secondary"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-center text-secondary">
                          <span className="font-weight-bold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-center text-muted">file: docs, txt, pdf</p>
                      </div>
                      <input id="dropzone-file" type="file" name="file" className="d-none" />
                    </label>
                  </div>

                  <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows="5"
                      className="form_formControl__bOqQT"
                    />
                  </div>
                  <div className="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
                  <div className="buttonContainer" data-aos="fade-up" data-aos-delay="500">
                    <button type="submit" className="button btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="contact_formRight__eug72 col-md-4" data-aos="fade-up">
                <div className="contact-container d-flex flex-column" style={{ height: '100%' }}>
                  <div className=" flex-grow-1 bg-white p-4 rounded ">
                    <h2 className="contact-header mb-5" style={{ color: '#008C78' }}>Contact Details</h2>
                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                      <a href="tel:470-601-1911" className="d-flex align-items-center text-dark text-decoration-none">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                            stroke="#0a4275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h5 className="contact-info mb-0 ms-3">+91 9486470817</h5>
                      </a>
                    </div>
                    <div className="mb-5" data-aos="fade-up" data-aos-delay="110">
                      <a href="https://veilmail.io/irish-geoff" className="d-flex align-items-center text-dark text-decoration-none">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                            stroke="#0a4275" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <h5 className="contact-info mb-0 ms-3">praveenamara@senanitech.com</h5>
                      </a>
                    </div>
                    <div className="mb-0" data-aos="fade-up" data-aos-delay="150">
                      <a href="#" className="d-flex align-items-center text-dark text-decoration-none">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                            stroke="#0a4275" strokeWidth="2" />
                          <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                            stroke="#0a4275" strokeWidth="2" />
                        </svg>
                        <h5 className="contact-info mb-0 ms-3">Vattamalaipalayam N.G.G.O colony,<br /> Coimbatore district, Tamilnadu - 641022</h5>
                      </a>
                    </div>
                  </div>

                  <div className="map-container flex-grow-1" style={{ width: '100%', height: '50%' }} data-aos="fade-up" data-aos-delay="400">
                    <MapContainer
                      center={[latitude, longitude]}
                      zoom={13}
                      ref={mapRef}
                      style={{ width: '100%', height: '100%' }}
                      id="map"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[latitude, longitude]}
                        icon={L.icon({
                          iconUrl: require('leaflet/dist/images/marker-icon.png'),
                          iconSize: [25, 41],
                          iconAnchor: [12, 41],
                          popupAnchor: [1, -34],
                          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
                          shadowSize: [41, 41],
                        })}
                      >
                        <Popup>
                          Pactron Location
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
