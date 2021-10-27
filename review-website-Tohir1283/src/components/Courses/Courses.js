// @ts-nocheck
import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../Utilities/fakedb";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import useCart from "../Hooks/useCart";
import useCourses from "../Hooks/useCourses";
import "./Courses.css";

const Courses = () => {
  const [courses] = useCourses();

  const [cart, setCart] = useCart();
  console.log(cart);

  const handleCourseEnroll = (course) => {
    const selectedCourses = [...cart, course];
    setCart(selectedCourses);
    addToDb(course.id);
  };

  return (
    <div className="cartContainer">
      <div className="course">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleCourseEnroll={handleCourseEnroll}
          />
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Courses;
