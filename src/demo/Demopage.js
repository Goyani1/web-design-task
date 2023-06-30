import React from "react";
import "./demopage.css";

//image
import logo from "../image/logo.png";
import ball from "../image/ball.png";
import parson from "../image/parson.png";
import right_arrow from "../image/rightarror.png";
import internet from "../image/internet.png";
import down_arrow from "../image/downarrow.png";
import arrow from "../image/arrorw.png";
import code from "../image/code.png";
import edit from "../image/edit.png";
import followline from "../image/followline.png";
import pencil from "../image/pencil.png";
import siymbol_1 from "../image/symbol6.png";
import siymbol_2 from "../image/symbol5.png";
import siymbol_3 from "../image/symbol4.png";
import siymbol_4 from "../image/siymbol-3.png";
import siymbol_5 from "../image/siymbol2.png";
import siymbol_6 from "../image/siymbol1.png";
import siymbol_7 from "../image/siymbol.png";
import siymbol_8 from "../image/uob.png";
import bookmark from "../image/bookmak.png";
import star from "../image/star.png";
import job from "../image/job.png";
import location from "../image/location.png";
import icon_1 from "../image/icon-1.png";
import icon_2 from "../image/icon-2.png";
import icon_3 from "../image/icon-3.png";
import icon_4 from "../image/icon-4.png";
import icon_5 from "../image/icon-5.png";
import mobile from "../image/mobile.png";
import instagram from "../image/instagram.png";
import linkedin from "../image/likedin.png";
import email from "../image/email.png";
import whatsapp from "../image/whatsapp.png";
import search from "../image/search.png";

