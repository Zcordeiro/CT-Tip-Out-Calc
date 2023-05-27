import HourlyForm from "@/components/HourlyForm";

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

const CreateHourlyForm = ({ formData }) => {
  let shift = formData.shift;
  let tips = parseInt(formData.tips);
  let transfers = parseInt(formData.transfers) * 0.1;
  let bartenders = formData.bartenders;
  let barbacks = formData.barbacks;
  let foodrunner = formData.foodrunner;
  let foodSales = parseInt(formData.foodSales) * 0.03;

  console.log("Shift: ", shift);
  console.log("Total Tips: ", tips);
  console.log("Transfers: ", transfers);
  console.log("Bartenders: ", bartenders);
  console.log("Barbacks: ", barbacks);
  console.log("Foodrunner: ", foodrunner);
  console.log("Food Sales: ", foodSales);
  let tipOutTotal = 0;
  let barbackTipOut = 0;

  if (shift === "AM") {
    if (foodrunner === "Yes") {
      tipOutTotal = tips + transfers - foodSales;
      barbackTipOut =
        tipOutTotal * barbackTipOutPercentage(bartenders, barbacks);
    }
    if (foodrunner === "No") {
      tipOutTotal = tips + transfers;
      barbackTipOut =
        tipOutTotal * barbackTipOutPercentage(bartenders, barbacks);
    }
  }

  console.log("tipOutTotal: ", tipOutTotal);
  console.log("barbackTipOut: ", barbackTipOut);

  return (
    <>
      <div>
        {/* <HourlyForm
          bartenders={bartenders}
          barbacks={barbacks}
          barbackTipOut={barbackTipOut}
          tipOutTotal={tipOutTotal}
        /> */}
        This is a test.
      </div>
    </>
  );
};

export default CreateHourlyForm;
