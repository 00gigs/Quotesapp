import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";

import Search from "./Search";
const QuoteBox = () => {
  return (
    <div className="h-screen flex text-center items-center justify-center">
       <div className="flex flex-col items-center space-y-4">
                {/* Search */}
                <Search />
                {/* Quote content */}
                <div className="bg-slate-500 shadow-2xl border-2 border-white p-5 rounded-lg">
                    {/* Main content */}
                    <div>
                        <p className="text-[22px]">“Be yourself; everyone else is already taken.”</p>
                        <p className="italic">― Oscar Wilde</p>
                    </div>
                    {/* Votes */}
                    <div className="mt-4 flex justify-center space-x-14">
                    <div className="flex flex-col items-center">
                            <button>
                                <FaPlusCircle className="w-4 h-4" />
                            </button>
                            <p className="text-center">save </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <button>
                                <FaArrowCircleUp className="w-5 bg-green-600 rounded-full" />
                                <span>1</span>
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <button>
                                <FaArrowCircleDown className="w-5 bg-red-600 rounded-full" />
                                <span>1</span>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button>
                                <GiPerspectiveDiceSixFacesRandom className="w-7 h-7" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default QuoteBox;
