import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import TokenContextProvider from './Context/token';
import { Provider } from 'react-redux';
import { store } from './components/Redux/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="448455951107-pr3po2v0uci2lmu0jr4jhjvesofnfjb9.apps.googleusercontent.com">
			<Provider store={store}>
				<TokenContextProvider>
					<App />
				</TokenContextProvider>
			</Provider>
		</GoogleOAuthProvider>
	</React.StrictMode>
);
