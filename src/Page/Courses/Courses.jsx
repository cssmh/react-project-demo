import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmallLoader from "../../Component/SmallLoader";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [cartCourse, setCartCourse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axios.get("https://itder.com/api/get-course-list");
      return res?.data?.courseData;
    },
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"))?.state
      ?.cart?.[0];
    if (storedCart) setCartCourse(storedCart);
  }, []);

  const handleAddToCart = (course) => {
    if (cartCourse) {
      toast.error("You can only add one course at a time");
      return;
    }
    const cartData = { state: { cart: [{ ...course, course_qty: 1 }] } };
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCartCourse(course);
    toast.success("Course added to cart!");
  };

  const handleRemoveFromCart = () => {
    localStorage.removeItem("cart");
    setCartCourse(null);
    toast.info("Course removed from cart.");
  };

  const displayedCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  if (isLoading) return <SmallLoader />;

  return (
    <div className="mt-3">
      <h1 className="text-sm text-start md:text-2xl font-bold mx-2 mb-2">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {displayedCourses?.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            isInCart={cartCourse?.id === course.id}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2 mb-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`py-2 px-4 rounded ${
              page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Courses;
