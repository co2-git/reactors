import ReactDOM from 'react-dom';
import App from './app/App';
import Reactor from 'reactor';

Reactor.platform = 'web';

const props = {};

ReactDOM.render(<App {...props} />, document.getElementById('reactor'));
