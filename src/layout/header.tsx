/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Icon from "../components/icons";
import CategoryHeader from "./category-header";
import { config } from "../context";
import useSocket from "../context/use-socket";
import { emailEllipse } from "../context/helper";
import Avatar from "../components/avatar";
import { Modal } from "../components/modal";
import languages from '../context/languages.json'
import { StyledSocialLoginBtn } from "../components/buttons";


export const Header = () => {
	const navigate = useNavigate()
	const { darkTheme, L, lang, update } = useSocket()
	const location = useLocation()
	const [isScrolled, setIsScrolled] = React.useState(false)
	const [isMobile, setIsMobile] = React.useState(false)
	const [isMenuOpend, setIsMenuOpend] = React.useState(false)
	const [showWhitepaper, setShowWhitepaper] = React.useState(false)
	const [socialIcon, setSocialIcon] = React.useState(false)
	const category = L.category;

	const [status, setStatus] = React.useState({
		isDashboard: false,
		constructionHeaderDisplay: true,
		showCategory: false,
		searchKeyword: ''
	})

	const onScroll = () => {
		const sticky = 10
		if (window.pageYOffset > sticky) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	}

	const onResize = () => {
		if (window.innerWidth <= 992) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}


	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onResize);
		setIsScrolled(window.pageYOffset > 10)
		setIsMobile(window.innerWidth <= 992)
		setIsMenuOpend(false)
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	React.useEffect(() => {
		if (location.pathname.indexOf('/account') === 0) {
			setStatus({ ...status, isDashboard: true, showCategory: false })
		} else if (location.pathname.indexOf('/services') === 0) {
			setStatus({ ...status, isDashboard: false, showCategory: true })
		} else {
			setStatus({ ...status, isDashboard: false, showCategory: false })
		}
	}, [location.pathname])

	const search = () => {

	}

	return (
		<>
			<StyledHeader className={`transparent ${status.constructionHeaderDisplay ? 'under-construction' : ''} ${isScrolled ? `fixed ${location.pathname.indexOf('/services') === 0 ? 'shadow-none' : ''}` : ''}`}>
				{config.construction && (
					<StyledConstructionHeader className={`${status.constructionHeaderDisplay ? '' : 'hide'}`}>
						<div className="d middle col-gap center wrap" style={{ rowGap: 0 }}>
							<div className="bold-800">Under Construction</div>
							<div>All data is used for testing purposes only.</div>
						</div>
						<div className="top-close" onClick={() => setStatus({ ...status, constructionHeaderDisplay: false })}>✕</div>
					</StyledConstructionHeader>
				)}

				<div className={`main ${status.isDashboard ? 'ml-1 mr-1' : 'container'}`}>
					<div>
						<Link to='/' style={{ paddingBottom: '0.1em', paddingTop: '0.5rem' }}>
							<img src="/photo_logo.png" alt="logo" width={50} style={{ height: '100%' }} />

							{/* <div style={{fontWeight: 900, fontSize: 24, color: 'var(--primary)'}}>WORK</div> */}
						</Link>
						<div onClick={() => { setIsMenuOpend(!isMenuOpend) }}></div>
					</div>
					<div className={`${isMenuOpend ? '' : 'hide'}`}>
						<div>
							<Link to='/' style={{ paddingBottom: '0.1em' }}>
								<img src="/photo_logo.png" alt="logo" width={50} style={{ height: '100%' }} />

								{/* <span style={{fontSize: 24, color: 'var(--primary)', fontWeight: 700}}>WORK</span> */}
							</Link>
							{isMenuOpend && (
								<div className="d between pt-1" style={{ width: '100%' }}>
									<div className="d middle col-gap">
										{/* {!!account ? (
											<>
												<Avatar icon={account.avatar} username={account.fullname || account.username || account.email} />
												<div>{emailEllipse(account.email)}</div>
											</>
										) : (
											<>
											</>
										)} */}
									</div>
									<div className="close">
										<span onClick={() => setIsMenuOpend(false)}>✕</span>
									</div>
								</div>
							)}

							<ul>
								<li>
									<Link to='#'>
										<div className="icon"><Icon icon="Service" size={24} /></div>
										<div>Home</div>
									</Link>
								</li>
								<li>
									<Link to='#'>
										<div className="icon"><Icon icon="Freelancer" size={24} /></div>
										<div>About</div>
									</Link>
								</li>
								<li>
									<Link to='#'>
										<div className="icon"><Icon icon="Project" size={24} /></div>
										<div>Gallery</div>
									</Link>
								</li>
								<li>
									<Link onClick={() => setShowWhitepaper(true)} to='#'>
										<div className="icon"><Icon icon="Blog" size={24} /></div>
										<div>Whitepaper</div>
									</Link>
								</li>
							</ul>
						</div>
						<ul>
							<>
								<li style={{ position: 'relative' }} className="login d gap-sm center middle">
									{/* <StyledSocialLoginBtn onClick={() => setSocialIcon(true)}>
										<div className='btn twitter'><Icon icon='Twitter' size={20} /></div>
									</StyledSocialLoginBtn>
									<StyledSocialLoginBtn onClick={() => setSocialIcon(true)}>
										<div className='btn '>
											<img src="/assets/telegram.jpg" width={36} height={36} alt="telegram" className="r-50" />
										</div>
									</StyledSocialLoginBtn>
									<StyledSocialLoginBtn onClick={() => setSocialIcon(true)}>
										<div className='btn github'>
											<img src="/assets/dextools.svg" width={22} height={22} alt="dextools" className="r-50" />
										</div>
									</StyledSocialLoginBtn> */}

								</li>
							</>

							{/* <li><Link to='/'>Upload Resume</Link></li> */}


							{/* <li>
								<StyledTheme onClick={() => { setShowLanguageModal(true) }}>
									<div>
										<Icon icon="Language" size={22} />
									</div>
								</StyledTheme>
							</li> */}

							<li>
								<StyledTheme onClick={() => update({ darkTheme: !darkTheme })}>
									<div>
										{darkTheme ? (<Icon icon="Night" size={20} />) : (<Icon icon="Day" size={20} />)}
									</div>
									<div className="d middle gap-sm">
										{/* <Icon icon="Theme" /> */}
										<div>{darkTheme ? 'Night' : 'Light'}</div>
									</div>
								</StyledTheme>
							</li>

							{/* <li><Link to='/post-project'>Post Project</Link></li> */}
							{/* <li style={{padding: '0 1em'}}>
								<Link to='/login'>
									<Button className="light-primary fill sm">Login</Button>
								</Link>
							</li>
							<li style={{padding: '0 1em'}}>
								<Link to='/register'>
									<Button className="primary fill sm">Register</Button>
								</Link>
							</li> */}
						</ul>
					</div>
				</div>
				{isMenuOpend && (
					<div className="back-layout" onClick={() => setIsMenuOpend(false)}></div>
				)}
				{status.showCategory && <CategoryHeader />}
			</StyledHeader>

			<Modal onClose={() => { setShowWhitepaper(false) }} show={showWhitepaper} closeOverlay={true} style={{ padding: '0', borderRadius: '8px', maxWidth: '600px' }}>
				<StyledLanguageModal>
					<div className="header">
						<div className="flex">
							<div className={`tab active`}>
								NOOT NOOT
							</div>
							{/* <div className={`tab ${languageTab===2 ? "active" : ""}`} onClick={() => {setLanguageTab(2)}}>
								Currency
							</div> */}
						</div>
						<div className="close" onClick={() => { setShowWhitepaper(false) }}>
							<Icon icon="Close" size={18} />
						</div>
					</div>
					<div className="content">
						<div className="row">
							<video style={{ width: '100%', height: '100%' }} autoPlay loop>
								<source src="/assets/pingu.mp4" type="video/mp4" />
								<source src="/assets/pingu.mp4" type="video/ogg" />
								Your browser does not support the video tag.
							</video>
							{/* <img src="/assets/img/home/rickroll.gif" alt="" height={400} width={'100%'} className="" /> */}
						</div>
					</div>
				</StyledLanguageModal>
			</Modal>

			<Modal onClose={() => { setSocialIcon(false) }} show={socialIcon} closeOverlay={true} style={{ padding: '0', borderRadius: '8px', maxWidth: '600px' }}>
				<StyledLanguageModal>
					<div className="header">
						<div className="flex">
							<div className={`tab active`}>
								Never gonna let you down…
							</div>
							{/* <div className={`tab ${languageTab===2 ? "active" : ""}`} onClick={() => {setLanguageTab(2)}}>
								Currency
							</div> */}
						</div>
						<div className="close" onClick={() => { setSocialIcon(false) }}>
							<Icon icon="Close" size={18} />
						</div>
					</div>
					<div className="content">
						<div className="row">
							<img src="/assets/neverdown.gif" alt="" height={400} width={'100%'} className="" />
						</div>
					</div>
				</StyledLanguageModal>
			</Modal>
		</>
	)
}


