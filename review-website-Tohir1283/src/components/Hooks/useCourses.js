import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./Data.JSON")
      .then((response) => response.json())
      .then((data) => setCourses(JSON.parse(data)));
  }, []);
  return [courses, setCourses];
};

export default useCourses;
