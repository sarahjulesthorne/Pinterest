/* module creates functionality for viewing pins for a particular board
Activates the To Boards buton functionality
Prints correct pins to page
exports initPins for use in boards.js */
import pinsData from '../../helpers/data/pins-data';
import util from '../../helpers/util';

// function uses classList methods called within a click event listener
// to toggle the display on boards and pins
const findEvents = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', () => {
    document.getElementById('boardsPage').classList.remove('hide');
    document.getElementById('pinsPage').classList.add('hide');
  });
};
// function builds domString of pins from array parameter and prints them to page
const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `<img src="${pin.imageUrl}" alt="pin image">`;
  });
  util.printToDom('pinsOnBoard', domString);
};

/* function calls function from pins-data.js
and passes in boardId parameter to create array of pins for that board
Prints pins to pins page using write function above */
const initPins = (boardId) => {
  findEvents();
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      writePins(pins);
    })
    .catch(error => console.error(error));
};

export default {
  initPins,
};
