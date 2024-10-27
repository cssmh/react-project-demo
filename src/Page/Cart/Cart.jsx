import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartCourses, setCartCourses] = useState([]);

  useEffect(() => {
    const cartData =
      JSON.parse(localStorage.getItem("cart"))?.state?.cart || [];
    setCartCourses(cartData);
  }, []);

  const handleQuantityChange = (courseId, delta) => {
    const updatedCourses = cartCourses.map((course) => {
      if (course.id === courseId) {
        const newQty = Math.max(course.course_qty + delta, 1);
        return { ...course, course_qty: newQty };
      }
      return course;
    });
    setCartCourses(updatedCourses);
    localStorage.setItem(
      "cart",
      JSON.stringify({ state: { cart: updatedCourses }, version: 0 })
    );
  };

  const handleRemoveCourse = (courseId) => {
    const updatedCourses = cartCourses.filter(
      (course) => course.id !== courseId
    );
    setCartCourses(updatedCourses);
    localStorage.setItem(
      "cart",
      JSON.stringify({ state: { cart: updatedCourses }, version: 0 })
    );
    toast.success("Course removed from cart!");
  };

  const totalPrice = cartCourses.reduce(
    (sum, course) => sum + course.discount_price * course.course_qty,
    0
  );

  return (
    <div className="m-mt_16px">
      <h1 className="text-sm text-start md:text-xl font-bold">Cart</h1>
      <div className="pt-4">
        {cartCourses.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg font-semibold">Your cart is empty.</p>
            <p className="text-gray-600">Add a course to get started!</p>
          </div>
        ) : (
          <div className="lg:flex items-start gap-3">
            <div className="w-full lg:w-[58%] bg-white border-2">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                      Course
                    </th>
                    <th className="text-[14.4px] font-bold p-[7px] text-black">
                      Price
                    </th>
                    <th className="text-[14.4px] font-bold p-[7px] text-black">
                      Quantity
                    </th>
                    <th className="text-[14.4px] font-bold p-[7px] text-black">
                      Sub Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cartCourses.map((course) => (
                    <tr key={course.id} className="border-b border-gray-300">
                      <td>
                        <div className="flex items-center justify-center">
                          <button
                            className="text-xl text-red-500 cursor-pointer w-[20%] text-center flex items-center justify-center"
                            onClick={() => handleRemoveCourse(course.id)}
                          >
                            <RiDeleteBin5Line />
                          </button>
                          <div className="flex flex-col text-center justify-center items-center py-2 w-[80%]">
                            <img
                              className="h-[70px] w-[70px]"
                              src={course.photo}
                              alt="Course"
                            />
                            <p className="text-[14.4px] px-[7px] text-center">
                              {course.course_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-[14.4px] font-bold p-[7px] text-black text-center">
                        Tk {course.discount_price}
                      </td>
                      <td>
                        <div className="flex justify-center items-center">
                          <button
                            onClick={() => handleQuantityChange(course.id, -1)}
                            className="px-4 w-[30px] font-bold border hover:bg-gray-200"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            readOnly
                            value={course.course_qty}
                            className="w-[30px] lg:w-[60px] font-bold text-center mx-1 border-y"
                          />
                          <button
                            onClick={() => handleQuantityChange(course.id, 1)}
                            className="px-4 w-[30px] font-bold border hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-[14.4px] font-bold p-[7px] text-black text-center">
                        Tk {course.discount_price * course.course_qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:w-[41%] bg-white border-2 mt-4 lg:mt-0">
              <div className="px-6 py-4">
                <h2 className="font-bold text-lg border-b-2 pb-2 mb-4">
                  Cart Summary
                </h2>
                <div className="flex justify-between mb-4 border-b pb-2">
                  <p className="text-black font-bold">Total Price</p>
                  <p className="text-black font-bold">Tk {totalPrice}</p>
                </div>
                <Link
                  to="/checkout"
                  state="bdt"
                  className="font-medium text-black border-2 hover:bg-gray-200 duration-300 py-2 px-4 block text-center mx-auto w-full"
                >
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
