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
    <div>
      {!userData ? (
        <div className="text-center items-center flex justify-center h-[82vh]">
          <p className="text-lg font-semibold">No Data Found!</p>
        </div>
      ) : (
        <div className="m-mt_16px">
          <div className="w-full flex flex-col lg:flex-row items-start justify-center h-full gap-2 ">
            <div className="bg-white lg:p-p_30px w-full">
              <div className="text-center flex flex-col justify-center items-center">
                <p className="text-xl font-bold">Order Information</p>
                <p className="p-3 rounded-md lg:my-2 my-1 w-fit border bg-[#D2C5A2] font-bold text-lg">
                  Order Id:
                  <span className="font-semibold">{userData?.nid}</span>
                </p>
              </div>
              <div className="flex flex-col lg:flex-row w-full mt-4">
                <div className="flex-1 p-4 bg-[#D2C5A2] rounded-md lg:mr-2">
                  <p className="font-bold mb-4">User Information</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p>Full Name:</p>
                      <p>{userData?.fullName || "N/A"}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Email:</p>
                      <p>{userData?.email || "N/A"}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Mobile:</p>
                      <p>{userData?.mobile || "N/A"}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Parent Name:</p>
                      <p>{userData?.parentName || "N/A"}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Parent Number:</p>
                      <p>{userData?.parentNumber || "N/A"}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>School:</p>
                      <p>{userData?.school || "N/A"}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Job Info:</p>
                      <p>{userData?.jobInfo || "N/A"}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4 bg-[#D2C5A2] rounded-md lg:ml-2">
                  <p className="font-bold mb-4">Additional Information</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p>Guardian Name:</p>
                      <p>{userData?.guardianName}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Guardian Number:</p>
                      <p>{userData?.guardianNumber}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>NID:</p>
                      <p>{userData?.nid}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>DOB:</p>
                      <p>{userData?.dob}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Gender:</p>
                      <p>{userData?.gender}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Blood Group:</p>
                      <p>{userData?.bloodGroup}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Present Address:</p>
                      <p>{userData?.presentAddress}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Permanent Address:</p>
                      <p>{userData?.permanentAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
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
                          <th className="py-2 border text-center">
                            Regular Price
                          </th>
                          <th className="py-2 border text-center">
                            Discount Price
                          </th>
                        </tr>
                      </thead>
                      <tbody className="md:text-base text-sm font-semibold">
                        {cartCourses?.map((course, index) => (
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
                              {course.trainer_data?.name}
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
      )}
    </div>
  );
};

export default OrderDetails;
