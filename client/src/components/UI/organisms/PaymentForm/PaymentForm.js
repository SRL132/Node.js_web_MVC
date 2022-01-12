import React, { useState } from "react";
// import { withRouter } from "react-router-dom";
// import Card from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
import { Button } from "components/UI/atoms";

// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate,
//   formatFormData,
// } from "utils/payment";
import { log } from "debug";

import { useLocation, useNavigate, useParams } from "react-router-dom";
//import { useCartItems } from "context";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function PaymentForm() {
  // constructor(props) {
  //   super(props);

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // state = {
  //   number: "",
  //   name: "",
  //   expiry: "",
  //   cvc: "",
  //   issuer: "",
  //   focused: "",
  //   formData: null,
  // };

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  // const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState(null);
  let navigate = useNavigate();
  //const { cartItems, cartItemIds } = useCartItems();

  // const handleCallback = ({ issuer }, isValid) => {
  //   if (isValid) {
  //     setIssuer({ issuer });
  //   }
  // };

  const handleInputFocus = ({ target }) => {
    setFocused({
      focused: target.name,
    });
  };

  const handleInputChange = ({ target }) => {
    // if (target.name === "number") {
    //   target.value = formatCreditCardNumber(target.value);
    // } else if (target.name === "expiry") {
    //   target.value = formatExpirationDate(target.value);
    // } else if (target.name === "cvc") {
    //   target.value = formatCVC(target.value);
    // }

    setName({ [target.name]: target.value });
  };

  function handleSubmit(e) {
    //prevent default
    e.preventDefault();
    // const { issuer } = issuer;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setFormData({ formData });
    // this.form.reset();
    navigate("/checkout/step-4");
  }

  // const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

  return (
    <div key="Payment" className="col-12">
      <div className="App-payment">
        {/* <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          /> */}
        <form
          // ref={(c) => (form = c)}
          className=" mt-5 mb-2"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <small>E.g.: 49..., 51..., 36..., 37...</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          {/* <input type="hidden" name="issuer" value={issuer} /> */}

          <Button className="btn btn-primary btn-block mt-2 mb-2" submitButton>
            PAY
          </Button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(PaymentForm);
