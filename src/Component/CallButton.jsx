import { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";

const CallButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="fixed bottom-4 right-4 z-50 flex items-center bg-green-500 text-white p-3 rounded-full cursor-pointer shadow-lg"
        onClick={handleOpenModal}
      >
        <AiOutlinePhone className="text-2xl" />
        <span className="ml-2">কল করুন</span>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-5 w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-3">
              কথা বলুন ক্যারিয়ার কাউন্সিলরের সাথে
            </h2>
            <img
              src="https://cdn.ostad.app/public/upload/2023-01-14T06-21-42.433Z-user-help-line.svg"
              alt="Career Counselor"
              className="mb-4 w-1/2 mx-auto h-auto"
            />
            <div className="flex justify-between">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                WhatsApp
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallButton;
