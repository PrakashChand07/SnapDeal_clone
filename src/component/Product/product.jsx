import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./Product.css";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProduct(res.data);
    }, []);
  });
  const idPass=(id)=>{
    navigate(`/productdetails/${id}`);
  }
  return (
    <>
      <div className="container">
        {product.map((item,ind) => {
          return (
            <div className="card" key={ind+1}>
              <img src={item.image} className="card-img-top " alt="..." />
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <div className=" allProductPrice">
                  <span className="fakeCost"> Rs 59</span>
                  <span className=""> 67% OFF</span>
                  <span className="realPrice"> Rs {item.price.toFixed(0)}</span>
                </div>
                <div className="Rating">
                  <p className="rating_show">
                    {item.rating.rate > 3.5 ? (
                      <span>
                        Rate :
                        <span style={{ color: "green" }}>
                          {item.rating.rate}
                        </span>
                      </span>
                    ) : (
                      <span>
                        Rate :
                        <span style={{ color: "red" }}>
                          {item.rating.rate}
                        </span>
                      </span>
                    )}
                  </p>
                  <button class="search quick_view"  onClick={()=> idPass(item.id)}>QUICK VIEW</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Product;
