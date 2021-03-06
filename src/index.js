import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider} from 'react-redux';
import configStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
