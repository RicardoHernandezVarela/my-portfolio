import React from 'react';
import ReactDOM from 'react-dom';

/* Import Context Provider */
import { Provider } from './context';

/* Import components */
import Home from './pages/Home';

ReactDOM.render(
    <Provider>
        <Home />
    </Provider>, 
    document.getElementById('root'));
