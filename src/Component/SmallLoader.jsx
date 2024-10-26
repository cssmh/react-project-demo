import { ThreeCircles } from "react-loader-spinner";
const SmallLoader = () => {
  return (
    <div className="w-full min-h-[83vh] flex justify-center items-center">
      <ThreeCircles
        height="70"
        width="70"
        color="#4fa94d"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#3498db"
        innerCircleColor="#e67e22"
        middleCircleColor="#e74c3c"
      />
    </div>
  );
};

export default SmallLoader;
