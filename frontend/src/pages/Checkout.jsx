import { Facebook, Instagram, Phone, WhatsApp } from "@material-ui/icons";
import React from "react";
import Navbar from "../components/Navbar";
import "./checkout.css";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div class="row-top">
        <div class="col-75">
          <div class="container">
            <form action="/action_page.php">
              <div class="row formdiv">
                <div class="col-50">
                  <h3 className="title">Billing Address</h3>
                  <label for="fname">
                    <i class="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label for="email">
                    <i class="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label for="adr">
                    <i class="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="15 Ola Street, Off dash road"
                  />
                  <label for="city">
                    <i class="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ikeja"
                  />

                  <div class="row down">
                    <div class="col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Lagos"
                      />
                    </div>
                    <div class="col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-50 asides">
                  <h3 className="title">Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div class="icon-container">
                    <img
                      className="paymentimg"
                      src="https://i.ibb.co/Qfvn4z6/payment.png"
                    />
                  </div>
                  <label for="cname" style={{ color: "green" }}>
                    Thank You For Your Patronage!
                  </label>
                  {/* <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  /> */}
                  <label for="ccnum" style={{ color: "green" }}>
                    An order comfirmation will be sent to your mail
                  </label>
                  {/* <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  /> */}
                  <label for="expmonth" style={{ color: "green" }}>
                    You can Contact one of our Agent To Track
                  </label>
                  {/* <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  /> */}

                  <div class="row down">
                    <div class="col-50">
                      <label for="expyear">
                        <Phone style={{ color: "orange" }} />
                      </label>
                      {/* <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      /> */}
                    </div>
                    <div class="col-50">
                      <label for="cvv">
                        <span>08149510410</span>
                      </label>
                      {/* <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      /> */}
                    </div>
                  </div>
                  <div class="row down">
                    <div class="col-50">
                      <label for="expyear">Social:</label>
                      {/* <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      /> */}
                    </div>
                    <div class="col-50">
                      <label for="cvv">
                        <span>
                          <Facebook style={{ cursor: "pointer" }} />
                        </span>
                        <span>
                          {" "}
                          <Instagram style={{ cursor: "pointer" }} />
                        </span>
                        <span>
                          {" "}
                          <WhatsApp style={{ cursor: "pointer" }} />
                        </span>
                      </label>
                      {/* <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input
                  className="deliver"
                  type="checkbox"
                  checked="checked"
                  name="sameadr"
                />{" "}
                Delivery fee inclusive
              </label>
              <input
                type="submit"
                value="Complete Order"
                class="btn-checkout"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
