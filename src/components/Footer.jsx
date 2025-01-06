import React from "react";
import SushiIcon from "../Icon/SushiIcon";
import FacebookBtn from "../buttons/FacebookBtn";
import TiktokBtn from "../buttons/TiktokBtn";
import YoutubeBtn from "../buttons/YoutubeBtn";
import location1 from "../assets/MyanShi/VisitOurRestaurant/location1.png";
import location2 from "../assets/MyanShi/VisitOurRestaurant/location2.png";
import location3 from "../assets/MyanShi/VisitOurRestaurant/location3.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-header-color text-white">
      <div className="py-16 px-4 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-8 lg:py-32">
        <div className="space-y-4 ">
          <div className="flex items-center space-x-2">
            <SushiIcon />
            <span className="font-notoSerifJp text-white text-2xl lg:text-3xl font-black">
              MYANSHI
            </span>
          </div>
          <p className="font-bodyLarge font-satoshi text-neutral-200 text-sm lg:text-base">
            Fresh Flavors, Perfect Rolls — Bringing
            <br />
            Authentic Japanese Sushi to Myanmar,
            <br />
            Only at Myanshi!
          </p>
          <Link to="/">
            <div className="flex space-x-4 pt-3">
              <FacebookBtn />
              <TiktokBtn />
              <YoutubeBtn />
            </div>
          </Link>
        </div>

        <div>
          <h3 className="text-neutral-100 font-satoshi font-semibold text-base lg:text-lg mb-4">
            OPENING TIMES
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-satoshi text-neutral-200 font-medium text-sm lg:text-base">
                Monday - Friday
              </span>
              <span className="text-neutral-400 text-sm lg:text-base">
                5:00pm - 9:00pm
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-satoshi text-neutral-200 font-medium text-sm lg:text-base">
                Saturday - Sunday
              </span>
              <span className="text-neutral-400 text-sm lg:text-base">
                9:00am - 12:00pm
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-neutral-100 font-satoshi font-semibold text-base lg:text-lg mb-4">
            VISIT US
          </h3>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-1">
                <h4 className="font-satoshi text-neutral-200 font-medium text-sm lg:text-base">
                  Bahan, YGN
                </h4>
                <p className="font-satoshi text-neutral-400 text-sm lg:text-base">
                  No.144, Dharmazedi Road,
                  <br />
                  Bahan Township, Yangon
                </p>
                <p className="mt-2 font-satoshi text-neutral-400 text-sm lg:text-base">
                  09 78 5568 747
                </p>
              </div>
              <div>
                <img
                  src={location1}
                  alt="Location1"
                  className="w-[120px] h-[90px] lg:w-[130px] lg:h-[100px]"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <h4 className="font-satoshi text-neutral-200 font-medium text-sm lg:text-base">
                  Okkalar (S), YGN
                </h4>
                <p className="font-satoshi text-neutral-400 text-sm lg:text-base">
                  No.800, Myittar Street, 13 Ward,
                  <br />
                  South Okkalar, Yangon
                </p>
                <p className="mt-2 font-satoshi text-neutral-400 text-sm lg:text-base">
                  09 78 5568 748
                </p>
              </div>
              <div>
                <img
                  src={location2}
                  alt="Location2"
                  className="w-[120px] h-[90px] lg:w-[130px] lg:h-[100px]"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <h4 className="font-satoshi text-neutral-200 font-medium text-sm lg:text-base">
                  Mandalay
                </h4>
                <p className="font-satoshi text-neutral-400 text-sm lg:text-base">
                  No. 68B, Mandalay-Lashio Road,
                  <br />
                  Pyigyidagun Township, Mandalay
                </p>
                <p className="mt-2 font-satoshi text-neutral-400 text-sm lg:text-base">
                  099 87321 654
                </p>
              </div>
              <div>
                <img
                  src={location3}
                  alt="Location3"
                  className="w-[120px] h-[90px] lg:w-[130px] lg:h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-700 text-white px-4 py-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <span>©2024 - MOFI | All rights reserved</span>
          <span>MISIT PUD</span>
        </div>
      </div>
    </footer>
  );
}
