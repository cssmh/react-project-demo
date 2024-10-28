import { useForm } from "react-hook-form";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [cartCourses, setCartCourses] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart"))?.state?.cart || [];
    setCartCourses(savedCart);
  }, []);

  const onSubmit = (data) => {
    if (localStorage.getItem("user")) {
      toast.warning("You have already submitted your information!", {
        autoClose: 3000,
      });
      return;
    }
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Form submitted successfully!", { autoClose: 3000 });
    reset();
  };

  const handleQuantityChange = (courseId, delta) => {
    const updatedCourses = cartCourses.map((course) => {
      if (course.id === courseId) {
        const newQty = Math.max(course.course_qty + delta, 1);
        return { ...course, course_qty: newQty };
      }
      return course;
    });
    updateCart(updatedCourses);
  };

  const handleRemoveCourse = (courseId) => {
    const updatedCourses = cartCourses.filter(
      (course) => course.id !== courseId
    );
    updateCart(updatedCourses);
    toast.success("Course removed from cart!");
  };

  const updateCart = (courses) => {
    setCartCourses(courses);
    localStorage.setItem("cart", JSON.stringify({ state: { cart: courses } }));
  };

  const totalPrice = cartCourses.reduce(
    (sum, course) => sum + course.discount_price * course.course_qty,
    0
  );

  return (
    <div className="mt-3 mx-2">
      <h1 className="text-2xl mb-2 font-bold">Checkout</h1>
      <form
        className="bg-white shadow-md rounded-lg p-3 md:p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="fullName"
                className="block font-semibold text-base mb-2"
              >
                Full Name*:
              </label>
              <input
                type="text"
                id="fullName"
                {...register("fullName", { required: "Full Name is required" })}
                className={`w-full border outline-none ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-base mb-2"
              >
                Email*:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full border outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block font-semibold text-base mb-2"
              >
                Phone No*:
              </label>
              <input
                type="text"
                id="mobile"
                {...register("mobile", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Must be at least 10 characters",
                  },
                })}
                className={`w-full border outline-none ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="parentName"
                className="block font-semibold text-base mb-2"
              >
                Father/Mother Name*:
              </label>
              <input
                type="text"
                id="parentName"
                {...register("parentName", {
                  required: "Father/Mother Name is required",
                })}
                className={`w-full border outline-none ${
                  errors.parentName ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.parentName && (
                <p className="text-red-500 text-sm">
                  {errors.parentName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="parentNumber"
                className="block font-semibold text-base mb-2"
              >
                Father/Mother Phone*:
              </label>
              <input
                type="text"
                id="parentNumber"
                {...register("parentNumber", {
                  required: "Father/Mother Phone is required",
                })}
                className={`w-full border outline-none ${
                  errors.parentNumber ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.parentNumber && (
                <p className="text-red-500 text-sm">
                  {errors.parentNumber.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="school"
                className="block font-semibold text-base mb-2"
              >
                School/College Name*:
              </label>
              <input
                type="text"
                id="school"
                {...register("school", {
                  required: "School/College Name is required",
                })}
                className={`w-full border outline-none ${
                  errors.school ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.school && (
                <p className="text-red-500 text-sm">{errors.school.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="jobInfo"
                className="block font-semibold text-base mb-2"
              >
                Job Title*:
              </label>
              <input
                type="text"
                id="jobInfo"
                {...register("jobInfo", { required: "Job Title is required" })}
                className={`w-full border outline-none ${
                  errors.jobInfo ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.jobInfo && (
                <p className="text-red-500 text-sm">{errors.jobInfo.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="guardianName"
                className="block font-semibold text-base mb-2"
              >
                Local Guardian Name*:
              </label>
              <input
                type="text"
                id="guardianName"
                {...register("guardianName", {
                  required: "Local Guardian Name is required",
                })}
                className={`w-full border outline-none ${
                  errors.guardianName ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.guardianName && (
                <p className="text-red-500 text-sm">
                  {errors.guardianName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="guardianNumber"
                className="block font-semibold text-base mb-2"
              >
                Local Guardian Phone:
              </label>
              <input
                type="text"
                id="guardianNumber"
                {...register("guardianNumber")}
                className={`w-full border outline-none ${
                  errors.guardianNumber ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.guardianNumber && (
                <p className="text-red-500 text-sm">
                  {errors.guardianNumber.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="nid"
                className="block font-semibold text-base mb-2"
              >
                NID No*:
              </label>
              <input
                type="text"
                id="nid"
                {...register("nid", { required: "NID No is required" })}
                className={`w-full border outline-none ${
                  errors.nid ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.nid && (
                <p className="text-red-500 text-sm">{errors.nid.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block font-semibold text-base mb-2"
              >
                Date Of Birth*:
              </label>
              <input
                type="date"
                id="dob"
                {...register("dob", { required: "Date of Birth is required" })}
                className={`w-full border outline-none ${
                  errors.dob ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="gender"
                className="block font-semibold text-base mb-2"
              >
                Gender*:
              </label>
              <select
                id="gender"
                {...register("gender", { required: "Gender is required" })}
                className={`w-full border outline-none ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="bloodGroup"
                className="block font-semibold text-base mb-2"
              >
                Blood Group*:
              </label>
              <select
                id="bloodGroup"
                {...register("bloodGroup", {
                  required: "Blood Group is required",
                })}
                className={`w-full border outline-none ${
                  errors.bloodGroup ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              >
                <option value="" disabled>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodGroup && (
                <p className="text-red-500 text-sm">
                  {errors.bloodGroup.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="presentAddress"
                className="block font-semibold text-base mb-2"
              >
                Present Address*:
              </label>
              <textarea
                id="presentAddress"
                {...register("presentAddress", {
                  required: "Present Address is required",
                })}
                className={`w-full border ${
                  errors.presentAddress ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.presentAddress && (
                <p className="text-red-500 text-sm">
                  {errors.presentAddress.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="permanentAddress"
                className="block font-semibold text-base mb-2"
              >
                Permanent Address*:
              </label>
              <textarea
                id="permanentAddress"
                {...register("permanentAddress", {
                  required: "Permanent Address is required",
                })}
                className={`w-full border ${
                  errors.permanentAddress ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.permanentAddress && (
                <p className="text-red-500 text-sm">
                  {errors.permanentAddress.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 mb-4">
            <div>
              <label
                htmlFor="image"
                className="block font-semibold text-base mb-2"
              >
                Upload Image*:
              </label>
              <input
                type="file"
                id="image"
                {...register("image", { required: "Image upload is required" })}
                accept="image/*"
                className={`w-full border ${
                  errors.image ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>
          </div>
        </div>
        <div>
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
                      <tr className="border-b-4 border-gray-300">
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
                      {cartCourses?.map((course) => (
                        <tr
                          key={course.id}
                          className="border-b border-gray-300"
                        >
                          <td>
                            <div className="flex items-center justify-center">
                              <button
                                className="text-xl hover:text-red-500 cursor-pointer w-[20%] text-center flex items-center justify-center"
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
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(course.id, -1)
                                }
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
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(course.id, 1)
                                }
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
                    <button className="font-medium text-black border-2 hover:bg-gray-200 duration-300 py-2 px-4 block text-center mx-auto w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
