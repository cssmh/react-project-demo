import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import SmallLoader from "../../Component/SmallLoader";
import { useContext } from "react";
import { CartDataContext } from "../../Component/CartContext";

const Courses = () => {
  const { addToCart, removeFromCart, cartItems } =
    useContext(CartDataContext);

  const { data = [], isLoading } = useQuery({
    queryKey: ["allCourse"],
    queryFn: async () => {
      const res = await axios.get("https://itder.com/api/get-course-list");
      return res?.data?.courseData;
    },
  });

  const isInCart = (courseId) => cartItems.some((item) => item.id === courseId);

  const handleAddToCart = (course) => {
    if (cartItems.length >= 1) {
      toast.error("You can only add one course at a time");
      return;
    }
    addToCart({ ...course, course_qty: 1 });
    toast.success("Course added to cart!");
  };

  const handleRemoveFromCart = () => {
    removeFromCart();
    toast.info("Course removed from cart.");
  };

  if (isLoading) return <SmallLoader />;

  return (
    <div className="mt-5">
      <h1 className="text-sm text-start md:text-xl lg:py-0 mb-2 font-bold">
        Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data?.map((course) => {
          const regularPrice = parseFloat(course.regular_price);
          const discountPrice = parseFloat(course.discount_price);
          const discountPercentage = (
            ((regularPrice - discountPrice) / regularPrice) *
            100
          ).toFixed(2);

          const isCourseInCart = isInCart(course.id);

          return (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden mx-2"
            >
              <div className="relative">
                <img
                  src={course?.photo}
                  className="w-full h-[350px] mx-auto"
                  alt={course.course_name}
                />
                <div className="absolute top-0 left-0 p-2">
                  <h3 className="text-white text-xl font-bold">
                    {course.course_name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                  {course.course_name}
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex text-blue-500 text-md">★★★★★</span>
                  <span className="ml-2 text-gray-600 text-md font-bold">
                    {course.trainer_data?.name || "Unknown Trainer"}
                  </span>
                </div>
                <p className="text-gray-600 text-md mb-4">
                  Course Details{" "}
                  <span className="text-blue-500">Show Details</span>
                </p>
                <hr />
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="line-through text-gray-400 text-sm">
                      Tk {regularPrice}
                    </span>
                    <span className="text-green-600 text-md font-bold ml-2">
                      -{discountPercentage}%
                    </span>
                    <span className="text-black text-lg font-bold ml-2">
                      Tk {discountPrice}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  {isCourseInCart ? (
                    <button
                      onClick={handleRemoveFromCart}
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full font-bold text-md"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(course)}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full font-bold text-md"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