const StyledLanguageModal = styled.div`
	max-width: 740px;
	background-color: var(--bg1);
	padding: 8px 0!important;
	border-radius: 8px;
	.header {
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px 0 32px;
		.tab {
			padding: 16px 0;
			margin: 0 28px 0 0;
			border-bottom: 2px solid transparent;
			cursor: pointer;
			font-size: 18px;
			&.active {
				border-bottom: 2px solid var(--primary);
			}
			&:hover {
				color: var(--primary);
			}
		}
		.close {
			cursor: pointer;
			&:hover {
				color: var(--primary);
			}
		}
	}
	.content {
		padding: 1rem 32px;
		max-height: 500px;
		overflow-y: auto;
		overflow-x: auto;
		.lang {
			padding: 1rem 0;
			cursor: pointer;
			&.active {
				color: var(--primary);
			}
			&:hover {
				color: var(--primary);
			}
		}
	}

`

const StyledConstructionHeader = styled.div`
	background-color: rgb(252, 213, 53);
	color: #102A51;
	&.hide {
		display: none;
	}
	> div {
		display: flex;
		justify-content: center;
		gap: 1em;
		position: relative;
		white-space: nowrap;
		/* padding: 0 2em; */
		overflow: auto;
		
	}
	.top-close {
		position: relative;
		position: fixed;
		right: 10px;
		top: 0px;
		cursor: pointer;
		font-weight: 600;
	}
`

