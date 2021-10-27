// @ts-nocheck
import { Alert, Button } from "react-bootstrap";
import React from "react";
import useCourses from "../Hooks/useCourses";

const BestCourses = () => {
  const [courses] = useCourses();
  console.log(courses);

  const bestCourses = courses.filter(
    (courses) => courses.total_students > 1500000
  );
  console.log(bestCourses);

  return (
    <div
      style={{
        position: "relative",
        top: "16px",
        bottom: "175px",
        padding: "5%",
      }}
    >
      <div>
        {bestCourses.map((course) => (
          <Alert variant="success">
            <div className="bestSeller d-flex m-4">
              <img
                src={course.course_image}
                style={{ width: "500px", height: "300px" }}
                alt=""
              />
              <div className="bestCourseDetails text-start m-4">
                <legend>
                  <h3>{course.course}</h3>
                </legend>
                <div className="author d-flex align-items-center">
                  <img
                    src={course.image}
                    alt={course.name}
                    style={{
                      width: "100px",
                      bottom: "5px solid yellow",
                      borderRadius: "50px",
                      margin: "10px",
                    }}
                  />
                  <p>
                    <b>{course.name}</b>
                  </p>
                </div>
                <h4>
                  <b>Total Students: {course.total_students}</b>
                </h4>
                <Button variant="info" href="/Courses">
                  See More
                </Button>
              </div>
            </div>
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default BestCourses;
