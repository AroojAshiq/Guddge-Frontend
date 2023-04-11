import React, { useState } from "react";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/20/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  // isSameDay,
  isSameMonth,
  isToday,
  parse,
  // parseISO,
  startOfToday,
  startOfWeek,
} from "date-fns";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Calender() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  // let selectedDayMeetings = meetings.filter((meeting) =>
  //   isSameDay(parseISO(meeting.startDatetime), selectedDay)
  // );
  return (
    // <div className="border">
    //   <div className="max-w-md border sm:px-7 md:max-w-4xl md:px-6">
    //     <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
    <div className="w-full">
      <div className="flex items-center px-4 lg:justify-between lg:flex-row flex-col md:justify-between md:flex-row  justify-center my-2">
        <div className="w-full border-b-2 pb-3">
          <h1 className="font-semibold text-lg lg:text-left md:text-left text-center">
            Calendar
          </h1>
          <p className="text-base w-full font-normal text-gray-500 lg:text-left md:text-left text-center">
            You can create multiple role based on license or give role to
            someone blah blah
          </p>
        </div>
      </div>
      <div className="px-4 xl:w-72 lg:w-52 mt-10">
        <div className="flex items-center mt-5">
          <h2 className="flex-auto font-semibold text-xl text-gray-900">
            {format(firstDayCurrentMonth, "MMMM, yyyy")}
          </h2>
          <button
            type="button"
            onClick={previousMonth}
            className="-my-1.5 flex bg-[#5C98D6] outline-none rounded-lg flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ArrowSmallLeftIcon
              className="w-5 h-5 text-white text-lg"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={nextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 bg-[#5C98D6] outline-none rounded-md flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ArrowSmallRightIcon
              className="w-5 h-5 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="bg-[#FCF6FD] rounded-lg">
          <div className="grid grid-cols-7 pt-4 px-2 font-medium mt-10 text-base leading-6 text-center text-gray-400">
            <div>SU</div>
            <div>MO</div>
            <div>TU</div>
            <div>WE</div>
            <div>TH</div>
            <div>FR</div>
            <div>SA</div>
          </div>
          <div className="grid grid-cols-7 mt-2 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  "py-1.5"
                )}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && "text-white outline-none",
                    !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "text-blue-500 outline-none",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-900 outline-none",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400 outline-none",
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "bg-blue-400 outline-none",
                    isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      "bg-blue-600 outline-none",
                    !isEqual(day, selectedDay) &&
                      "hover:bg-gray-200 outline-none",
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      "font-semibold outline-none",
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full outline-none"
                  )}
                >
                  <time
                    dateTime={format(day, "yyyy-MM-dd")}
                    className="text-medium text-sm"
                  >
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default Calender;

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
