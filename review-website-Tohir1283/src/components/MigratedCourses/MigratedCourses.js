import React from "react";
import { Alert } from "react-bootstrap";

const MigratedCourses = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "86px",
        bottom: "175px",
        padding: "5%",
      }}
    >
      <Alert variant="danger">
        <h2>Sorry, It seems that you haven't purchased any course yet.</h2>
        <h3>Purchase a course and return here to check it out.</h3>
      </Alert>
    </div>
  );
};

export default MigratedCourses;
