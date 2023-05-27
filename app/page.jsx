"use client";

import { useState } from "react";
import CreateHourlyForm from "@/utils/CreateHourlyForm";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    shift: "AM",
    tips: 0,
    transfers: 0,
    bartenders: 0,
    barbacks: 0,
    foodrunner: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      shift: "AM",
      tips: 0,
      transfers: 0,
      bartenders: 0,
      barbacks: 0,
      foodrunner: "No",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const hourlyForm = CreateHourlyForm({ formData });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          CT Tip Out Calculator
        </h1>
        <p className="text-center">
          A simple tool to calculate tip outs for the CT Tasting Room.
        </p>
        <div className="m-5">
          <a
            className="bg-blue-800/50 text-slate-200 m-2 p-3 rounded hover:bg-blue-900/40 hover:text-slate-50 hover:font-bold hover:italic"
            href="/"
            onClick={clearForm}
          >
            Reset
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form
          className="flex flex-col items-center justify-center"
          onChange={handleChange}
        >
          <label className="flex flex-col items-center justify-center">
            <span className="text-center">Was this an AM or PM shift?:</span>
            <select
              className="border border-gray-400 rounded-md p-2 m-2 text-black"
              name="shift"
              defaultValue={"AM"}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </label>

          <label className="flex flex-col items-center justify-center">
            <span className="text-center">Enter your total tips:</span>
            <input
              className="border border-gray-400 rounded-md p-2 m-2 text-black"
              type="number"
              name="tips"
              placeholder="Enter your tips"
            />
          </label>

          <label className="flex flex-col items-center justify-center">
            <span className="text-center">Enter your transfers:</span>
            <input
              className="border border-gray-400 rounded-md p-2 m-2 text-black"
              type="number"
              name="transfers"
              placeholder="Enter your transfers"
            />
          </label>

          <label className="flex flex-col items-center justify-center">
            <span className="text-center">
              How many Bartenders on this shift?:
            </span>
            <input
              className="border border-gray-400 rounded-md p-2 m-2 text-black"
              type="number"
              name="bartenders"
              placeholder="Bartenders on shift"
            />
          </label>
          <label className="flex flex-col items-center justify-center">
            <span className="text-center">
              How many Bar Backs on this shift?:
            </span>
            <input
              className="border border-gray-400 rounded-md p-2 m-2 text-black"
              type="number"
              name="barbacks"
              placeholder="Bar Backs on shift"
            />
          </label>
          <label className="flex flex-col items-center justify-center">
            <span className="text-center">Was there a food runner?:</span>
            <select
              className="border border-gray-400 rounded-md p-2 m-2 text-black"
              name="foodrunner"
              defaultValue={"No"}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label className="flex flex-col items-center justify-center">
            <span className="text-center">Food Sales for this shift:</span>
            <input
              className="border border-gray-400 rounded-md p-2 m-2 text-black"
              type="number"
              name="foodSales"
              placeholder="Food Sales on shift"
            />
          </label>
            <button
              onClick={handleSubmit}
              className="border border-gray-400 rounded-md p-2 m-2"
            >
              <Link href="/hourlyform">Calculate</Link>
            </button>

        </form>
      </div>
    </main>
  );
}
