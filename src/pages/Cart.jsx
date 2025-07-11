import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import "./Cart.css"; // Make sure to import your CSS

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const generateWhatsAppMessage = () => {
    if (state.length === 0) return "";
    let message = `Hyy, I'm recently visited your website and I want to get a quote for the following items:\n\n`;

    state.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n`;
      message += `   Quantity: ${item.qty}\n`;
      message += `   Price per item: ₹${item.price}\n`;
      message += `   Total: ₹${item.price * item.qty}\n\n`;
    });

    const total = state.reduce((acc, item) => acc + item.price * item.qty, 0);
    message += `Total Cart Value: ₹${total.toFixed(2)}\n`;

    return `https://wa.me/918980614160?text=${encodeURIComponent(message)}`;
  };

  const EmptyCart = () => (
    <div className="container empty-cart">
      <h4 className="p-3 display-5">Your Cart is Empty</h4>
      <Link to="/product" className="btn mx-4">
        <i className="fa fa-arrow-left"></i> Continue Shopping
      </Link>
    </div>
  );

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <div className="bg-image rounded">
                            <img
                              src={item.image}
                              alt={item.title}
                              width={100}
                              height={75}
                            />
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                          <p>
                            <strong>{item.title}</strong>
                          </p>
                        </div>

                        <div className="col-lg-4 col-md-6">
                          <div className="quantity-controls">
                            <button
                              className="btn"
                              onClick={() => removeItem(item)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <p>{item.qty}</p>

                            <button
                              className="btn"
                              onClick={() => addItem(item)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center mt-2">
                            <strong>
                              {item.qty} x ₹{item.price}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})
                      <span>₹{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping <span>₹{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-lg btn-block"
                  >
                    Send on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container cart-page">
        <h1>Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
