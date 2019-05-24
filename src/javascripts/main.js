// module initiates functionality on page load
import 'bootstrap';
import '../styles/main.scss';
import boards from './components/boards/boards';

const init = () => {
  boards.initBoards();
};
init();
