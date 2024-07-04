import React from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../src/Images/1.webp";
import img2 from "../src/Images/2.webp";
import img3 from "../src/Images/3.webp";
import img4 from "../src/Images/4.webp";
import img5 from "../src/Images/5.webp";
import img6 from "../src/Images/6.webp";
import vdo from "../src/Images/vdo.mp4";
import img7 from "../src/Images/7.avif";
import img8 from "../src/Images/8.avif";
import img9 from "../src/Images/9.avif";
import img10 from "../src/Images/10.avif";
import img11 from "../src/Images/11.webp";
import img12 from "../src/Images/12.webp";
import img13 from "../src/Images/13.webp";
import img14 from "../src/Images/14.avif";
import img15 from "../src/Images/15.avif";
import img16 from "../src/Images/16.avif";
import img17 from "../src/Images/17.webp";
import img18 from "../src/Images/18.webp";
import img19 from "../src/Images/a1.png";
import img20 from "../src/Images/a2.png";
import img21 from "../src/Images/a3.png";
import img22 from "../src/Images/a4.png";
import img23 from "../src/Images/a5.png";
import img24 from "../src/Images/a6.png";



import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" >
          <ul id="one" className="col-lg-12 d-flex justify-content-end mb-0 ">
            <li className="p-1 mx-3"></li>
            <li className="p-1 mx-3">Marketplace</li>
            <li className="p-1 mx-3">Help & FAQs</li>
            <li className="p-1 mx-3"><img src={img20} alt="" style={{width:"15px"}}/></li>
          </ul>
        </div>

        {/* <div className="row" id="main">
          <ul className="col-lg-12 nav justify-content-between p-3" id="nav">
            <li className="nav-item">
              <Link className="link" to="/app">
                <h2>asos</h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/women">
                WOMEN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/men">
                MEN
              </Link>
            </li>
            <li className="nav-item">
              <input
                id="search"
                type="text"
                className="form-control "
                placeholder="Search..."
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </li>
            
            <li className="nav-item dropdown">
              <Link className="nav-link " to="#" id="profile-link" >
              <i class="fa-solid fa-user" ></i>
              </Link>
              <div className="dropdown-menu" id="profile-dropdown">
                <Link className="dropdown-item" to="#">
                  My Account
                </Link>
                <Link className="dropdown-item" to="#">
                  My Orders
                </Link>
                <Link className="dropdown-item" to="/login">
                  Logout
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i class="fa-solid fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="row" id="main">
          <ul className=" nav justify-content-between p-3" id="nav">
            <li className="col-lg-1 nav-item">
              <Link className="link" to="/app">
                <h2>asos</h2>
              </Link>
            </li>
            <li className="col-lg-1 nav-item">
              <Link className="nav-link" to="/women">
                WOMEN
              </Link>
            </li>
            <li className="col-lg-1 nav-item">
              <Link className="nav-link" to="/men">
                MEN
              </Link>
            </li>
            <li className="col-lg-6 nav-item">
              <input
                id="search"
                type="text"
                className="form-control "
                placeholder="Search..."
                style={{ width: "100%", maxWidth: "600px" }}
              />
            </li>

            <li className="col-lg-1 nav-item dropdown">
              <Link className="nav-link " to="#" id="profile-link">
                <i class="fa-solid fa-user"></i>
              </Link>
              <div className="dropdown-menu" id="profile-dropdown">
                <Link className="dropdown-item" to="#">
                  My Account
                </Link>
                <Link className="dropdown-item" to="#">
                  My Orders
                </Link>
                <Link className="dropdown-item" to="/login">
                  Logout
                </Link>
              </div>
            </li>
            <li className="col-lg-1 nav-item">
              <Link className="nav-link" to="#">
                <i class="fa-solid fa-heart"></i>
              </Link>
            </li>
            <li className="col-lg-1 nav-item">
              <Link className="nav-link" to="#">
                <i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          <ul
            className="col-lg-12 d-flex flex-wrap justify-content-start mb-0"
            id="lists"
          >
            <li className=" mx-2 bg-danger">Sale</li>
            <li className=" mx-2">New in</li>
            <li className=" mx-2">Clothing</li>
            <li className=" mx-2">Trending</li>
            <li className=" mx-2">Dresses</li>
            <li className=" mx-2">Shoes</li>
            <li className=" mx-2">Face + Body</li>
            <li className=" mx-2">Accessories</li>
            <li className=" mx-2">Brands</li>
            <li className=" mx-2">Sportswear</li>
            <li className=" mx-2">Topshop</li>
            <li className=" mx-2">Marketplace</li>
          </ul>
        </div>

        <div className="row bg-danger" id="four">
          <ul className="col-12  d-flex justify-content-between list-unstyled">
            <li
              id="li"
              className="mt-2 p-1 text-center"
              style={{ width: "100px", cursor: "pointer" }}
            >
              WOMEN
            </li>
            <li className="mt-2 p-1">UP TO 60% OFF THE SALE</li>
            <li
              id="li"
              className="mt-2 p-1 text-center"
              style={{ width: "100px", cursor: "pointer" }}
            >
              MEN
            </li>
          </ul>
        </div>
        <div className="row bg-danger d-flex flex-wrap justify-content-center align-items-center text-center">
          <div className="col-12">
            <button id="button" type="button" className="btn btn-light mt-5">
              SALE
            </button>
            <h1>UP TO 60% OFF</h1>
            <p>Limited time only. Selected styles marked down as shown.</p>
          </div>
        </div>
        <div className="row bg-danger p-5" id="imgp">
          <div className="col-sm-2">
            <img className="w-100" src={img1} alt="" />
            <p className="text-center bg-white p-2">BESTSELLERS</p>
          </div>
          <div className="col-sm-2">
            <img className="w-100" src={img2} alt="" />
            <p className="text-center bg-white p-2">DRESSES</p>
          </div>
          <div className="col-sm-2">
            <img className="w-100" src={img3} alt="" />
            <p className="text-center bg-white p-2">SHOES & SNEAKS</p>
          </div>
          <div className="col-sm-2">
            <img className="w-100" src={img4} alt="" />
            <p className="text-center bg-white p-2">TOPS</p>
          </div>
          <div className="col-sm-2">
            <img className="w-100" src={img5} alt="" />
            <p className="text-center bg-white p-2">SWIM</p>
          </div>
          <div className="col-sm-2">
            <img className="w-100" src={img6} alt="" />
            <p className="text-center bg-white p-2">BIGGEST DEALS</p>
          </div>
          <div
            className="row bg-danger d-flex justify-content-center align-items-center text-center"
            style={{ height: "200px" }}
          >
            <div className="col-12 d-flex justify-content-center align-items-center">
              <button id="btn2" type="button" className="btn btn-light mb-5">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-center ">
            <video width="600" autoPlay controls className="w-100">
              <source src={vdo} className="w-100" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row mt-5" id="port">
          <div className="col-3">
            <img className="w-100" src={img7} alt="" />
            <p className="text-center">SUMMER RODEO</p>
          </div>
          <div className="col-3">
            <img className="w-100" src={img8} alt="" />
            <p className="text-center">TRENDING: GIRLCORE</p>
          </div>
          <div className="col-3">
            <img className="w-100" src={img9} alt="" />
            <p className="text-center">MISS SELFRIDGE</p>
          </div>
          <div className="col-3">
            <img className="w-100" src={img10} alt="" />
            <p className="text-center">THE ORDINARY MILK TONER</p>
          </div>
        </div>
        <div className="row  text-center mt-3" id="twoimg">
          <div className="col-6">
            <img src={img11} alt="" className="w-75" />
            <h3>TOPSHOP</h3>
            <button
              className="btn btn-light mt-3 p-3"
              style={{ border: "2px solid black", fontWeight: "bold" }}
            >
              SHOP NOW
            </button>
          </div>
          <div className="col-6">
            <img src={img12} alt="" className="w-75" />
            <h3>SEOUL EDIT</h3>
            <button
              className="btn btn-light mt-3 p-3"
              style={{ border: "2px solid black", fontWeight: "bold" }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="row mt-5" id="stock">
          <div className="col-12 text-center p-3">
            <button
              className="btn btn-light "
              style={{
                border: "2px solid black",
                width: "200px",
                borderRadius: "20px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              THE ASOS APP
            </button>
            <h3 className="mt-3">
              Fave piece sold out? <br />
              Get back-in-stock alerts on the app
            </h3>
            <button
              className="btn btn-light w-25 mt-3"
              style={{
                border: "2px solid black",
                color: "white",
                background: "black",
                borderRadius: "20px",
              }}
            >
              DOWNLOAD NOW
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="text-center">TRENDING BRANDS</h3>
          <div>
            <img className="col-2" src={img13} alt="" />
            <img className="col-2" src={img14} alt="" />
            <img className="col-2" src={img15} alt="" />
            <img className="col-2" src={img16} alt="" />
            <img className="col-2" src={img17} alt="" />
            <img className="col-2" src={img18} alt="" />
          </div>
        </div>
        <div className="row" style={{ borderTop: "1px solid lightgray" }}>
          <div
            className="col-12 d-flex justify-content-center "
            style={{ height: "45px" }}
          >
            <p className="p-2">
              <i
                style={{ color: "blue", fontSize: "30px" }}
                class="fa-brands fa-facebook"
              ></i>
            </p>
            <p className="p-2">
              <i
                style={{ color: "violet", fontSize: "30px" }}
                class="fa-brands fa-instagram"
              ></i>
            </p>
            <p className="p-2">
              <i
                style={{ color: "yellow", fontSize: "30px" }}
                class="fa-brands fa-snapchat"
              ></i>
            </p>
            <p className="p-2">
              <i
                style={{ color: "blue", fontSize: "30px" }}
                class="fa-brands fa-cc-visa"
              ></i>
            </p>
            <p className="p-2">
              <i
                style={{ color: "blue", fontSize: "30px" }}
                class="fa-brands fa-cc-paypal"
              ></i>
            </p>
          </div>
        </div>
        <div
          className="row   "
          style={{ background: "lightgray" }}
          id="footer1"
        >
          <div className="col-sm-3 mt-3 ">
            <h5>HELP & INFORMATION</h5>
            <p>Help</p>
            <p>Track order</p>
            <p>Delivery & returns</p>
            <p>Sitemap</p>
          </div>
          <div className="col-sm-3 mt-3 pl-3">
            <h5>ABOUT ASOS</h5>
            <p>About us</p>
            <p>Careers at ASOS </p>
            <p>Corporate responsibility</p>
            <p>Investors' site</p>
          </div>
          <div className="col-sm-3 mt-3 pl-2">
            <h5>MORE FROM ASOS</h5>
            <p>Mobile and ASOS </p>
            <p>ASOS Marketplace</p>
            <p>Gift vouchers</p>
            <p>Black Friday</p>
            <p>ASOS x Thrift+</p>
            <p>Discover the ASOS Credit Card</p>
            <p>Help Improve the ASOS Website</p>
          </div>
          <div className="col-sm-3 mt-3">
            <h5>SHOPPING FROM:</h5>
            <p>You're in <img src={img20} alt="" style={{width:"15px"}}/> India CHANGE</p>
            <p>Some of our international sites:</p>
            <img className="px-1" src={img19} alt="" style={{width:"20px"}}/>
            <img className="px-1" src={img21} alt="" style={{width:"20px"}}/>
            <img className="px-1" src={img22} alt="" style={{width:"20px"}}/>
            <img className="px-1" src={img23} alt="" style={{width:"20px"}}/>
            <img className="px-1" src={img24} alt="" style={{width:"20px"}}/>
          </div>
        </div>
        <div className="row" style={{ background: "whitesmoke" }}>
          <div className="col-12 d-flex justify-content-end" id="footer">
            <p>Privacy & Cookies</p>
            <p>Ts&Cs</p>
            <p>Accessibility</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
