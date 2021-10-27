import React from "react";
import "./Course.css";
import { Card, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Course = (props) => {
  // console.log(props.course);
  const {
    course,
    course_image,
    name,
    image,
    course_cost,
    credit,
    total_reviews,
    total_students,
  } = props.course;

  /* Course Enroll Function */

  // const { handleCourseEnroll } = props;
  return (
    <div className="container">
      <div className="course">
        <Card
          className="Card"
          style={{
            width: "320px",
            position: "relative",
            height: "620px",

            // borderLeft: "5px solid",
            // borderImage: "linear-gradient(blue, purple)",
            // borderImageSlice: "1",

            borderTopRightRadius: "35px",
            borderBottomRightRadius: "5px",

            boxShadow: "10px 10px 15px grey",
          }}
        >
          <div className="imageContainer">
            <Image src={course_image} className="courseImage" />
            <Image src={image} className="mentorImage" />
          </div>

          <Card.Body style={{ textAlign: "left", height: "310px" }}>
            <Card.Title>{course}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <h4>Course Cost: {course_cost}$ </h4>
            <h5>Total Credits: {credit}</h5>
            <h5>About {total_students} people enrolled</h5>
          </Card.Body>
          <Button
            className="ms-3 me-auto mb-4 "
            onClick={() => {
              props.handleCourseEnroll(props.course);
            }}
          >
            Enroll Now
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Course;
