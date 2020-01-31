import React from 'react';
import ReactDOM from 'react-dom';

/* Import Context Provider */
import { Provider } from './context/context';

/* Import components */
import App from './components/App/App';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root'));
