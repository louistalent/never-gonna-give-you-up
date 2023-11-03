import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from './app';
import { Provider } from './context';
import './index.scss';

createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>
);