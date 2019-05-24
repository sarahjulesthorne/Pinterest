// module creates basic print function for use in other modules
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

export default {
  printToDom,
};
