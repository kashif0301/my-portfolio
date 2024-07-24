"use client";
import "animate.css/animate.min.css";
import styles from "./page.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Front End Developer"],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 70,
    delaySpeed: 1000,
  });

  return (
    <div className="homepage h-100  animate__animated animate__flipInY">
      <p className="hello mt-4" style={{ fontSize: "25px" }}>
        Hello, My name is
      </p>
      <h1 style={{ fontSize: "80px", fontWeight: "700" }}>Kashif Nawaz</h1>
      <p className="mt-3" style={{ width: "50%", textAlign: "justify" }}>
        i am a MERN STACK developer having experience as a Front End Developer
        in Esol technologies lahore, Looking forward to explore some
        oppurtunities as MERN STACK developer in the industry.
      </p>
      <h4 className="fontgreen" style={{ fontSize: "3rem" }}>
        {text}
        <Cursor />
      </h4>
      <button
        style={{
          width: "150px",
          borderRadius: "10px",
          height: "70px",
          backgroundColor: "#D36B00",
          color: "white",
        }}
      >
        {" "}
        Donwload CV
      </button>
    </div>
  );
}
