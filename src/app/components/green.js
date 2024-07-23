"use client"
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Styles from "../styles/green.module.css";

const Green = () => {
  const [ currenttime ,setCurrenttime] = useState(new Date().toLocaleTimeString());
  
  useEffect(()=>{
    const timer = setInterval(() => {
      setCurrenttime(new Date().toLocaleTimeString())
      
    }, 1000);
    return ()=>clearInterval(timer);
  },[]);
  return (
    <div className={`greensection position-sticky top-0 d-flex justify-content-center align-items-center ${Styles.green}`}>
        <div className="imageandinfo green d-flex flex-column justify-content-center align-items-center">
          <p style={{fontSize:"3rem", fontWeight:"500"}}>{currenttime}</p>
            <Image
            className="rounded-circle"
            src="/myprofile.jpeg"
            width={200}
            height={200}
            alt="Kashif Nawaz"
            />
            <div className="info mt-3">
                <h6 className="text-center pl-3 pr-3">
                    Software Engineer | <br/> Full Stack Developer
                </h6>

            </div>

        </div>
      
    </div>
  );
};

export default Green;