const Demopage = () => {
  //toggle button fun
  const responsiveNav = () => {
    let x = document.getElementById("top");
    if (x.className === "sub-section") {
      x.className += "active";
    } else {
      x.className = "sub-section";
    }
  };
  return (
    <div className="main">
      <div className="sub-main-1">
        {/* navbar section */}
        <div className="navbar">
          <div className="navbar-section">
            <img src={logo} alt="logo" className="logo" />
          </div>

          {/* toggle-button */}
          <a className="toggle-button" onClick={responsiveNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <ul className="sub-section" id="top">
            <h3 className="font-1" style={{ color: "#0969C3" }}>
              Home
            </h3>
            <h3 className="font-1">My jobs</h3>
            <img src={ball} alt="logo" className="navbar-icon" />
            <img src={parson} alt="logo" className="navbar-icon" />
            <div className="sub-section-1">
              <h3 className="font-1">For Employer</h3>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 11, height: 13 }}
              />
            </div>
            <div className="sub-section-2">
              <img src={internet} alt="internet" className="navbar-icon" />
              <h4 className="font-1">EN</h4>
              <img src={down_arrow} alt="down_arrow" className="navbar-icon" />
            </div>
          </ul>
        </div>
        <div className="sub-main">
          <h1>
            Find the perfect job <br />
            for you
          </h1>
          <p className="font-3">
            Search your career opportunity through 12,800 jobs
          </p>
          <div className="input-box">
            <input
              className="sub-input-box"
              placeholder="Search by job title, company or keywords"
            />
            <input
              className="sub-input-box-1"
              placeholder="Province, city, or region"
            />
            <img src={search} alt="search" className="search-icon" />
          </div>
          <div className="main-button-div">
            <h4 style={{ textAlign: "left" }}>Popular Searches</h4>
            <div className="button-div">
              <button>Designer</button>
              <button>Writer</button>
              <button>Team leader</button>
              <button>Senior</button>
              <button>Web designer</button>
            </div>
          </div>
        </div>
      </div>

      {/* sub-section */}
      <div className="sub-main-2">
        <div className="search-section-text">
          <h5>Search by Category</h5>
          <div className="sub-search-section">
            <h6>All Categories</h6>
            <img src={arrow} className="image" alt="" />
          </div>
        </div>

        {/* item-1 */}
        <div className="search-item">
          <div className="sub-search-item">
            <img src={followline} alt="" className="sub-img" />
            <div className="sub-search-text">
              <h6 className="font-1">Business Development</h6>
              <p className="font-2">2 Openings</p>
            </div>
          </div>
          <div className="sub-search-item">
            <img src={edit} alt="" className="sub-img-1" />
            <div className="sub-search-text">
              <h6 className="font-1">Designing</h6>
              <p className="font-2">3 Openings</p>
            </div>
          </div>
          <div className="sub-search-item">
            <img src={pencil} alt="" className="sub-img-2" />
            <div className="sub-search-text">
              <h6 className="font-1">Development</h6>
              <p className="font-2">3 Openings</p>
            </div>
          </div>
          <div className="sub-search-item">
            <img src={code} alt="" className="sub-img-3" />
            <div className="sub-search-text">
              <h6 className="font-1">Content writer</h6>
              <p className="font-2">3 Openings</p>
            </div>
          </div>
          <div className="sub-search-item">
            <img src={pencil} alt="" className="sub-img-2" />
            <div className="sub-search-text">
              <h6 className="font-1">Development</h6>
              <p className="font-2">3 Openings</p>
            </div>
          </div>
          <div className="sub-search-item">
            <img src={code} alt="" className="sub-img-3" />
            <div className="sub-search-text">
              <h6 className="font-1">Content writer</h6>
              <p className="font-2">3 Openings</p>
            </div>
          </div>
          <div className="sub-search-item">
            <img src={followline} alt="" className="sub-img" />
            <div className="sub-search-text">
              <h6 className="font-1">Business Development</h6>
              <p className="font-2">2 Openings</p>
            </div>
          </div>
          <div className="sub-search-item">
            <img src={edit} alt="" className="sub-img-1" />
            <div className="sub-search-text">
              <h6 className="font-1">Designing</h6>
              <p className="font-1">3 Openings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="job-section">
        <div className="sub-job-section">
          <div className="job-title">
            <h3 className="job-title-text">Featured Job Offers</h3>
          </div>
          <div className="sub-job-contain">
            {/* crad-1 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_1} alt="" className="job-img" />
                <h5 className="symbol-text">
                  Tech Rookie Internship Program (TRIP) - iOS Eng...
                </h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6>PT Midas Daya Teknologi</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* card-2 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_2} alt="" className="job-img" />
                <h5 className="symbol-text">
                  Business Development Support - Bandung
                </h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6>Lalamove</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* card-3 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_3} alt="" className="job-img" />
                <h5 className="symbol-text">
                  Program Management Officer - Multimedia Nusantara Poly...
                </h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6>Kompas Group</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* card-4 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_4} alt="" className="job-img" />
                <h5 className="symbol-text">Cyber Security Engineer</h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6 style={{ textAlign: "left" }}>Group Avows</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* card-5 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_5} alt="" className="job-img" />
                <h5 className="symbol-text">Visual Designer (Freelance)</h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6 style={{ textAlign: "left" }}>Whiz (YC W22)</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* card-6 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_6} alt="" className="job-img" />
                <h5 className="symbol-text">Risk Manager</h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6 style={{ textAlign: "left" }}>Julo</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* card-7 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_7} alt="" className="job-img" />
                <h5 className="symbol-text">
                  Transporter Management Executive
                </h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6 style={{ textAlign: "left" }}>Logisly</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* card-8 */}
            <div className="subs-job-contain">
              <div className="job-symbol">
                <img src={siymbol_8} alt="" className="job-img" />
                <h5 className="symbol-text">Capacity & Configuration</h5>
                <img src={bookmark} alt="" className="bookmark" />
              </div>
              <div className="job-main-details">
                <div className="sub-job-text">
                  <h6 style={{ textAlign: "left" }}>UOB</h6>
                  <div className="sub-job-rewyou">
                    <img src={star} alt="star" className="star-img" />
                    <h6 className="">4.1 | 50+ reviews</h6>
                  </div>
                </div>
                <div className="sub-job-text sub-job-rewyou ">
                  <div className="job-symbol">
                    <img src={job} alt="job" className="icon" />
                    <h6>Fresher</h6>
                  </div>
                  <div className="job-symbol">
                    <img src={location} alt="location" className="icon" />
                    <h6>Jakarta</h6>
                  </div>
                  <p>23 hours ago</p>
                </div>
                <div className="job-discription sub-job-rewyou">
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6 style={{ textAlign: "start" }}>
                      Tech Rookie Internship Program (TRIP) - Data Analyst
                      Intern
                    </h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Internship</h6>
                  </div>
                  <div className="sub-job-rewyou">
                    <span style={{ fontSize: "20px" }}>&#9679;</span>
                    <h6> Hybrid</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job-button">
            <button className="sub-job-button">
              All Job Offers{" "}
              <img
                src={right_arrow}
                alt="rightarrow"
                style={{ color: "white", height:11 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* companie_section */}
      <div className="companie_section">
        <div className="sub-companie">
          <div className="job-title">
            <h3 className="job-title-text">Featured Job Offers</h3>
          </div>
          <div className="sub-companie_section">
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_1} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Pegipegi</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_3} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Kompas Group</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_5} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Group Avows</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_4} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Lalamove</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_3} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">PT Midas Daya Teknologi</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_4} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Siemens</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_2} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Siemens</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_3} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">eFishery</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_2} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Cermati</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_5} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">Whiz (YC W22)</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_6} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">JULO</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
            <div className="companie">
              <div className="companie-reting">
                <img src={siymbol_8} style={{ width: 30, height: 30 }} alt="" />
                <div>
                  <h6 className="font-1">UOB</h6>
                  <div className="companie-reting">
                    <img src={star} alt="star" className="star-img" />
                    <p className="font-2">4.9 | 50+ reviews</p>
                  </div>
                </div>
              </div>
              <img
                src={right_arrow}
                alt="right_arrow"
                style={{ width: 12, height: 17 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* companie_logo */}
      <div className="companie_section-1">
        <h3>
          We've helped <span style={{ color: "#40B5E8" }}>2000+</span> world's
          best companies
        </h3>
        <div className="companie_logo">
          <img src={icon_5} alt="" style={{ width: 136, height: 38 }} />
          <img src={icon_4} alt="" style={{ width: 163, height: 49 }} />
          <img src={icon_2} alt="" style={{ width: 160, height: 43 }} />
          <img src={icon_3} alt="" style={{ width: 178, height: 37 }} />
          <img src={icon_1} alt="" style={{ width: 139, height: 63 }} />
        </div>
      </div>

      <div className="mobile-image">
        <img src={mobile} alt="mobile" className="sub-mobile_img" />
      </div>

      {/* footer section */}
      <div className="footer_section">
        <div className="sub-companie sub-footer_section">
          <div className="sub-footer">
            <div>
              <img src={logo} alt="logo" style={{ width: 61, height: 41 }} />
              <div className="follow-link">
                <h6>Follow us on</h6>
                <img
                  src={instagram}
                  alt="instagram"
                  style={{ width: 14, height: 14 }}
                />
                <img
                  src={linkedin}
                  alt="linkedin"
                  style={{ width: 18, height: 18 }}
                />
              </div>
            </div>
            <div className="comman-1">
              <h5>Connect with Us</h5>
              <div className="comman">
                <img
                  src={email}
                  alt="email"
                  style={{ width: 15, height: 15 }}
                />
                <p className="font-2">info@obit.com</p>
              </div>
              <div className="comman">
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  style={{ width: 15, height: 15 }}
                />
                <p className="font-2">99325-433265</p>
              </div>
            </div>
            <div className="comman-1">
              <h6>Terms & Condition</h6>
              <h6>Privacy Policy</h6>
              <h6>About us</h6>
              <h6>FQA</h6>
            </div>
            <div className="comman-1 ">
              <h6 className="font-2">Blogs</h6>
              <h6 className="font-2">For JobSeecers</h6>
              <h6 className="font-2">For Empoyers</h6>
            </div>
          </div>
          <div className="comman-3">
            <h6 className="font-1" style={{ textAlign: "center" }}>
              © 2022 <span style={{ color: "#40B5E8" }}>Orbit jobs</span> All
              right reserved
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demopage;
