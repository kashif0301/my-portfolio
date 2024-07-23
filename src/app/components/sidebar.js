import React from "react";
import RootLayout from "../layout";
import Styles from "../styles/sidebar.module.css"
import Green from "./green";
import Link from "next/link";


const Sidebar = () => {
  
  return (
    <div className="row h-100">
      <div className="col-sm-12 col-md col-lg-3">
        <nav className="navbar w-100 navbar-expand-lg d-flex flex-column position-sticky top-0 ">
          <button style={{color:"white", background:"white"}}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav text-center d-flex flex-column ${Styles.fontsize}`}>
              <li className="nav-item active p-2 ">
                <Link className="nav-link border-bottom " href="/"><i className={`fa fa-home  ${Styles.iconsize}`}></i><br/>
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link border-bottom" href="/about"> <i className={`fa fa-user ${Styles.iconsize}`}></i><br/>
                  About Me
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link border-bottom" href="/career">
                  <i
                    className={`fa fa-book iconsize ${Styles.iconsize}`}
                    aria-hidden="true"
                  ></i><br/>
                  Career
                </Link>
              </li>
              <li className="nav-item p-2 border-bottom">
                <Link href="#" className="nav-link "><i className={`fa fa-envelope ${Styles.iconsize}`}></i><br/>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col-sm-12 col-md col-lg-9">
        <Green/>
      </div>
    </div>
  );
};

export default Sidebar;
