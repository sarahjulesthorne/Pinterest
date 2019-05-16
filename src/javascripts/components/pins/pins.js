import pinsData from '../../helpers/data/pins-data';
import util from '../../helpers/util';

const findEvents = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', () => {
    document.getElementById('boardsPage').classList.remove('hide');
    document.getElementById('pinsPage').classList.add('hide');
  });
};

const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `<img src="${pin.imageUrl}" alt="pin image">`;
  });
  util.printToDom('pinsOnBoard', domString);
};

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
