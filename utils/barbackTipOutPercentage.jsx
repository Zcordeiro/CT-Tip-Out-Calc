
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
}

export default barbackTipOutPercentage