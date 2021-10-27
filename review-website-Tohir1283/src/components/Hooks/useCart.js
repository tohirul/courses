import { useEffect, useState } from "react";
import { getStoredCart } from "../../Utilities/fakedb";
import useCourses from "./useCourses";

const useCart = () => {
  const [courses] = useCourses();
  const [cart, setCart] = useState([]);
  // console.log(courses.length);
  useEffect(() => {
    if (courses.length) {
      // console.log(courses.length);
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        // @ts-ignore
        const addedCourse = courses.find((course) => course.id === key);
        if (addedCourse) {
          storedCart.push(addedCourse);
        }
      }
    }
  }, [courses]);
  console.log(cart);
  return [cart, setCart];
};

export default useCart;
