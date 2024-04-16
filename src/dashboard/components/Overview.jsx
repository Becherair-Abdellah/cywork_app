import React from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";
import { RiArticleLine,RiCalendarEventLine,RiMessageLine } from "react-icons/ri";
import { LuChevronRightSquare } from "react-icons/lu";
function Overview() {
  return (
    <div className=" py-4 w-full">
      <h1 className="text-4xl text-gray-600">Hello, <strong className="text-primaryColor">Admin</strong></h1>
      <p className="text-gray-600 mt-1 mb-6">this is what we've got for you today .</p>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-5">
        <Card
          icon={<FaUsers size={50} />}
          color="bg-gradient-to-r from-red-500 to-[#0058ff]"
          title="Users"
          nbr="40K"
        />

        <Card
          icon={<RiCalendarEventLine size={50} />}
          color="bg-gradient-to-r from-[#0058ff] to-[#3195ff]"
          title="Activities"
          nbr="30"
        />

        <Card
          icon={<RiArticleLine size={50} />}
          color="bg-gradient-to-r from-red-500 to-pink-500"
          title="News"
          nbr="7"
        />

<Card
          icon={<RiMessageLine size={50} />}
          color="bg-gradient-to-r from-red-500 to-[#0058ff]"
          title="Articles"
          nbr="4K"
        />
      </div>
      {/* chart js  */}
      <div>
        <h1 className="text-gray-600 mt-6  text-sm">Upcoming events</h1>

        <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-5 mt-6">
        <div className="p-3 rounded-md bg-white shadow-lg border-t-2 w-full">
          <div className="border-l-2 border-red-500 p-2 text-gray-700">
            <h1 className="text-lg font-bold">HDMI Room</h1>
            <div className="flex gap-2 items-center flex-wrap mt-1">
            <span className="text-[12px] bg-slate-300 rounded-md p-1 text-gray-900">hackfest</span>
              <span className="text-[12px] bg-slate-300 rounded-md p-1 text-gray-900">cyber</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-5 mt-5 ">

              <div>
              <span className="text-gray-500 text-sm">Start Time</span><br></br>
              <span className="text-gray-900 text-sm">29 Nov 2024 , 03:30pm</span>
              </div>

              <LuChevronRightSquare size={20} className="text-gray-500" />

              <div>
              <span className="text-gray-500 text-sm">End Time</span><br></br>
              <span className="text-gray-900 text-sm">29 Nov 2024 , 03:30pm</span>
              </div>

            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Overview;
