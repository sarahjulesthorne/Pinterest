// module creates two sets of pins data for use in other modules

import axios from 'axios';

/* function creates new Promise constructor to resolve set of pins which match a given board
Passed in board id as parameter and used filter on results of axios call
to create array of pins that go with selected board */
const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((response) => {
      const allPins = response.data.pins;
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      resolve(matchingPins);
    })
    .catch(error => reject(error));
});

/* new Promise constructor resolves built up array with nested data on each object
uses axios call to retrieve data from pins.json
maps over parameter array (boards)
filters pins array from axios call
to create new array of pins whose boardId matches the currently iterated board's id
assigns matching pins to new property on board object */
const getPinsForEachBoard = boards => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((response) => {
      const { pins } = response.data;
      const boardsWithPins = boards.map((board) => {
        const newBoard = board;
        const matchingPins = pins.filter(pin => pin.boardId === board.id);
        newBoard.pins = matchingPins;
        return newBoard;
      });
      resolve(boardsWithPins);
    })
    .catch(error => reject(error));
});

export default {
  loadPinsForBoard,
  getPinsForEachBoard,
};
