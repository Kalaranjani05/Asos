import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../src/Men.css";
import img19 from "../src/Images/a1.png";
import img20 from "../src/Images/a2.png";
import img21 from "../src/Images/a3.png";
import img22 from "../src/Images/a4.png";
import img23 from "../src/Images/a5.png";
import img24 from "../src/Images/a6.png";

const Men = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartView, setIsCartView] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((values) => {
        console.log(values);
        setItems(values);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const toggleCartView = () => {
    setIsCartView((prevView) => !prevView);
  };

  const handleInc = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updatedCart[index].totalPrice =
      updatedCart[index].quantity * updatedCart[index].price;
    setCart(updatedCart);
  };

  const handleDec = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].totalPrice =
        updatedCart[index].quantity * updatedCart[index].price;
      setCart(updatedCart);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + (item.totalPrice || item.price * item.quantity),
      0
    );
  };

  return (
    <div className="container-fluid maincontainer">
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
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <i className="fa-solid fa-heart"></i>
            </Link>
          </li>
          <li className="col-lg-1 nav-item">
            <Link className="nav-link" to="#" onClick={toggleCartView}>
              <i className="fa-solid fa-bag-shopping"></i>
              {cart.length}
            </Link>
          </li>
        </ul>
      </div>

      {isCartView ? (
        <div className="cart-details">
          <h2>Cart Items</h2>
          {cart.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <div>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <h4>{item.title}</h4>
                    <p>
                      <strong>Price:</strong> ${item.price}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <p>
                      <strong>Total Price:</strong> ${item.totalPrice}
                    </p>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ maxWidth: "100px", height: "100px" }}
                    />
                    <p>{item.description}</p>
                    <button onClick={() => handleDec(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleInc(index)}>+</button>
                  </li>
                ))}
              </ul>
              <div>
                <h3>Total Cart Price: ${getTotalPrice()}</h3>
              </div>
            </div>
          )}
          <button onClick={toggleCartView}>Back to shopping</button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(5, 1fr)",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {filteredItems.map((item) => (
            <div
              className="menscloth"
              key={item.id}
              style={{
                margin: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                height: "320px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>
                {item.title}
              </h3>
              <img
                className="mensimg"
                src={item.image}
                alt={item.title}
                style={{
                  maxWidth: "200px",
                  height: "200px",
                  cursor: "pointer",
                  position: "relative",
                }}
              />
              <p style={{ paddingTop: "15px" }}>
                <strong>Price:</strong> ${item.price}
              </p>
              <button className="addbtn" onClick={() => handleAddToCart(item)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="row   " style={{ background: "lightgray" }} id="footer1">
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
  );
};

export default Men;
