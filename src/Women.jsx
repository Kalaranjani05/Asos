import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/Women.css";
import f1 from "../src/Images/f1.webp";
import f14 from "../src/Images/f14.webp";
import f13 from "../src/Images/f13.webp";
import f4 from "../src/Images/f4.webp";
import f5 from "../src/Images/f5.webp";
import f6 from "../src/Images/f6.webp";
import f7 from "../src/Images/f7.webp";
import f8 from "../src/Images/f8.webp";
import f9 from "../src/Images/f9.webp";
import f10 from "../src/Images/f10.webp";
import f11 from "../src/Images/f11.webp";
import f12 from "../src/Images/f12.webp";
import img19 from "../src/Images/a1.png";
import img20 from "../src/Images/a2.png";
import img21 from "../src/Images/a3.png";
import img22 from "../src/Images/a4.png";
import img23 from "../src/Images/a5.png";
import img24 from "../src/Images/a6.png";

const dresses = [
  { src: f1, price: 78, color: "red" },
  { src: f14, price: 89, color: "blue" },
  { src: f13, price: 68, color: "yellow" },
  { src: f4, price: 99, color: "green" },
  { src: f5, price: 88, color: "red" },
  { src: f6, price: 79, color: "blue" },
  { src: f7, price: 94, color: "yellow" },
  { src: f8, price: 75, color: "green" },
  { src: f9, price: 87, color: "red" },
  { src: f10, price: 77, color: "blue" },
  { src: f11, price: 100, color: "yellow" },
  { src: f12, price: 130, color: "green" },
];

const Women = () => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [wishlist, setWishList] = useState({});

  // const handleWishlist=()=>{
  //   setWishList(!wishlist)
  // }
  const handleWishlist = (index) => {
    setWishList((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const getFilteredDresses = () => {
    let filteredDresses = dresses;

    if (selectedPrice === "lowToHigh") {
      filteredDresses = filteredDresses.sort((a, b) => a.price - b.price);
    } else if (selectedPrice === "highToLow") {
      filteredDresses = filteredDresses.sort((a, b) => b.price - a.price);
    }

    return filteredDresses;
  };

  const filteredDresses = getFilteredDresses();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <ul id="one" className="col-lg-12 d-flex justify-content-end mb-0 ">
            <li className="p-1 mx-3"></li>
            <li className="p-1 mx-3">Marketplace</li>
            <li className="p-1 mx-3">Help & FAQs</li>
            <li className="p-1 mx-3"><img src={img20} alt="" style={{width:"15px"}}/></li>
          </ul>
        </div>
        <div className="row" id="main">
          <ul className="nav justify-content-between p-3" id="nav">
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
                <i className="fa-solid fa-user"></i>
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
                {/* {wishlist.length} */}
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>
            <li className="col-lg-1 nav-item">
              <Link className="nav-link" to="#">
                <i className="fa-solid fa-bag-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul
            className="col-lg-12 p-2 d-flex flex-wrap justify-content-start mb-0"
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
        <div className="row bg-primary" id="four">
          <ul className="col-12  d-flex justify-content-between align-items-center list-unstyled">
            <li
              className="mt-2  text-center nav4"
              style={{ width: "100px", height: "25px", cursor: "pointer" }}
            >
              WOMEN
            </li>
            <li className="mt-2 " style={{ color: "white", fontSize: "15px" }}>
              SALE: TO 70% OFF! <br /> Even bigger discounts
            </li>
            <li
              className="mt-2  text-center nav4"
              style={{ width: "100px", height: "25px", cursor: "pointer" }}
            >
              MEN
            </li>
          </ul>
        </div>
        <div className="row nav3">
          <div className="col-lg-12 p-3">
            <Link to="/app" className="hlink">
              Home
            </Link>
            <i className="fa-solid fa-greater-than dress"></i>
            <Link to="/women" className="hlink">
              Women
            </Link>
            <i className="fa-solid fa-greater-than dress"></i>
            <Link className="hlink" to="#">
              Floral Dresses
            </Link>
          </div>
          <hr />
        </div>
        <div className="row fd1">
          <h4 className="col-lg-12 text-center fdresses">Floral Dresses</h4>
        </div>
        <div className="row d-flex justify-content-center align-items-center content">
          <p className="col-lg-12  text-center" style={{ height: "100px" }}>
            What’s a wardrobe without a floral dress? Look to our edit of floral
            dresses for spring/summer vibes all year round. Whether it’s a
            special occasion or a casual day out, shop your floral mini dresses
            of dreams with ASOS DESIGN, featuring all the details you’ll love –
            like puff sleeves, ruffle trims and sequin embellishments. Brunch on
            the agenda? Get in your vintage era with midi floral dresses from
            Miss Selfridge – its ditsy prints and retro florals are blooming
            cute (trust us). And if that’s not enough, filter by Topshop for
            floral midi dresses and satin floral maxi dresses in seasonal pops
            of colour guaranteed to catch compliments at your next RSVP. Pair
            yours with a denim jacket and sandals, and we’ll see you at the
            checkout...
          </p>
        </div>
        <div className="row text-center  align-items-center mt-5 sorting">
          <div className="col-sm-2">
            <select
              id="sortDropdown"
              class="form-select"
              onChange={handlePriceChange}
            >
              <option value="highToLow">Price</option>
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
            </select>
          </div>
          <div className="col-sm-2">
            <select id="priceDropdown" className="form-select">
              <option value="">Size</option>
              {/* <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option> */}
            </select>
          </div>
          <div className="col-sm-2">
            <select id="sortDropdown" class="form-select">
              <option value="highToLow">Color</option>
            </select>
          </div>
          <div className="col-sm-2">
            <select id="sortDropdown" class="form-select">
              <option value="highToLow">Length</option>
              {/* <option value="highToLow">High to Low</option>
               <option value="lowToHigh">Low to High</option> */}
            </select>
          </div>
          <div className="col-sm-2">
            <select id="sortDropdown" class="form-select">
              <option value="highToLow">New</option>
              {/* <option value="highToLow">High to Low</option>
               <option value="lowToHigh">Low to High</option> */}
            </select>
          </div>
          <div className="col-sm-2">
            <select id="sortDropdown" class="form-select">
              <option value="highToLow">Brand</option>
              {/* <option value="highToLow">High to Low</option>
               <option value="lowToHigh">Low to High</option> */}
            </select>
          </div>
        </div>
        <div className="row">
          {filteredDresses.map((dress, index) => (
            <div key={index} className="col-sm-3 fimg text-center">
              <div className="position-relative">
                <img src={dress.src} alt="" className="w-75" />
                <i
                  className="fa-solid fa-heart heart-icon"
                  style={{ color: wishlist[index] ? "red" : "gray" }}
                  onClick={() => handleWishlist(index)}
                ></i>
              </div>
              <p className="imgcontent">
                Floral Dress <span>${dress.price}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="row" style={{ background: "lightgray" }} id="footer1">
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

export default Women;
