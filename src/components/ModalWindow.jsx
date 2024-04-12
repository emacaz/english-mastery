import React from "react";
import { useNavigate } from "react-router-dom";

const ModalWindow = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleTakeTest = () => {
    closeModal();
    navigate('/test');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Hablar Inglés me ha hecho ganar más dinero. Ya hablas Inglés?
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Elige una de las siguientes opciones:
            </p>
          </div>
          <div className="flex justify-around px-4 py-3">
            <button
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={closeModal}
            >
              Empieza gratis
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={handleTakeTest}
            >
              Tomar Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
