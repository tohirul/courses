import { Button } from "react-bootstrap";
import React from "react";
import { Alert } from "react-bootstrap";

const Helpline = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "86px",
        bottom: "175px",
        padding: "5%",
      }}
    >
      <Alert variant="primary text-start" className="mx-5">
        <form className="mx-5 mb-5">
          <div className="form-group ">
            <label className="p-3">
              <h3>Please Let us know your problem</h3>
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              // @ts-ignore
              rows="10"
            ></textarea>
          </div>
        </form>
        <Button className="ms-5 mb-5">Submit</Button>
      </Alert>
    </div>
  );
};

export default Helpline;
