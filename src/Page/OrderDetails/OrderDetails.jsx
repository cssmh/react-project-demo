import { useEffect, useState } from "react";

const OrderDetails = () => {
  const [cartCourses, setCartCourses] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (cartData && cartData.state && Array.isArray(cartData.state.cart)) {
      setCartCourses(cartData.state.cart);
    } else {
      setCartCourses([]);
    }

    setUserData(userInfo);
  }, []);

  return (
    <div className="m-mt_16px">
      <div className="w-full flex flex-col lg:flex-row items-start justify-center h-full gap-2 ">
        <div className="bg-white lg:p-p_30px w-full">
          <div className="text-center flex flex-col justify-center items-center">
            <p className="text-xl font-bold">Order Information</p>
            <p className="p-3 rounded-md lg:my-2 my-1 w-fit border bg-[#D2C5A2] font-bold text-lg">
              Order Id:
              <span className="font-semibold">
                {/* Display order ID here, if needed */}
                {userData ? userData.nid : "N/A"}
              </span>
            </p>
          </div>

          {/* Flex container for user and order details */}
          <div className="flex flex-col lg:flex-row w-full mt-4">
            {/* User Information on left */}
            <div className="flex-1 p-4 bg-[#D2C5A2] rounded-md lg:mr-2">
              <p className="font-bold mb-4">User Information</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p>Full Name:</p>
                  <p>{userData ? userData.fullName : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Email:</p>
                  <p>{userData ? userData.email : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Mobile:</p>
                  <p>{userData ? userData.mobile : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Parent Name:</p>
                  <p>{userData ? userData.parentName : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Parent Number:</p>
                  <p>{userData ? userData.parentNumber : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>School:</p>
                  <p>{userData ? userData.school : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Job Info:</p>
                  <p>{userData ? userData.jobInfo : "N/A"}</p>
                </div>
              </div>
            </div>

            {/* User Additional Information on right */}
            <div className="flex-1 p-4 bg-[#D2C5A2] rounded-md lg:ml-2">
              <p className="font-bold mb-4">Additional Information</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p>Guardian Name:</p>
                  <p>{userData ? userData.guardianName : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Guardian Number:</p>
                  <p>{userData ? userData.guardianNumber : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>NID:</p>
                  <p>{userData ? userData.nid : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>DOB:</p>
                  <p>{userData ? userData.dob : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Gender:</p>
                  <p>{userData ? userData.gender : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Blood Group:</p>
                  <p>{userData ? userData.bloodGroup : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Present Address:</p>
                  <p>{userData ? userData.presentAddress : "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Permanent Address:</p>
                  <p>{userData ? userData.permanentAddress : "N/A"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="flex-1 p-4 bg-[#D2C5A2] rounded-md mt-4">
            <p className="font-bold mb-4">Order Details</p>
            <div className="md:text-base text-sm font-semibold">
              <p className="my-2">Courses:</p>
              {cartCourses.length > 0 ? (
                <table className="overflow-x-auto border w-full">
                  <thead>
                    <tr className="text-sm">
                      <th className="py-2 border">Image</th>
                      <th className="py-2 border">Course Name</th>
                      <th className="py-2 border">Trainer Name</th>
                      <th className="py-2 border">Quantity</th>
                      <th className="py-2 border text-center">Regular Price</th>
                      <th className="py-2 border text-center">
                        Discount Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="md:text-base text-sm font-semibold">
                    {cartCourses.map((course, index) => (
                      <tr key={index}>
                        <td className="border text-center w-10 h-12 px-2">
                          <img
                            className="w-full h-full object-cover mx-auto"
                            src={course.photo}
                            alt={course.course_name}
                          />
                        </td>
                        <td className="py-2 text-center border">
                          {course.course_name}
                        </td>
                        <td className="py-2 text-center border">
                          {course.trainer_data
                            ? course.trainer_data.name
                            : "N/A"}
                        </td>
                        <td className="py-2 text-center border">
                          {course.course_qty}
                        </td>
                        <td className="py-2 text-center border">
                          {course.regular_price}
                        </td>
                        <td className="py-2 text-center border">
                          {course.discount_price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center mt-4">
                  No courses found in the order.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
