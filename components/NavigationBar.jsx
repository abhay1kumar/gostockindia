import Link from "next/link";
import React from "react";
import useScreenSize from "./useScreenSize";

const NavigationBar = () => {
  const screenSize = useScreenSize();

  return (
    <>
      <div
        style={{ justifyContent: screenSize < 1000 ? "center" : "space-between" }}
        className="flex  px-5 mb-5"
      >
        <div
          style={{ display: screenSize < 1000 ? "none" : "flex" }}
          className="flex gap-2"
        >
          <div className="  md:block lg:block">
            <div className=" text-center mb-1 p-0">
              <span className="font-semibold">Nifty 50</span>
            </div>
            <div className=" text-center flex flex-col">
              <span className="text-green-500">44747.35</span>
              <span className=" text-center text-green-500">0.95%</span>
            </div>
          </div>

          <div className="  md:block lg:block">
            <div className=" text-center mb-1 p-0">
              <span className="font-semibold">SENSEX</span>
            </div>
            <div className=" text-center flex flex-col">
              <span className="text-green-500">64718.56</span>
              <span className=" text-center text-green-500">1.26%</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-center font-semibold text-blue-900 text-[1.25rem]">
            Bringing Indian Corporates to Investors. An Investor Relations
            Company
          </h4>

          <h5 className="text-center font-semibold  text-[1.1rem]">
            &quot;Business opportunities are like buses, there’s always another
            one coming.&quot;
          </h5>
        </div>

        <div
          style={{ display: screenSize < 1000 ? "none" : "flex" }}
          className="flex gap-2"
        >
          <div className="md:block lg:block">
            <div className=" text-center mb-1 p-0">
              <span className="font-semibold">Bank Nifty</span>
            </div>
            <div className=" text-center flex flex-col">
              <span className="text-green-500">44747.35</span>
              <span className=" text-center text-green-500">0.95%</span>
            </div>
          </div>

          <div className="  md:block lg:block">
            <div className=" text-center mb-1 p-0">
              <span className="font-semibold">SENSEX</span>
            </div>
            <div className=" text-center flex flex-col">
              <span className="text-green-500">64718.56</span>
              <span className=" text-center text-green-500">1.26%</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
        
        style={{display:screenSize<700? "none":"flex"}}
        className="px-10 flex justify-between bg-[#093967] border-[#093967] py-2">
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
    </>
  );
};

export default NavigationBar;
