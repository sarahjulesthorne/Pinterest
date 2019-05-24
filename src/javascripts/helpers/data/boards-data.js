// module creates axios call to retrieve data from boards.json for use in application
import axios from 'axios';

const loadBoards = () => axios.get('../db/boards.json');

export default {
  loadBoards,
};
