import logo from './logo.svg';
import './App.css';
import { TiSocialTwitter, TiSocialFacebook, TiDeviceDesktop } from "react-icons/ti";
import { IoIosHome, IoIosMail, IoIosArrowDown, IoIosContact } from "react-icons/io";
import { FaArrowRight, FaCamera, FaLongArrowAltRight, FaLongArrowAltLeft, FaPinterestP } from "react-icons/fa";
import { TfiWrite, TfiShoppingCart, TfiHeadphone, TfiCloudDown, TfiBag } from "react-icons/tfi";
import { TbSearch } from "react-icons/tb";
import { RiPieChart2Line } from "react-icons/ri";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { LiaClipboard } from "react-icons/lia";


import logos from './image/logo.png';
import sliders from './image/mainslider.jpg';
import brazil from './image/brazil.gif';
import usa from './image/usa.gif';
import leftimg from './image/visaleft.jpeg';
import ourmember1 from './image/ourmember1.jpeg';
import ourmember2 from './image/ourmember2.jpeg';
import branches from './image/branches.jpeg';
import ourgallery from './image/ourgallery.jpg';
import oursliderimg1 from './image/oursliderimg1.jpeg';
import oursliderimg2 from './image/oursliderimg2.jpeg';
import ouragency from './image/ouragency.png';
import businessimg1 from './image/businessimg1.jpeg';
import businessimg2 from './image/businessimg2.jpeg';
import businessimg3 from './image/businessimg3.jpeg';
import whitelogo from './image/asset 26.png';