const StyledHeader = styled.div`
	font-size: 1em;
	z-index: 1005;
	color: var(--text);
	&.transparent {
		background-color: var(--light-back);
		position: sticky;
		top: 0;
		width: 100%;
	}
	&.fixed {
		box-shadow: 0 5px 30px var(--shadow);
		transition: 0.2s ease-in;
		animation-duration: 0.5s;
		animation-name: slideInDown;
		&.shadow-none {
			box-shadow: none;
		}
	}
	.search {
		border: 1px solid var(--gray-text);
		padding: 8px 12px;
		border-radius: 50px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;
		input {
			background-color: transparent;
			border: none;
			color: var(--text);
			font-size: 16px;
			&:hover, &:focus, &:active{
				border: none;
				outline: none;
			}
			margin-right: 18px;
		}
		.icon {
			position: absolute;
			right: 12px;
			cursor: pointer;
			color: var(--gray-text);
			&:hover {
				color: var(--text);
			}
		}
	}
	.main {
		height: 100%;
	}
	.main > :nth-child(1) {
		display: none;
		height: 100%;
	}
	.main > :nth-child(2) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		> div {
			display: flex;
			align-items: center;
			gap: 1em;
			.top-part {
				display: none;
			}
		}
	}
	.account-menu {
		display: none;
	}
	.close {
		display: none;
	}
	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: nowrap;
		li {
			padding: 20px 12px;
			white-space: nowrap;
			display: flex;
			justify-content: center;
			align-items: center;
			> a {
				display: flex;
				align-items: center;
				gap: 0.5em;
				> .icon {
					display: none;
				}
			}
			.menu-icon {
				> :nth-child(1) {
					display: block;
				}
				> :nth-child(2) {
					display: none;
				}
			}
			&.avatar {
				cursor: pointer;
				&:hover {
					> .account-dropdown {
						animation:  animation-dropdown 0.2s linear;
						-webkit-animation:  animation-dropdown 0.2s linear;
						-moz-animation: animation-dropdown 0.2s linear;
						animation-fill-mode: forwards;
						-moz-animation-fill-mode: forwards;
						-webkit-animation-fill-mode: forwards;
						animation-delay: 0.2s;
						-webkit-animation-delay: 0.2s;
						-moz-animation-delay: 0.2s;
					}
				}
			}
			&.notification {
				cursor: pointer;
				&:hover {
					> .notification-dropdown {
						animation:  animation-dropdown 0.2s linear;
						-webkit-animation:  animation-dropdown 0.2s linear;
						-moz-animation: animation-dropdown 0.2s linear;
						animation-fill-mode: forwards;
						-moz-animation-fill-mode: forwards;
						-webkit-animation-fill-mode: forwards;
						animation-delay: 0.2s;
						-webkit-animation-delay: 0.2s;
						-moz-animation-delay: 0.2s;
					}
				}
			}
			&.contact {
				cursor: pointer;
				&:hover {
					> .contact-dropdown {
						animation:  animation-dropdown 0.2s linear;
						-webkit-animation:  animation-dropdown 0.2s linear;
						-moz-animation: animation-dropdown 0.2s linear;
						animation-fill-mode: forwards;
						-moz-animation-fill-mode: forwards;
						-webkit-animation-fill-mode: forwards;
						animation-delay: 0.2s;
						-webkit-animation-delay: 0.2s;
						-moz-animation-delay: 0.2s;
					}
				}
			}
			&.order {
				cursor: pointer;
				&:hover {
					> .order-dropdown {
						animation:  animation-dropdown 0.2s linear;
						-webkit-animation:  animation-dropdown 0.2s linear;
						-moz-animation: animation-dropdown 0.2s linear;
						animation-fill-mode: forwards;
						-moz-animation-fill-mode: forwards;
						-webkit-animation-fill-mode: forwards;
						animation-delay: 0.2s;
						-webkit-animation-delay: 0.2s;
						-moz-animation-delay: 0.2s;
					}
				}
			}
		}
		.category {
			display: none;
		}
	}
	@media (max-width: 992px) {
		.main > :nth-child(1) {
			height: 55.5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			> :nth-child(2) {
				width: 30px;
				height: 30px;
				padding: 6px 2px 0;
				cursor: pointer;
				&:before {
					content: "";
					position: absolute;
					width: 24px;
					height: 2px;
					background-color: var(--text);
					border-radius: 10px;
					box-shadow: 0 0.5em 0 0 var(--text), 0 1em 0 0 var(--text);
				}
			}
		}
		.main > :nth-child(2) {
			width: 300px;
			height: 100%;
			position: fixed;
			color: var(--text);
			background-color: var(--light-back);
			padding: 1em;
			padding-top: 0;
			flex-direction: column;
			justify-content: flex-start;
			z-index: 1003;
			top: 0;
			left: 0;
			overflow-y: auto;
			-webkit-overflow-scrolling: touch;
			transition-duration: .6s;
			transition-timing-function: ease;
			&.hide {
				left: -400px
			}
			> div {
				flex-direction: column;
				width: 100%;
				> a {
					display: none;
				}
				.account-menu {
					display: block;
					width: 100%;
					position: relative;
					.account-input {
						display: none;
						&:checked {
							~ ul {
								height: 600px;
								transition: 0.3s all ease;
							}
							~ label {
								.arrow {
									> :nth-child(1) {
										transform: rotateX(180deg);
										transition: all 0.3s ease;
									}
								}
							}
						}
					}
					> ul {
						padding-left: 1.5em;
						height: 0;
						overflow: hidden;
						transition: 0.3s all ease;
						li {
							padding-bottom: 0.2em;
							> a {
								display: flex;
								align-items: center;
								gap: 0.5em;
							}
						}
					}
				}
				.close {
					width: 100%;
					text-align: right;
					display: block;
					> span {
						width: 30px;
						height: 30px;
						float: right;
						background: transparent;
						text-align: center;
						line-height: 30px;
						cursor: pointer;
					}
				}
			}
			a {
				color: var(--text);
			}
		}
		ul {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			padding-left: 1em;
			li {
				display: block;
				position: relative;
				padding: 1em 0;
				width: 100%;
				> a {
					> .icon {
						display: block;
					}
				}
				&.order {
					display: none;
				}
				&.contact {
					display: none;
				}
				&.notification {
					display: none;
				}
				&.avatar {
					display: none;
				}
			}
			.category {
				display: block;
			}
			.menu-icon {
				> :nth-child(1) {
					display: none !important;
				}
				> :nth-child(2) {
					display: block !important;
				}
			}
		}
		.back-layout {
			background-color: rgba(0, 0, 0, 0.5);
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			position: fixed;
			z-index: 1002;
		}
	}
	.arrow {
		position: absolute;
		top: 25px;
		left: auto;
		right: 10px;
		height: 6px;
		width: 6px;
		display: block;
		cursor: pointer;
		> :nth-child(1) {
			transform: rotateX(0deg);
			transition: all 0.3s ease;
		}
	}
	.arrow-input {
		display: none;
		~ ul {
			height: 0px;
			overflow: hidden;
			transition: height 0.3s ease;
		}
	}
	.arrow-input:checked {
		~ ul {
			height: auto;
		}
		~ label {
			.arrow {
				> :nth-child(1) {
					transform: rotateX(180deg);
					transition: all 0.3s ease;
				}
			}
		}
	}
`

const StyledTheme = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	> :nth-child(2) {
		display: none;
		@media (max-width: 992px) {
			display: flex;
		}
	}
	> :nth-child(1) {
		cursor: pointer;
		color: var(--text);
		&:hover {
			color: var(--primary);
		}
	}
`