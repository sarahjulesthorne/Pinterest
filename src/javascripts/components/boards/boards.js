// module creates all functionality for boards view and calls pins view functionality
import boardData from '../../helpers/data/boards-data';
import pins from '../pins/pins';
import pinsData from '../../helpers/data/pins-data';
import util from '../../helpers/util';

/* function uses event.target methods to select the correct id for a board
whose button has been clicked
Toggles dipslay on board and pins views so that pins view displays
passes selected board id into initPins function to print pins */
const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  document.getElementById('boardsPage').classList.add('hide');
  document.getElementById('pinsPage').classList.remove('hide');
  pins.initPins(boardId);
};

/* loops over all see pins buttons and attaches click event listener
which calls seePinsDiv function */
const bindEvents = () => {
  const allButtons = Array.from(document.getElementsByClassName('see-pins'));
  allButtons.forEach((button) => {
    button.addEventListener('click', seePinDiv);
  });
};

/* function loops over boards array and prints cards for each board to page
Also calls functionality on see pins buttons */
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

/* uses series of chained promises to build data
And feed that data into the writeBoards function */
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
