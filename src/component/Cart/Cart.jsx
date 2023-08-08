import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  useEffect(() => {
    let storedCartItems = localStorage.getItem("cartItems") || [];
    if (storedCartItems) {
      setItems(JSON.parse(storedCartItems));
    }
    calculateTotalAmount();
  }, []);


  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    calculateTotalAmount();
  };

  const calculateTotalAmount = () => {
    let storedCartItems = localStorage.getItem("cartItems") || [];
    if (storedCartItems) {
      const totalAmount = JSON.parse(storedCartItems).reduce((acc, item) => {
        console.log("item", item);
        return acc + item.price.toFixed(0) * item.quantity;
      }, 0);

      console.log(totalAmount);
      setTotalMoney(totalAmount);
    }
  };

  const quantityminus = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    calculateTotalAmount();
  };
  const quantityplus = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    calculateTotalAmount();
  };
  const updateQuantityInCart = (productId, newQuantity) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let updatedQuantity = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedQuantity));
  };
  return (
    <>
      <section className="cart_container">
        <div>
          <div className="card_header">
            <strong>Cart - {items.length} items</strong>
          </div>
          {items.map((item) => {
            return (
              <>
                <div className="cart_showItems">
                  <div className="cart_show_img">
                    <p>
                      <strong>{item.name}</strong>
                    </p>
                    <img src={item.img} className="" alt="item name" />
                    <p>
                      Price : Rs.{item.price.toFixed(0)}
                      <p className="quantity_wise_price">
                        total: Rs.{item.quantity * item.price.toFixed(0)}
                      </p>
                    </p>
                  </div>
                  <div className="cart_product_quantity">
                    <button className="" onClick={() => quantityminus(item.id)}>
                      <i className="fas fa-minus"></i>
                    </button>

                    <div className="quantity">
                      <input
                        id="form1"
                        min="0"
                        value={item.quantity}
                        type="number"
                        className="form-control"
                        onChange={updateQuantityInCart(item.id, item.quantity)}
                      />
                    </div>
                    <button className="" onClick={() => quantityplus(item.id)}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="cart_deleteBtn">
                    <button
                      type="button"
                      className=""
                      data-mdb-toggle="tooltip"
                      title="Remove item"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="total_amount">
          <div className="card_mainHeader">
            <div className="card-header">
              <h5>Summary</h5>
            </div>
            <div className="cards_body">
              <ul className="product_showAll">
                <li className="Products_charge">
                  Products
                  <span>{totalMoney.toFixed(0)}</span>
                </li>
                <li className="Shipping_charge">
                  Shipping
                  <span>100</span>
                </li>
                <li className="show_total_amount">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>{eval(totalMoney + 100)}</strong>
                  </span>
                </li>
              </ul>
              <div className="checkBtn">
                <button type="button">Go to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
