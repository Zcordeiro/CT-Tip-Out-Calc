const CreateHourlyForm = ({ formData }) => {
  const { shift, tips, transfers, bartenders, barbacks, foodrunner } =
    formData;
  console.log("Shift: ", shift);
  console.log("Total Tips: ", tips);
  console.log("Transfers: ", transfers);
  console.log("Bartenders: ", bartenders);
  console.log("Barbacks: ", barbacks);
  console.log("Foodrunner: ", foodrunner);
  let tipOutPercent = 0;
  let tipOut = 0;

  if (bartenders === 2 && barbacks === 1) {
    tipOutPercent = 0.1;
  }
  if (bartenders === 3 && barbacks === 1) {
    tipOutPercent = 0.08;
  }
  if (bartenders === 3 && barbacks === 1) {
    tipOutPercent = 0.06;
  }

  return (
    <div>
      {foodrunner === "Yes" ? (
        <label className="flex flex-col items-center justify-center">
          <span className="text-center">Enter your sales:</span>
          <input
            className="border border-gray-400 rounded-md p-2 m-2 text-black"
            type="number"
            name="sales"
            placeholder="Enter your sales"
          />
        </label>
      ) : null}
      {}
    </div>
  );
};

export default CreateHourlyForm;
