import boardData from '../../helpers/data/boards-data';
import pins from '../pins/pins';
import pinsData from '../../helpers/data/pins-data';
import util from '../../helpers/util';

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error(`You clicked a button ${boardId}`);
  document.getElementById('boardsPage').classList.add('hide');
  document.getElementById('pinsPage').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = Array.from(document.getElementsByClassName('see-pins'));
  allButtons.forEach((button) => {
    button.addEventListener('click', seePinDiv);
  });
};

const writeBoards = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="col-3">';
    domString += `<div id='${board.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += `<button class="btn btn-warning see-pins">${board.pins.length} Pins</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('userBoards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then(response => pinsData.getPinsForEachBoard(response.data.boards))
    .then((boardsWithPins) => {
      writeBoards(boardsWithPins);
    })
    .catch(error => console.error('error from initBoards requests', error));
};

export default {
  initBoards,
};
