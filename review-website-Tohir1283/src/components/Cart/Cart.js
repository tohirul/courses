// @ts-nocheck
import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(props);
  let totalCredits = 0;
  let totalCost = 0;
  for (const selectedCourse of cart) {
    totalCredits += selectedCourse.credit;
    totalCost += selectedCourse.course_cost;
  }

  return (
    <div
      style={{ position: "relative", top: "86px", bottom: "175px" }}
      className="purchaseSection"
    >
      <div>
        <Card
          style={{
            width: "18rem",
            border: "1px solid yellow",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px gray",
          }}
          className="text-start "
        >
          <Card.Body>
            <Card.Title>Purchase Summary</Card.Title>

            <h3>(per month)</h3>

            <p className="totalCredits">Total Credits {totalCredits}</p>
            <p className="totalCost">Total Cost: {totalCost}$</p>

            <Button variant="success my-3">Complete Payment</Button>
            <br />
            <Button variant="danger">Remove</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
