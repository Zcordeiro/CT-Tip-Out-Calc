'use client';

import { useSearchParams } from 'next/navigation';

import HourlyForm from "@/components/HourlyForm"

const barbackTipOutPercentage = (bartenders, barbacks) => {
    if (bartenders == 1 && barbacks == 1) {
      return 0.2;
    } else if (bartenders == 2 && barbacks == 1) {
      return 0.17;
    } else if (bartenders == 3 && barbacks == 1) {
      return 0.16;
    } else if (bartenders == 4 && barbacks == 1) {
      return 0.14;
    } else if (bartenders == 5 && barbacks == 1) {
      return 0.12;
    } else if (bartenders == 2 && barbacks == 2) {
      return 0.2;
    } else if (bartenders == 3 && barbacks == 2) {
      return 0.18;
    } else if (bartenders == 4 && barbacks == 2) {
      return 0.165;
    } else if (bartenders == 5 && barbacks == 2) {
      return 0.17;
    } else if (bartenders == 6 && barbacks == 2) {
      return 0.17;
    }
  
    return 0; // Default case
  };

const Hourly = () => {
    const searchParams = useSearchParams();
    const shift = searchParams.get("shift");    
    const tips = parseFloat(searchParams.get("tips"));
    const transfers = parseFloat(searchParams.get("transfers")) * 0.1;
    const bartenders = searchParams.get("bartenders");
    const barbacks = searchParams.get("barbacks");
    const foodrunner = searchParams.get("foodrunner");
    const foodSales = parseFloat(searchParams.get("foodSales")) * 0.03;

    console.log("Shift: ", shift);
    console.log("Total Tips: ", tips);
    console.log("Transfers: ", transfers);
    console.log("Bartenders: ", bartenders);
    console.log("Barbacks: ", barbacks);
    console.log("Foodrunner: ", foodrunner);
    console.log("Food Sales: ", foodSales);
    let tipOutTotal = 0.00;
    let barbackTipOut = 0.00;
  
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

    console.log("Barback Tip Out sending: ", barbackTipOut);
    console.log("Tip Out Total sending: ", tipOutTotal);
  
  
      return (

          <div className="flex flex-col items-center justify-evenly p-4">
              <HourlyForm bartenders={bartenders} barbacks={barbacks} barbackTipOut={barbackTipOut} tipOutTotal={tipOutTotal} />
          </div>
      )
}

export default Hourly