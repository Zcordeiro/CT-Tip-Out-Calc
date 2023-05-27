const HourlyForm = ({ bartenders, barbacks, barbackTipOut, tipOutTotal }) => {
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly p-4">
      {arrayOfBartenders.map((bartender) => (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Bartender {bartender + 1}
          </h1>
          <p className="text-center">
            Bartender {bartender + 1} tip out: ${tipOutTotal / bartenders}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForm;
