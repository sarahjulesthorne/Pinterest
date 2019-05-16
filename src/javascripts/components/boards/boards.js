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

const findEvents = () => {
const allButtons = Array.from(document.getElementsByClassName('see-pins'));
allButtons.forEach((button) => {
button.addEventListener('click', seePinDiv);
});
};

const writeBoards = (boards) => {
let domString = '';
boards.forEach((board) => {

});
};