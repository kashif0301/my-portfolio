import 'animate.css/animate.min.css'
import React from "react";
import Styles from "../styles/career.module.css";
const Career = () => {
  const experiences = [
    {
      date: "2022-2024",
      title:"Front End Developer",
      description :"After my Graduation i joined Esol technologies LAhore in October 2022 as React Js Developer. I worked for the organization for 1.5 years. My experience there has been excellent. I learnt new technologies like Node Js React js and Next js There"
    }
  ]
  const managingskills = [
    {
      name: "Leadership",
      value: "90%",
    },
    {
      name: "Managing",
      value: "80%",
    },
    {
      name: "Research",
      value: "85%",
    },
  ];
  const codingskills = [
    {
      name: "html css",
      value: "90",
    },
    {
      name: "Javascript",
      value: "85",
    },
    {
      name: "React JS",
      value: "80",
    },
    {
      name: "Node Js & EXpress JS",
      value: "75",
    },
    {
      name: "Mysql & mongodb",
      value: "80",
    },
  ];
  return (
    <div className="careermain mt-3 animate__animated animate__zoomIn">
      <div className="row">
        <div className="heading">
          <h2>
            Experiences & <span className={`${Styles.fontgreen}`}>Skills</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-7">
          <div className="row">
            <h3>Experiences</h3>
          </div>
        {
          experiences.map((items,index)=>{
            return (
              <div className="row" key={index}>
              <div className="col-sm-12 col-md-12 col-lg-3">
                <div key={index} className={`tenure ${Styles.greenborder}`}>
                  <p className="text-right">{items.date}</p>
                </div>
              </div>
  
              <div className="col-sm-12 col-md-12 col-lg-9">
                <div className="details">
                  <h5> {items.title}</h5>
                  <p className="text-justify">
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
            )
          })
        }
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="managing">
            <h3>
              Managing <span className={`${Styles.fontgreen}`}>Skills</span>
            </h3>
            <div className="skillsbars  animate__animated animate__slideInRight">
              {managingskills.map((items, index) => {
                return (
                  <div className="singlebar mt-3" key={index}>
                    <div
                      className="nameinfo d-flex justify-content-between"
                      style={{ height: "24px" }}
                    >
                      <p>{items.name}</p>
                      <p>{items.value}</p>
                    </div>
                    <div className={`${Styles.barouter}`}>
                      <div
                        className={`barinner h-100 ${Styles.baranimate}`}
                        style={{ width: `${items.value}` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Coding mt-5">
            <h3>
              Coding <span className={`${Styles.fontgreen}`}>Skills</span>
            </h3>
            <div className="skillsbars  animate__animated animate__slideInLeft">
              {codingskills.map((items, index) => {
                return (
                  <div className="singlebar mt-3" key={index}>
                    <div
                      className="nameinfo d-flex justify-content-between"
                      style={{ height: "24px" }}
                    >
                      <p>{items.name}</p>
                      <p>{items.value}%</p>
                    </div>
                    <div className={`${Styles.barouter}`}>
                      <div
                        className={`barinner h-100 ${Styles.baranimate}`}
                        style={{ width: `${items.value}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
