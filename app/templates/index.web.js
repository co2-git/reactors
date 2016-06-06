import ReactDOM from 'react-dom';
import App from './app/App';
import Reactors from 'reactors';

Reactors.platform = 'web';

const props = {};

ReactDOM.render(<App {...props} />, document.getElementById('reactors'));
