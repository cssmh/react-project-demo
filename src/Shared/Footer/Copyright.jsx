import moment from "moment";

const Copyright = () => {
  const year = moment().format("YYYY");
  return (
    <div className="bg-_white border border-bg_lightSlate py-pl_secondary px-2 lg:px-0 mx-2 rounded-lg">
      <div className="flex items-center flex-col lg:flex-row justify-between rounded-md mx-3">
        <p className="text-center">
          &copy; {year} All right reserved by Wb Softwares. | Design & Developed
          by Dhrubo Joyti Das.
        </p>
        <p className="">Sitemap | privacy policy</p>
      </div>
    </div>
  );
};

export default Copyright;
