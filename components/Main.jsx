import Image from "next/image";
import React, { useState } from "react";
import data from "../components/data.json";
import Link from "next/link";


const Main = () => {
  const [sidebarHide, setSidebarHide]= useState(true)

  return (
    <div className=" p-2 pl-0 mt-5 border border-solid border-[1px] border-gray-300">
   
      <div>
        <h3 className="font-semibold pl-2 text-[1.1rem]  text-red-500">
          Companies
        </h3>
      </div>

      <div 
      style={{display: "grid", gridTemplateColumns: `${ sidebarHide?"200":"10"}px 1fr`}}
      className=" mt-2 border border-solid border-[1px] border-gray-300">
        <div
        
        className="flex">
   

      <div 
      className="bg-[#093967] h-[100vh]"
      style={{display:`${sidebarHide?"block":"none"}`}}>
      <div className="flex items-center gap-2">
            <Image
              src={
                "https://www.goindiastocks.com/Content/assets/images/UserImageChat.png"
              }
              width={32}
              height={32}
              alt="User"
              className="w-8 h-8"
            />
            <span className="text-white">Abhay Kumar</span>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-10"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Communication / Bell_Notification">
                    {" "}
                    <path
                      id="Vector"
                      d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17.0001M15 17L9 17.0001M15 17H19C19.5523 17 20 16.5523 20 16V15.4141C20 15.1489 19.8945 14.8946 19.707 14.707L19.1963 14.1963C19.0706 14.0706 19 13.9 19 13.7222V10C19 9.82357 18.9936 9.64855 18.9805 9.4761M9 17.0001L5 17.0001C4.44772 17.0001 4 16.5521 4 15.9998V15.4141C4 15.1489 4.10544 14.8949 4.29297 14.7073L4.80371 14.1958C4.92939 14.0701 5 13.9002 5 13.7224V9.99998C5 6.13401 8.134 3 12 3C12.7116 3 13.3984 3.10618 14.0454 3.30357M18.9805 9.4761C20.1868 8.7873 21 7.48861 21 6C21 3.79086 19.2091 2 17 2C15.8298 2 14.7769 2.50253 14.0454 3.30357M18.9805 9.4761C18.3966 9.80949 17.7205 10 17 10C14.7909 10 13 8.20914 13 6C13 4.9611 13.3961 4.0147 14.0454 3.30357M18.9805 9.4761C18.9805 9.47609 18.9805 9.4761 18.9805 9.4761ZM14.0454 3.30357C14.0459 3.30371 14.0464 3.30385 14.0468 3.304"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </span>
          </div>
          <div className="px-2 flex flex-col bg-[#093967] border-[#093967] py-2 gap-4 mt-2">
            <Link
              href="/"
              className="text-[12px] text-white w-full font-semibold"
            >
              Featured Companies
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white w-full font-semibold"
            >
              Sentiment
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white w-full font-semibold"
            >
              Market
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white w-full font-semibold"
            >
              Sector
            </Link>
            <Link
              href="#"
              onclick="Openwatchlistpage()"
              className="text-[12px] text-white w-full font-semibold"
            >
              Watchlist
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white w-full font-semibold"
            >
              Earnings <sup className="text-red-500">New</sup>
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white w-full font-semibold"
            >
              Events
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white w-full font-semibold"
            >
              News/Interviews
            </Link>
            <Link
              href="#"
              className="text-[12px] text-white w-full font-semibold"
            >
              Contact us
            </Link>
          </div>
      </div>
      <button
        onClick={()=> setSidebarHide(!sidebarHide)}
        className="bg-[#093967]  py-8 h-20">
        <svg
          viewBox="6 0 15 20"
          fill="none"
          stroke="#ffffff"
          className="w-5 h-5"
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
              d="M10 7L15 12L10 17"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2">
          {data &&
            data.map((val, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center p-2 border border-solid border-[1px] border-gray-300"
                  style={{
                    width: "120px",
                    height: "150px",
                    justifySelf: "center",
                  }}
                >
                  <Image
                    src={val.imgUrl}
                    width={110}
                    height={55}
                    alt="goindiaconnect"
                  />
                  <h4 className="text-center">{val.title}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;