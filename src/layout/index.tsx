/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Context from '../context';
import { Header } from './header';
import { Footer } from './footer';
import { MessageBox } from '../components/message-box';
import useSocket from '../context/use-socket';

const Layout = () => {
	const { darkTheme, account } = useSocket()

	// const [status, setStatus] = React.useState({
	// 	isOpen: false,
	// 	dropdownActive: -1,
	// 	innerHeight: document.body.clientHeight
	// });


	const [toTop, setTop] = React.useState(false);

	const onScroll = () => {
		if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
			setTop(true)
		}
		else {
			setTop(false)
		}
	}

	React.useEffect(() => {
		window.onscroll = onScroll;
	}, [])
	React.useEffect(() => {
		window.scroll({ top: 0, left: 0 })
	}, []);


	return (
		<div className={darkTheme ? `dark-theme` : ''}>
			<Header />
			<div className={`root`}>
				<Outlet />
			</div >
			{/* <Footer /> */}
			<StyledToTop style={{ display: toTop ? 'flex' : 'none' }} onClick={() => { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) }}>
				<img src="/assets/img/top.svg" alt="to-top" />
			</StyledToTop>
			{(!!account?.isBuyer || !!account?.isSeller) && <MessageBox />}
		</div>
	)
}

export default Layout;

const StyledToTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	background-color: var(--primary);
	bottom: 32px;
	right: 32px;
	padding: 10px;
	width: 50px;
	height: 50px;
	border-radius: 10px;
	z-index: 100;
	cursor: pointer;
	transition: 0.25s ease-in-out;
	&:hover {
		transform: translateY(-10px);
	}
`
