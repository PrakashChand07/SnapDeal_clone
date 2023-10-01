import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductShow.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
const ShowItem = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const location = useLocation();

  const localStorageAdd = JSON.parse(localStorage.getItem("cartItems")) || [];
  const checkLogin = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setLoader(true);
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setLoader(false);
      showProduct(res.data);
    });
  }, []);

  const showProduct = (allItem) => {
    let product = allItem.filter((item) => item.id == id);
    setShow(product);
  };

  const AddCart = (item) => {
    const checkUpdate = localStorageAdd.filter(
      (checkItem) => checkItem.id == item.id
    );

    if (checkUpdate.length == 1) {
      alert("item already present");
    } else {
      localStorageAdd.push({
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: 1,
        img: item.image,
      });

      localStorage.setItem("cartItems", JSON.stringify(localStorageAdd));
      checkLogin();
    }
  };

  if (loader) {
   return <Loader />;
  } else {
    return (
      <>
        {show.map((item) => {
          return (
            <div className="loader-container">
              <div className="productShow_container">
                <div className="cardImg">
                  <img src={item.image} alt="..." />
                </div>
                <div>
                  <div className="card_body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>
                      <span className="real_rating">
                        {item.rating.rate}
                        <span className="public">rating(1999) </span>
                      </span>
                      <span className="real_review public">review</span>
                      <span className="real_selfie public">selfie</span>
                      <span className="real_question public">
                        have you question
                      </span>
                    </p>
                    <div>
                      <p>
                        <span>MRP </span>
                        <span>Rs. 999</span>{" "}
                        <span>(inclusive of all taxes)</span>
                      </p>
                    </div>
                    <p>
                      <span className="card-price-product">
                        Rs. {item.price.toFixed(0)}
                      </span>
                      <span className="discount_off">60% OFF</span>
                    </p>

                    <div className="all_btn">
                      <button
                        className="add_cart_btn"
                        onClick={() => AddCart(show[0])}
                      >
                        ADD TO CART
                      </button>
                      <button
                        className="buy_now_btn"
                        onClick={() => navigate("/cart")}
                      >
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};
export default ShowItem;
