"use client";
import "animate.css/animate.min.css";
import React, { useState } from "react";
import Styles from "../styles/about.module.css";
import Image from "next/image";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerPadding:"1px",
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="aboutmain mt-2 animate__animated animate__zoomInDown">
      <div className="row">
        <div className={Styles.heading}>
          <h2>
            About <span className={`${Styles.fontgreen}`}>Me</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <h2>Contact</h2>
          <div className="contactdetails">
            <p>
              <span className={`font-weight-bold ${Styles.fontgreen}`}>
                Email:
              </span>
              kashifnawaz0301@gmail.com
            </p>
            <p>
              <span className={`font-weight-bold ${Styles.fontgreen}`}>
                Whatsapp:
              </span>
              +923017172844
            </p>
            <p>
              <span className={`font-weight-bold ${Styles.fontgreen}`}>
                Residence:
              </span>
              Al-Riyadh,Saudi Arabia
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="heading">
          <h2>
            Recent Team <span className={`${Styles.fontgreen}`}>Mates</span>
          </h2>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-11">
        <div className="slider-container w-100 m-lg-2">
         <Slider {...settings}>
            <div className="card bg-transparent">
              <div className="cardupper p-4 position-relative ">
                <div className={`cardinner border pt-5 ${Styles.cardhover}`}>
                  <div className="image d-flex justify-content-center">
                    <Image
                      className="rounded-circle position-absolute top-0"
                      src="/myprofile.jpeg"
                      width={75}
                      height={75}
                      alt="clients"
                    />
                  </div>
                  <div className="review text-center mt-3">
                    <p className="p-2 text-justify" style={{color:"white"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non risus. Suspendisse lectus tortor, dignissim sit
                      amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-transparent">
              <div className="cardupper p-4 position-relative ">
                <div className={`cardinner border pt-5 ${Styles.cardhover}`}>
                  <div className="image d-flex justify-content-center">
                    <Image
                      className="rounded-circle position-absolute top-0"
                      src="/myprofile.jpeg"
                      width={75}
                      height={75}
                      alt="clients"
                    />
                  </div>
                  <div className="review text-center mt-3">
                    <p className="p-2 text-justify" style={{color:"white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non risus. Suspendisse lectus tortor, dignissim sit
                      amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-transparent">
              <div className="cardupper p-4 position-relative ">
                <div className={`cardinner border pt-5 ${Styles.cardhover}`}>
                  <div className="image d-flex justify-content-center">
                    <Image
                      className="rounded-circle position-absolute top-0"
                      src="/myprofile.jpeg"
                      width={75}
                      height={75}
                      alt="clients"
                    />
                  </div>
                  <div className="review text-center mt-3">
                    <p className="p-2 text-justify" style={{color:"white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non risus. Suspendisse lectus tortor, dignissim sit
                      amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
           
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6"></div>
      </div>
      <div className="row">
        <div className="heading">
          <h2>
            Fun <span className={`${Styles.fontgreen}`}>Facts</span>
          </h2>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div className="cardouter d-flex justify-content-center align-items-center">
            <div className="cardinner p-3 border text-center">
              <h4>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => {
                    setCounterOn(false);
                  }}
                >
                  {counterOn && <CountUp start={0} end={500} duration={5} />}
                </ScrollTrigger>
              </h4>
              <h4>Movies Watched</h4>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">2</div>
        <div className="col-sm-12 col-md-12 col-lg-4">3</div>
      </div>
    </div>
  );
};

export default About
