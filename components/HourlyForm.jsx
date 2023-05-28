"use client";

import { useState } from "react";

const HourlyForm = ({ bartenders, barbacks, barbackTipOut, tipOutTotal }) => {
  const [formData, setFormData] = useState({
    bartender1hours: 0,
    bartender2hours: 0,
    bartender3hours: 0,
    bartender4hours: 0,
    bartender5hours: 0,
    bartender6hours: 0,
    barback1hours: 0,
    barback2hours: 0,
    barback3hours: 0,
    barback4hours: 0,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log("Bartenders: ", bartenders);
  console.log("Barbacks: ", barbacks);
  console.log("Barback Tip Out: ", barbackTipOut);
  console.log("Tip Out Total: ", tipOutTotal);

  let arrayOfBartenders = [];
  let arrayOfBarbacks = [];

  for (let i = 0; i < bartenders; i++) {
    arrayOfBartenders.push(i);
  }

  for (let i = 0; i < barbacks; i++) {
    arrayOfBarbacks.push(i);
  }
  const clearForm = () => {
    setFormData({
      bartender1hours: 0,
      bartender2hours: 0,
      bartender3hours: 0,
      bartender4hours: 0,
      bartender5hours: 0,
      bartender6hours: 0,
      barback1hours: 0,
      barback2hours: 0,
      barback3hours: 0,
      barback4hours: 0,
    });
  };

  const calculateTipOut = ({
    totalBTHours,
    totalBBHours,
    bartenderTips,
    barbackTips,
  }) => {
    console.log("Total Bartender Hours: ", totalBTHours);
    const bartenderHourlyTipOut = bartenderTips / totalBTHours;
    const barbackHourlyTipOut = barbackTips / totalBBHours;
    
    return {
      bartenderHourlyTipOut,
      barbackHourlyTipOut,
    };
  };

  const totalBTHours =
    parseFloat(formData.bartender1hours) +
    parseFloat(formData.bartender2hours) +
    parseFloat(formData.bartender3hours) +
    parseFloat(formData.bartender4hours) +
    parseFloat(formData.bartender5hours) +
    parseFloat(formData.bartender6hours);

  const totalBBHours =
    parseFloat(formData.barback1hours) +
    parseFloat(formData.barback2hours) +
    parseFloat(formData.barback3hours) +
    parseFloat(formData.barback4hours);

  const bartenderTips = tipOutTotal - barbackTipOut;
  const barbackTips = barbackTipOut;

  const hourlyTipOut = calculateTipOut({
    totalBTHours,
    totalBBHours,
    bartenderTips,
    barbackTips,
  });
  console.log("Hourly Tip Out: ", hourlyTipOut);

  return (
    <div className="flex flex-col items-center justify-evenly p-4 mb-10">
      <div className="m-5">
        <a
          className="bg-blue-800/50 text-slate-200 m-2 p-3 rounded hover:bg-blue-900/40 hover:text-slate-50 hover:font-bold hover:italic"
          href="/"
          onClick={clearForm}
        >
          Reset
        </a>
      </div>
      <form
        className="flex flex-col items-center justify-center"
        onChange={handleChange}
      >
        {arrayOfBartenders.map((bartender, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <label className="flex flex-col items-center justify-center">
              Bartender {index + 1} hours:
              <input
                className="border border-gray-400 rounded-md p-2 m-2 text-black"
                type="number"
                name={`bartender${index + 1}hours`}
                placeholder={`Bartender ${index + 1} hours`}
              />
            </label>
          </div>
        ))}
        {arrayOfBarbacks.map((barback, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <label className="flex flex-col items-center justify-center">
              Barback {index + 1} hours:
              <input
                className="border border-gray-400 rounded-md p-2 m-2 text-black"
                type="number"
                name={`barback${index + 1}hours`}
                placeholder={`Barback ${index + 1} hours`}
              />
            </label>
          </div>
        ))}
      </form>

      <div className="flex flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {arrayOfBartenders.map((bartender, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-xl text-blue-500 m-5 p-3 items-center justify-center border border-indigo-700 rounded-lg">
                Bartender {index + 1} Tip Out:{" "}
                <span className="text-xl text-blue-100 m-2 items-center justify-center">
                ${parseFloat(parseFloat(hourlyTipOut.bartenderHourlyTipOut) *
                  formData[`bartender${index + 1}hours`]).toFixed(2)}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div>
          {arrayOfBarbacks.map((barback, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-xl text-blue-300 m-5 p-3 items-center justify-center border border-indigo-700 rounded-lg">
                Barback {index + 1} Tip Out: {" "}
                <span className="text-xl text-blue-100 m-2 items-center justify-center">
                ${parseFloat(parseFloat(hourlyTipOut.barbackHourlyTipOut *
                  formData[`barback${index + 1}hours`])).toFixed(2)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForm;
