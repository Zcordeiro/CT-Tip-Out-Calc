"use client";

import { useSearchParams } from "next/navigation";

import HourlyForm from "@/components/HourlyForm";
import barbackTipOutPercentage from "@/utils/barbackTipOutPercentage";

const Hourly = () => {
  const searchParams = useSearchParams();
  const shift = searchParams.get("shift");
  const tips = parseFloat(searchParams.get("tips"));
  const transfers = parseFloat(searchParams.get("transfers")) * 0.1;
  const bartenders = searchParams.get("bartenders");
  const barbacks = searchParams.get("barbacks");
  const foodrunner = searchParams.get("foodrunner");
  const foodSales = parseFloat(searchParams.get("foodSales")) * 0.03;
  let tipOutTotal = 0.0;
  let barbackTipOut = 0.0;

  if (shift === "AM") {
    if (foodrunner == "Yes") {
      tipOutTotal = tips + transfers - foodSales;
      barbackTipOut =
        tipOutTotal * barbackTipOutPercentage(bartenders, barbacks);
    }
    if (foodrunner == "No") {
      tipOutTotal = tips + transfers;
      barbackTipOut =
        tipOutTotal * barbackTipOutPercentage(bartenders, barbacks);
    }
  }

  if (shift === "PM") {
    if (foodrunner === "Yes") {
      tipOutTotal = tips - transfers - foodSales;
      barbackTipOut =
        tipOutTotal * barbackTipOutPercentage(bartenders, barbacks);
    }
    if (foodrunner === "No") {
      tipOutTotal = tips - transfers;
      barbackTipOut =
        tipOutTotal * barbackTipOutPercentage(bartenders, barbacks);
    }
  }

  return (
    <div className="flex flex-col items-center justify-evenly p-4">
      <HourlyForm
        bartenders={bartenders}
        barbacks={barbacks}
        barbackTipOut={barbackTipOut}
        tipOutTotal={tipOutTotal}
      />
    </div>
  );
};

export default Hourly;
