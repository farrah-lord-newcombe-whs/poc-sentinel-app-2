import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// render micro frontend function
window.renderApp2 = (containerId, history) => {
  ReactDOM.render(
    <App history={history}/>,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountApp2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('App2-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();