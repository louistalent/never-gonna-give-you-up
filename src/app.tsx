/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './layout';
import { Home } from './pages/home';
import Docs from './pages/home/docs';
// import useSocket from './context/use-socket';
// import config from './context/config.json'
import NoPage from './pages/404';
import Loading from './components/Loading';
import useSocket from './context/use-socket';
import Theme from './components/theme';

function App() {
	const location = useLocation();

	const { loading } = useSocket()

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route path="" element={<Home />} />
					{/* <Route path="theme" element={<Theme />} /> */}
					{/* <Route path="login" element={<LoginProcess />} /> */}
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
			{/* <div className='layout'>
				<div className="loader"></div>
			</div> */}
			{loading && <Loading />}
			<ToastContainer />
		</>
	);
}

export default App;
