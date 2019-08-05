import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './ProfilePage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ProfilePage />, document.getElementById('root'));

serviceWorker.unregister();