function App() {
  return (
    <div>

      {/* *****  Top-header start  ***** */}

      <div className='top-header'>
        <div className='container'>
          <div className='main-div flex'>
            <div className=' flex '>
              <i className='icon-left'><IoIosHome></IoIosHome></i>
              <p className='top-text '>92 Bowery St New York, NY 10013</p>
            </div>
            <div className='flex '>
              <i className='icons-left'><IoIosMail ></IoIosMail></i>
              <p className='top-text'><a>demo@example.com</a></p>
            </div>
            <div className='top-right flex'>
              <p className='hourse '>Open hours: 9.00-24.00 Mon-Sat </p>
              <i className='icon-right'><TiSocialFacebook></TiSocialFacebook></i>
              <i className='icon-right'><TiSocialTwitter></TiSocialTwitter></i>
            </div>
          </div>
        </div>
      </div>

      {/* *****  Top-header end  ***** */}


      {/* *****  Main-header start ***** */}


      <div className='container'>
        <div className='flex main-menu'>
          <div className='main-logo'>
            <img src={logos}></img>
          </div>
          <div className='main-header'>
            <ul className='flexs'>
              <li><a>Home</a><IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
              <li><a>About</a> </li>
              <li><a>Service</a><IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
              <li><a>Page</a><IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
              <li><a>Blog</a> <IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
              <li><a>Contant</a></li>

              <div>
                <TbSearch className='search-icon'></TbSearch>
                <button className='btn'><a>Booking Tick</a></button>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* *****  Main-Menu end  ***** */}


      {/* Main-Menu-Slider Start*/}
      <div>
        <img src={sliders} className='Slider-img'></img>
        <div className='container '>
          <div className='m-div'>
            <button className='slider-text1'>SINCE 1987 COMPANY</button>
            <h1 className='slider-text2'>Shocking Revelation</h1>
            <h3><span className='slider-text3'>Visa Services</span></h3>
            <p className='slider-text4'>We bring over 35 years of public practice experience<br></br> to clients our firm is a family business. </p>
            <div className='slider-btn'>
              <button className='btn1'><a>Our Solution</a></button>
              <button className='btn2'><a>Read more</a></button>
            </div>
          </div>
        </div>
      </div>
      {/* Main-Menu-Slider End*/}


      {/* Visa-Service-area Start */}
      <div className='s-row'>
        <div class='visa-service-area flex container spacer'>
          <div>
            <h1 ><img src={brazil} class='icon1'></img></h1>
            <h3 className='visa-text1'>Brazil</h3>
            <h4 className='visa-text2'>Booking <FaArrowRight className='visa-icon'></FaArrowRight></h4>
          </div>
          <div>
            <h1 ><img src={usa} class='icon1'></img></h1>
            <h3 className='visa-text1' >Usa</h3>
            <h4 className='visa-text2'>Booking <FaArrowRight className='visa-icon'></FaArrowRight></h4>
          </div>
          <div>
            <h1 ><img src={brazil} class='icon1'></img></h1>
            <h3 className='visa-text1'>Brazil</h3>
            <h4 className='visa-text2'>Booking <FaArrowRight className='visa-icon'></FaArrowRight></h4>
          </div>
          <div>
            <h1 ><img src={usa} class='icon1'></img></h1>
            <h3 className='visa-text1' >Usa</h3>
            <h4 className='visa-text2'>Booking <FaArrowRight className='visa-icon'></FaArrowRight></h4>
          </div>

        </div>
      </div>

      {/* Visa-Service-area End */}


      {/* Visa-About-Area WElCOME TO POCKET START */}

      <div className='visa-about-area '>
        <div className='container spacer'>
          <div className='abot-row flex '>
            <div className='img-left'>
              <img src={leftimg}></img>
            </div>
            <div>
              <div className='about-content'>
                <h3 className='abouttext-1'>WELCOME TO POKET</h3>
                <h1 className='abouttext-2'>Not Just Traditional Visa &</h1>
                <h2 className='abouttext-3'>Immigration Firm</h2>
                <p className='abouttext-4'>There are locations in the United states of america as well as ationally. The organization was established in 2000 on the basis of a small idea conceived by its promoters that was incepted.</p>

                <div className='srevice-inner flex'>
                  <div className='service-1 flex'>
                    <i className='icon-1'><TfiWrite></TfiWrite></i>
                    <div >
                      <h3 className='visa1'>Visa Consultation</h3>
                      <p className='visa2'>We skillfuly guide the app licants for their.</p>
                    </div>
                  </div>
                  <div className='service-1 space flex'>
                    <i className='icon-1 '><TfiShoppingCart></TfiShoppingCart></i>
                    <div >
                      <h3 className='visa1'>Travel Business</h3>
                      <p className='visa2'>We skillfuly guide the app licants for their.</p>
                    </div>
                  </div>
                </div>
                <div className='aboutus-btn'>
                  <button className='btn-a'><a>Our About Us</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Visa-About-Area WElCOME TO POCKET END*/}


      {/* **********PROVIED SERVICE START******** */}
      <div className=' visa_start' >
        <div className='color '>
          <div className='container spacer '>
            <p class='contant'>
              <span className='srevice-text1'>OUR PROVIED SERVICE</span>
              <h1 className='srevice-text2'>We Provide Experts Create Great</h1>
              <h1 className='srevice-text3'>Value For Visa Categories</h1>
            </p>
            <div className='flex service-margin'>
              <div class='our-service  container'>
                <div>
                  <h1 ><RiPieChart2Line class='service-icon'></RiPieChart2Line></h1>
                  <h3 className='our-service1'>Skilled Worker</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>
              </div>
              <div class='our-service container'>
                <div>
                  <h1 >< TfiBag class='service-icon'></ TfiBag></h1>
                  <h3 className='our-service1'>Creative Idea</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>

              </div>
              <div class='our-service  container'>
                <div>
                  <h1 ><TiDeviceDesktop class='service-icon'></TiDeviceDesktop></h1>
                  <h3 className='our-service1'>Immigrat Experts</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>

              </div>
              <div class='our-service  container'>
                <div>
                  <h1 ><IoIosHome class='service-icon'></IoIosHome></h1>
                  <h3 className='our-service1'>Interior Design</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>
              </div>
            </div>
            <div className='flex provide-start'>
              <div class='our-service  container'>
                <div>
                  <h1 >< TfiCloudDown class='service-icon'></ TfiCloudDown></h1>
                  <h3 className='our-service1'>Skilled Worker</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>

              </div>

              <div class='our-service container'>
                <div>
                  <h1 >< TfiHeadphone class='service-icon'></ TfiHeadphone></h1>
                  <h3 className='our-service1'>Online Service</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>

              </div>
              <div class='our-service  container'>
                <div>
                  <h1 >< LiaClipboard class='service-icon'></ LiaClipboard></h1>
                  <h3 className='our-service1'>Apply Online Visa</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>

              </div>
              <div class='our-service  container'>
                <div>
                  <h1 >< FaCamera class='service-icon'></FaCamera></h1>
                  <h3 className='our-service1'>Photography</h3>
                  <h4 className='our-service2'>We have been counselling students for educa tional opportunities</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* **********PROVIED SERVICE END******** */}

        {/* ****** LOOKING FOR VISA APPLICATION START **** */}

        <div className='bgcolor spacer visa_end '>
          <div className='flex'>
            <div className='service-main flex'>
              <a><FiPhoneCall className='call-icon'></FiPhoneCall></a>
              <p className='service-text'>Looking For Visa <span className='font-color'>Applications Just Call Us!</span>
                <h6 className='call-us'>Call us today 1-999-123-45678 or email us: demo@example.com</h6>
              </p>
              <div>
                <button className='service-btn'>Book a Consultation</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* *******LOOKING FOR VISA APPLICATION END *********** */}


      {/* *************OUR MEMBAR START********** */}

      <div className=' spacer'>
        <div>
          <p class='our_member'>
            <h4 className='our-membertext'>OUR MEMBAR</h4>
            <h1 className='our-membertext2'>For The Immigration, Choose</h1>
            <h1 className='our-membertext3'>Country!</h1>
          </p>
          <div className='flex member-section'>
            <div className='member1'>
              <img src={ourmember1}></img>
            </div>
            <div className='member'>
              <img src={ourmember2}></img>
            </div>
            <div className='member'>
              <img src={ourmember1}></img>
            </div>
          </div>
        </div>

        <div className='flex container'>
          <div className='bg-color'>
            <h2 className='info'>Shene Watsan</h2>
            <h3 className='info2'>Director</h3>
          </div>
          <div className='bg-color break'>
            <h2 className='info'>Nicolas Poran</h2>
            <h3 className='info2'>Founder</h3>
          </div>
          <div className='bg-color break'>
            <h2 className='info'>Nicolas Poran</h2>
            <h3 className='info2'>Founder</h3>
          </div>
        </div>
      </div>

      {/* *************OUR MEMBAR END********** */}

      {/* Since 1990 We Have Branches Start */}

      <div className='about-content spacer flex'>
        <div>
          <h3 className='abouttext-1'>OUR AGENCY</h3>
          <h1 className='abouttext-2'>Since 1990 We Have Branches</h1>
          <h2 className='abouttext-3'>Over The World</h2>
          <p className='abouttext-4'>There are locations in the United states of america as well as ationally. The<br></br> organization was established in 2000 on the basis of a small idea conceived <br></br>by its promoters that was incepted.</p>
          <h4 className='capacity '>Business Planning</h4>
          <h4 className='capacity '>Financial Advices</h4>
          <h4 className='capacity '>Big Experience</h4>
        </div>
        <div className='baranch-img'>
          <img src={branches}></img>
        </div>
      </div>
      {/* Since 1990 We Have Branches END */}

      {/* ************OUR GALLERY START*********** */}

      <div className='OUR GALLERY'>
        <div>
          <div className='img-area'>
            <img className='poject-area' src={ourgallery}></img>
          </div>
          <div className='section' style={{ color: 'white' }}>
            <h4 className='text-1'>OUR GALLERY</h4>
            <h1 className='text-2'>For The Immigration, Choose</h1>
            <h2 className='text-3'>Country!</h2>
          </div>
        </div>
      </div>

      {/* ************OUR GALLERY END*********** */}


      {/* **********OUR SLIDER-IMAGE START*********  */}


      <div className='main'>
        <div className='flex slider-section'>
          <div className='member1'>
            <img className='img' src={oursliderimg1}></img>
          </div>
          <div className='member'>
            <img className='img' src={oursliderimg2}></img>
          </div>
          <div className='member'>
            <img className='img' src={oursliderimg1}></img>
          </div>
        </div>
        <div className='arrow-btn'>
          <button className='arrow'><FaLongArrowAltRight></FaLongArrowAltRight></button>
          <button className='arrow'><FaLongArrowAltLeft></FaLongArrowAltLeft></button>
        </div>
      </div>

      {/* **********OUR SLIDER-IMAGE END*********  */}


      {/* *****************Immigration Services From  START****************** */}

      <div className='visa-about-area '>
        <div className='container spacer'>
          <div className='abot-row flex '>
            <div className='img-left'>
              <img src={ouragency}></img>
            </div>
            <div>
              <div className='about-content area'>
                <h3 className='abouttext-1'>OUR AGENCY</h3>
                <h1 className='abouttext-2' style={{ fontSize: '35px', marginTop: '10px' }}>Immigration Services From</h1>
                <h2 className='abouttext-3'>Experienced Agents.</h2>
                <div className='tex' style={{ marginTop: '17px' }}>
                  <h2 style={{ marginTop: '60px', fontSize: '21px', fontWeight: '500' }}>Responsive & Pixel Perfect Design</h2>
                  <h2 style={{ marginTop: '60px', fontSize: '21px', fontWeight: '500' }}>High Qulity Data Security</h2>
                  <h2 style={{ marginTop: '60px', fontSize: '21px', fontWeight: '500' }}>Asing to business Security</h2>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* *****************Immigration Services From END****************** */}


      <div>
        <div>
          <p className='container'>
            <h4 className='text-m'>OUR LATEST UPDATE</h4>
            <h1 className='text-m2'>Our Work Business Innovation!</h1>
          </p>
          <div className='container flex'>
            {/* <button className='font'>See more blog</button> */}

          </div>
          <div className='flex business-section'>
            <div className='member1' style={{ paddingLeft: '50px' }}>
              <img src={businessimg3}></img>
            </div>
            <div className='member'>
              <img src={businessimg2}></img>
            </div>
            <div className='member'>
              <img src={businessimg1}></img>
            </div>
          </div>
        </div>

        <div className='flex container'>
          <div className='bussiness-content'>
            <h3 style={{ fontSize: '22px', margin: ' 10px 27px' }}>Company open green design data senter</h3>
            <div className='flex' style={{ margin: '12px' }}>
              <h4 className='text'><IoIosContact className='icon'></IoIosContact>pocket</h4>
              <h4 className='text'><FiClock className='icon' style={{ marginLeft: '20px' }}></FiClock>08 Jun 2022</h4>
            </div>
            <p style={{ textAlign: 'center', fontSize: '17px', marginTop: '16px' }}>There are full service engage ompany is provide Solution for employees needs trai..</p>
          </div>
          <div className='bussiness-content break'>
            <h3 style={{ fontSize: '22px', margin: ' 10px 27px' }}>Company open green design data senter</h3>
            <div className='flex' style={{ margin: '12px' }}>
              <h4 className='text'><IoIosContact className='icon'></IoIosContact>pocket</h4>
              <h4 className='text'><FiClock className='icon' style={{ marginLeft: '20px' }}></FiClock>08 Jun 2022</h4>
            </div>
            <p style={{ textAlign: 'center', fontSize: '17px', marginTop: '16px' }}>There are full service engage ompany is provide Solution for employees needs trai..</p>
          </div>
          <div className='bussiness-content break'>
            <h3 style={{ fontSize: '23px', margin: ' 10px 27px' }}>Company open green design data senter</h3>
            <div className='flex' style={{ margin: '12px' }}>
              <h4 className='text'><IoIosContact className='icon'></IoIosContact>pocket</h4>
              <h4 className='text'><FiClock className='icon' style={{ marginLeft: '20px' }}></FiClock>08 Jun 2022</h4>
            </div>
            <p style={{ textAlign: 'center', fontSize: '17px', marginTop: '16px' }}>There are full service engage ompany is provide Solution for employees needs trai..</p>
          </div>
        </div>
      </div>

      {/* *****FOOTER-START******** */}

      <div className='footer '>
        <div className='footer_txt container'>
          <div className='footer_part'>
            <img src={whitelogo}></img>
            <p>Round whitefish flat loach potted killifish ronquil. Long-finned pike escolar northern pike escolar nor thern squawfish eel.</p>
            <div className='footer-icon'>
              <i><TiSocialFacebook></TiSocialFacebook></i>
              <i><TiSocialTwitter></TiSocialTwitter></i>
              <i>< FaPinterestP></FaPinterestP></i>
            </div>
          </div>
          <div className='footer_part'>
            <h4>Useful Links</h4>
            <div>Software Development</div>
            <div>Web Development</div>
            <div>Community Meetups</div>
            <div>Cloud and DevOps</div>
            <div>Product Design</div>
          </div>
          <div className='footer_part1'>
            <h4>Address Us</h4>
            <div>2334 Peterson Street Kingston USA</div>
            <div>+199 1123-2234-21</div>
            <div>Example@gmail.com</div>
            <div >Opening Hours: 9:00 - 6:00</div>
          </div>
          <div className='footer_part'>
            <h4>Navigation</h4>
            <div>Become an Affiliate</div>
            <div>About Drone</div>
            <div>Community Meetups</div>
            <div >Why Buy With Us?</div>
            <div >Blog and News</div>
          </div>
        </div>
      </div>
<div className='main-copyright'>
<div class='container footer-last'>
Copyright © poket all rights reserved.
 </div>
</div>

      {/* *****FOOTER-END******** */}

    </div>

  );
}

export default App;
