import Image from "next/image";
import React from "react";
import useScreenSize from "./useScreenSize";

const Header = () => {
  const screenSize = useScreenSize();
  return (
    <header className="flex items-center justify-between p-4 bg-white-200">
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://www.goindiastocks.com/Content/assets/images/logewithname.png"
          }
          width={50}
          height={32}
          alt="Logo"
        />
        <div className="flex items-center justify-center flex-grow">
          <input
            type="text"
            placeholder="Enter Stock Name"
            className="px-4 pr-10 sm:pr-10 md:pr-30 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className=" p-1 bg-blue-800 text-white rounded-r-md">
            <svg
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              className="w-8 h-8"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M17.029 16.5295L19.5 19.0005"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div
      style={{display:screenSize<700? "none":"flex"}}
      className="flex items-center gap-2">
        <Image
          src={
            "https://www.goindiastocks.com/Content/assets/images/UserImageChat.png"
          }
          width={32}
          height={32}
          alt="User"
          className="w-8 h-8"
        />
        <span>Abhay Kumar</span>
        <span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7 10L12 15L17 10"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
