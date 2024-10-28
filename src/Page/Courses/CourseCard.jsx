const CourseCard = ({ course, isInCart, addToCart, removeFromCart }) => {
  const regularPrice = parseFloat(course.regular_price);
  const discountPrice = parseFloat(course.discount_price);
  const discountPercentage = (
    ((regularPrice - discountPrice) / regularPrice) *
    100
  ).toFixed(2);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2">
      <div className="relative group">
        <img
          src={course.photo}
          alt={course.course_name}
          className="lg:w-full h-[350px] mx-auto transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 p-2 text-white text-xl font-bold">
          {course.course_name}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold mb-2">
          {course.course_name}
        </h2>
        <div className="flex items-center justify-between mb-3">
          <span className="text-blue-500">★★★★★</span>
          <span className="ml-2 text-gray-600 font-bold">
            {course.trainer_data?.name || "Unknown Trainer"}
          </span>
        </div>
        <p className="text-gray-600 mb-3">
          Course Details <span className="text-blue-500">Show Details</span>
        </p>
        <hr />
        <div className="mt-3 flex justify-between items-center">
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
        <div className="mt-3">
          <button
            onClick={isInCart ? removeFromCart : () => addToCart(course)}
            className={`py-2 px-4 rounded w-full font-bold text-md ${
              isInCart
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
