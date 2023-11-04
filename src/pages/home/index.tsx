/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import useSocket from '../../context/use-socket';
import Icon from '../../components/icons';
import { Button } from '../../components/buttons';
import { StyledInput } from '../../components/Inputs';
import { Others, StyledBlogList, StyledServiceList } from '../../components/others';
import "react-multi-carousel/lib/styles.css";
import { Modal } from '../../components/modal';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const serviceCategories = [
	{ title: 'Meme 1', img: '/assets/img/meme/meme-1.png' },
	{ title: 'Meme 2', img: '/assets/img/meme/meme-2.png' },
	{ title: 'Meme 3', img: '/assets/img/meme/meme-3.png' },
	{ title: 'Meme 4', img: '/assets/img/meme/meme-4.png' },
	{ title: 'Meme 5', img: '/assets/img/meme/meme-5.png' },
	{ title: 'Meme 6', img: '/assets/img/meme/meme-6.png' },
	{ title: 'Meme 7', img: '/assets/img/meme/meme-7.png' },
	{ title: 'Meme 8', img: '/assets/img/meme/meme-8.png' },
]

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 8
	},
	desktop: {
		breakpoint: { max: 3000, min: 1360 },
		items: 6
	},
	md: {
		breakpoint: { max: 1360, min: 1280 },
		items: 5
	},
	tablet: {
		breakpoint: { max: 1280, min: 768 },
		items: 4
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1
	}
};

const servicesData = [
	{ coverImg: '/assets/img/meme/meme-1.png', avatar: '/assets/img/team-2.jpg', name: 'james edwards', score: 4.7, title: 'I think Crypto is great to make your business', price: 160, link: '/services/programming-and-tech/portfolio/i-will-be-your-react-responsive-developer' },
	{ coverImg: '/assets/img/meme/meme-2.png', avatar: '/assets/img/team-3.jpg', name: 'james edwards', score: 5, title: 'I already using Crypto in my business', price: 500, link: '/services/programming-and-tech/portfolio/i-will-be-your-react-responsive-developer' },
	{ coverImg: '/assets/img/meme/meme-3.png', avatar: '/assets/img/team-4.jpg', name: 'james edwards', score: 2.9, title: 'Crypto is my life', price: 160, link: '/services/programming-and-tech/portfolio/i-will-be-your-react-responsive-developer' },
	{ coverImg: '/assets/img/meme/meme-4.png', avatar: '/assets/img/team-5.jpg', name: 'james edwards', score: 0, title: 'I think crypto is using for rickroll. Lol', price: 300, link: '/services/programming-and-tech/portfolio/i-will-be-your-react-responsive-developer' },
]

const blogsData = [
	{ coverImg: '/assets/img/b-1.jpg', author: 'James Edwards', title: 'Why people choose listio for own properties', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', tags: [{ type: 'primary', name: 'Health' }, { type: 'purple', name: 'Business' }], url: 'why-people-choose-listio-for-own-properties' },
	{ coverImg: '/assets/img/b-2.jpg', author: 'James Edwards', title: 'Why people choose listio for own properties', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', tags: [{ type: 'danger', name: 'Banking' }, { type: 'primary', name: 'Stylish' }], url: 'why-people-choose-listio-for-own-properties' },
	{ coverImg: '/assets/img/b-3.jpg', author: 'James Edwards', title: 'Why people choose listio for own properties', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', tags: [{ type: 'danger', name: 'Fashion' }, { type: 'primary', name: 'Wedding' }], url: 'why-people-choose-listio-for-own-properties' },
	{ coverImg: '/assets/img/b-1.jpg', author: 'James Edwards', title: 'Why people choose listio for own properties', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', tags: [{ type: 'danger', name: 'Fashion' }, { type: 'primary', name: 'Wedding' }], url: 'why-people-choose-listio-for-own-properties' },
]

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export const Home = () => {
	const navigate = useNavigate()

	const { darkTheme } = useSocket()

	// useEffect(() => {
	// 	const handleBeforeUnload = (e) => {
	// 		// Customize your alert message here
	// 		const message = "Are you sure you want to leave?";
	// 		e.preventDefault();
	// 		return (e.returnValue = message);
	// 	};

	// 	window.addEventListener('beforeunload', handleBeforeUnload);

	// 	return () => {
	// 		window.removeEventListener('beforeunload', handleBeforeUnload);
	// 	};
	// }, []);

	const [playBtn, setPlayBtn] = React.useState(false)
	const [egg, setEgg] = React.useState(false)
	const [slideMove, setSlideMove] = React.useState(false)
	const [slideMoved, setSlideMoved] = React.useState(false)

	const [showLanguageModal, setShowLanguageModal] = React.useState(false)
	const [recordImg, setRecordImg] = React.useState(false);
	const [isUpload, setIsUpload] = React.useState(false);

	let targetAudio: any = window.document.getElementById("audioBtn");
	let targetAudioEffect: any = window.document.getElementById("audioEffectBtn");


	const initAudio = () => {
		targetAudio.play();
	};

	const initEffectAudio = () => {
		targetAudioEffect.play();
	};

	const stopInitEffectAudio = () => {
		targetAudioEffect.pause();
	};

	useEffect(() => {
		if (egg)
			initEffectAudio()
	}, [egg])

	useEffect(() => {
		if (slideMove) {
			initEffectAudio();
		}
		if (!slideMove && slideMoved) {
			stopInitEffectAudio();
		}
	}, [slideMove])
	useEffect(() => {
		targetAudio = window.document.getElementById("audioBtn");
		targetAudioEffect = window.document.getElementById("audioEffectBtn");
	})
	return (
		<div>

			<audio id='audioEffectBtn' src="/assets/rickroll-effect.mp3" />
			<audio id='audioBtn' src="/assets/never.mp3" />




			{/* <StyledSection style={{ backgroundColor: 'var(--light)' }}>
				<h2 className='text-center'><span>Verified Pro </span><span className='primary-text'>Services</span></h2>
				<div className='text-center'>Hand-vetted talent for all your professional needs. </div>
				<img src="/assets/img/home/giphy.gif" alt="" width={'100%'} height={400} className="" />
			</StyledSection> */}
			<StyledHomeSection style={{ backgroundImage: darkTheme ? 'url(/assets/img/home/giphy.gif)' : 'url(/assets/img/home/giphy.gif)', backgroundSize: '100% 100%', backgroundPosition: 'center center' }}>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-8 col-sm-12'>
							<h3 className='mt' style={{ lineHeight: 1.3 }}>
								<span style={{ visibility: `${playBtn ? 'visible' : 'hidden'}`, borderBottom: '3px solid var(--primary)', cursor: 'pointer', padding: '', margin: '0 16px', color: 'var(--primary)' }}>
									{/* The Meme-iest Token in Crypto */}
									Get Rickrolled by
									<br />&nbsp;&nbsp; the Blockchain!
								</span>
							</h3>

							{/* <div className="search-bar mt-3">
								<input type="text" placeholder='Freelacer, location, or skills' />
								<Button className='primary' style={{ fontSize: '16px' }}>
									Search
								</Button>
							</div> */}
						</div>
						<div className='col-lg-4 col-md-4 col-sm-12 d column center md-hide'>
							<div className="image">
								<img src='/assets/record-black.png' alt="home-image" className='back' />
								{/* <img src='/assets/img/freelance.svg' alt="home-image" style={{ position: 'relative' }} /> */}
								<img src='/assets/record-trans.png' alt="home-image" style={{ position: 'relative', visibility: 'hidden' }} />
							</div>
						</div>

					</div>
				</div>

				<div className="play-button">
					<Button className='' onClick={() => { setPlayBtn(true); initAudio() }} style={{ padding: '0px', borderRadius: '50%' }}>
						<img src="/social/youtube.png" draggable='false' height={80} width={80} alt="" className="r-50" />
					</Button>
				</div>
				{/* <div className="Rickroll" style={{ backgroundImage: darkTheme ? 'linear-gradient(to bottom,var(--light) 0%,rgba(0,0,0,0) 100%)' : 'linear-gradient(to bottom,rgba(192,213,240,.65) 0%,rgba(0,0,0,0) 100%)' }}> */}
				<div className="Rickroll" style={{ backgroundImage: 'linear-gradient(to bottom,var(--light) 0%,rgba(0,0,0,0) 100%)' }}>
					Music
				</div>



			</StyledHomeSection >

			<StyledSection style={{ backgroundColor: 'var(--light)' }}>
				{/* <h2 className='text-center'><span>Verified Pro </span><span className='primary-text'>Services</span></h2> */}
				{/* <div className='text-center'>Hand-vetted talent for all your professional needs. </div> */}
				<Carousel
					swipeable={false}
					draggable={false}
					showDots={false}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={4200}
					keyBoardControl={true}
					customTransition="all 0.5s"
					transitionDuration={500}
					containerClass="carousel-container mt-3 mb-3"
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-30-px"
				>
					{serviceCategories.map((i, k) => (
						<div key={"sponsored" + k} className='mr-1'>
							<StyledServiceList>
								<Link onMouseEnter={() => { if (playBtn) { setSlideMove(true); setSlideMoved(true) } }} onMouseLeave={() => { if (playBtn) setSlideMove(false) }} to="#">
									<img src={i.img} alt={i.img} width={500} height={417} />
								</Link>
								<div className='top'>
									<div className='user'>

										<Link to='/user/smith' className='name'>Vote</Link>
									</div>
									<div className='save-btn'>
										<Icon icon='Heart' />
									</div>
								</div>

							</StyledServiceList>
						</div>
					))}
				</Carousel>
			</StyledSection>

			<StyledSection style={{ backgroundColor: 'var(--light)' }}>
				<p className='primary-text text-center' style={{ margin: 0, fontWeight: 500, fontSize: '18px', position: 'relative', zIndex: 999 }}>
					<span className="" style={{ cursor: 'pointer' }} onMouseEnter={() => { if (playBtn) setEgg(true); }} >
						Rickroll by Categories
					</span>
				</p>
				<video src="https://www.youtube.com/watch?v=bnmAi53H520" width="320" height="240">

				</video>
				{/* <h2 className='text-center' style={{ lineHeight: 1.1 }}>
					Choose Your Desire
					<br />
					Category
				</h2> */}
				<div className='container mt-3 container-egg'>
					<div className={`${egg ? 'show-egg' : 'hidden-egg'}`}>
						<img onClick={() => { setShowLanguageModal(true); setIsUpload(false); }} style={{ cursor: 'pointer' }} src="/assets/ernstingsfamily-ostern.gif" width={50} height={70} alt="" className="eater-egg" />
					</div>
					<div className='row center'>
						{serviceCategories.map((i, k) => (
							<Link key={k} to={`#`} className='col-lg-3 col-md-4 col-sm-6'>
								<StyledCategoryCard>
									<img src={i.img} alt={i.img} style={{ height: '250px', width: '200px', borderRadius: '10px' }} className='category-symbol' />
									<div className="title">{i.title}</div>
									{/* <div className='count' style={{ marginTop: -10 }}>{i.Rickroll} Rickroll Found</div> */}
									<div className="d center">
										<div className="go-btn">
											<Icon icon="ArrowRight" size={32} />
										</div>
									</div>
								</StyledCategoryCard>
							</Link>
						))}
					</div>
					{/* <div className="d center mt-2">
						<Button className='primary' style={{ padding: '20px 64px', borderRadius: '8px' }}>
							See More
						</Button>
					</div> */}
				</div>
			</StyledSection>

			<StyledSection style={{ backgroundColor: 'var(--back)' }}>
				<div className="container">
					<div className="row center">
						<div className="col-lg-6 col-md-6 col-sm-12 d center">
							<div className="resume-image">
								<div className="animate-img"></div>
								<div className="back"></div>
								<img src={"./assets/img/resume.png"} />
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 d center">
							<div className="resume-panel">
								<h1>
									Don't just find. be found put your Music in front of great platforms
								</h1>
								<p>
									It will be publish on social sites with your information.<br />
									Why should do it. <br />
									1.Free publish.<br />
									2.To become famous.
								</p>
								<Button onClick={() => { setIsUpload(true); setShowLanguageModal(true) }} className='primary mt-2'>
									Upload Your Music
									<Icon icon="Upload" marginLeft={16} size={20} />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</StyledSection>

			<StyledSection style={{ backgroundColor: 'var(--light)' }}>
				<h2 className='text-center'><span>Comment about </span><span className='primary-text'>Crypto</span></h2>

				<div className='container-sm mt-3'>
					<div className="row">
						{servicesData.map((i, k) => (
							<div key={k} className='col-lg-3 col-md-4 col-sm-6'>
								<div key={k} className='mt-1 mb-1'>
									<Link to={"/user/" + i.name}>
										<StyledUserCard>
											<div className="verified">
												<div className="icon">
													<Icon icon="Verified" size={18} />
												</div>
											</div>
											<div className="preferred">
												<div className="icon">
													<Icon icon="Preferred" size={18} margin={8} />
												</div>
											</div>
											<div className='avatar'>
												<img src={i.avatar} alt={i.avatar} width={400} height={400} />
												{/* <Icon icon='ColorCheck' /> */}
											</div>
											<div className="name">
												{i.name}
											</div>
											<div className='price'>${i.price} / Hr</div>
											<div className='detail'>
												{i.title}
											</div>
											<div className="country">
												<Icon icon="Location" size={18} margin={8} />
												New York, US
											</div>
											<div className="reviews">
												<Others.Stars value={i.score} size={11} />
												<div className='review'>
													{i.score}
												</div>
											</div>
										</StyledUserCard>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</StyledSection>


			<StyledSection style={{
				background: 'var(--primary) url(/assets/img/landing-bg.png) no-repeat',
				backgroundSize: '100%',
				padding: '5em 2em',
				color: '#fff'
			}}
			>
				<div className='h3 text-center'>Subscribe Now!</div>
				<div className='text-center' style={{ maxWidth: '900px', margin: '8px auto' }}>
					Subscribe now and gain exclusive access to a wealth of Rickroll opportunities.
				</div>
				<div className='d middle mt-2' style={{ margin: '0 auto', maxWidth: 800, position: 'relative' }}>
					<div style={{ flex: 1 }}>
						<StyledInput
							placeholder='Enter your email here'
							style={{
								background: '#eee',
								borderColor: '#eee',
								color: '#111'
							}}
						/>
						<Button className="primary"
							style={{
								position: 'absolute',
								right: '2px',
								top: '2px'
							}}>
							Submit
						</Button>
					</div>
				</div>

			</StyledSection>

			<StyledSection style={{ padding: '0' }}>
				<ScrollContainer style={{ height: '0' }}>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
						<span style={{ fontSize: "30px" }}>😀</span>
					</Animator>
					<Animator animation={ZoomInScrollOut} style={{ zIndex: 999 }}>
						<span style={{ fontSize: "40px" }}>Never ganna give you up ✨</span>
					</Animator>
					<Animator style={{ zIndex: 999 }} animation={FadeUp}>
						<span onClick={() => setRecordImg(true)} style={{ fontSize: "40px", cursor: 'pointer' }}>
							{
								recordImg ?
									<img src="/assets/img/home/rickroll.gif" height={200} width={200} alt="click it" className="r-50" />
									:
									<img src="/assets/record-trans.png" height={70} width={70} alt="click it" className="rotating" />
							}
						</span>
					</Animator>

					<Animator animation={batch(Fade(), Sticky())}>
						<span style={{ fontSize: "30px", fontWeight: 'bold', color: 'var(--secondary)' }}>
							PepelitoBlaze`s Production. Copyright@2023
						</span>
					</Animator>
				</ScrollContainer>
			</StyledSection>

			<Modal onClose={() => { setShowLanguageModal(false) }} show={showLanguageModal} closeOverlay={true} style={{ padding: '0', borderRadius: '8px', maxWidth: '600px' }}>
				<StyledLanguageModal>
					<div className="header">
						<div className="flex">
							<div className={`tab active`}>
								{
									isUpload ? 'What`s this? OMG' : 'Gotcha, Cool. You found good egg.'
								}
							</div>
							{/* <div className={`tab ${languageTab===2 ? "active" : ""}`} onClick={() => {setLanguageTab(2)}}>
								Currency
							</div> */}
						</div>
						<div className="close" onClick={() => { setShowLanguageModal(false) }}>
							<Icon icon="Close" size={18} />
						</div>
					</div>
					<div className="content">
						<div className="row">

							<img src={`/assets/img/home/${isUpload ? 'f-rickroll.gif' : 'rickroll.gif'}`} alt="" height={400} width={'100%'} className="" />
						</div>
					</div>
				</StyledLanguageModal>
			</Modal>
		</div >
	)
};


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

const StyledSection = styled.div`
	padding: 78px 1rem;
	@media only screen and (max-width: 767px) {
		padding: 32px 8px;
	}
	.carousel-container{
		z-index: 1002!important;
	}
	.container-egg{
		.eater-egg:hover{
			scale: 1.6;
		}
		position: relative;
		.show-egg{
			display: block;
		position: absolute;
	/* z-index: -1; */
			top: -70px;
			left: 100px;
		}
		.hidden-egg{
		position: absolute;
			display: none;

			/* z-index: -1; */
			top: -40px;
			left: 100px;
		}
	}
	.resume-image {
		position: relative;
		z-index: 5;
		padding: 16px;
		img {
			z-index: 3;
			margin: 16px auto;
		}
		.back {
			z-index: 99;
			position: absolute;
			/* left: 50%; */
			top: 60px;
			transform: rotate(40deg);
			z-index: -1;
			border-radius: 40px;
			background-color: #eee;
			opacity: 0.5;
			width: 340px;
			height: 340px;
		}
		.animate-img {
			z-index: 100;
			position: absolute;
			/* left: 50%; */
			top: 60px;
			transform: translateX(-50%);
			z-index: -1;
			border-radius: 40px;
			background-color: var(--primary);
			opacity: 0.3;
			width: 340px;
			height: 340px;
			animation: rotate-center 10s linear infinite both;
		}
	}
	.rotating{
			animation: rotate-center 10s linear infinite both;
	}
	@keyframes rotate-center {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.resume-panel {
		background-color: transparent;
		box-shadow: 0px 0px 40px rgba(56,152,226,.3);
		border-radius: 12px;
		padding: 55px 70px;
		position: relative;
		margin-top: 50px;
		z-index: 1;
		h1 {
			font-size: 2.25rem;
			font-weight: 600;
			line-height: 1.2;
		}
		p {
			color: var(--gray-text);
		}
		
		@media only screen and (max-width: 767px) {
			padding: 24px;
			h1 {
				font-size: 20px;
			}
		}

	}
`

const StyledUserCard = styled.div`
	display: block;
	margin: 16px ;
	padding: 14px 20px 19px;
	box-shadow: 0 1px 3px #12151b29;
	border-radius: 4px 4px 0 0;
	/* background-color: var(--light); */
	cursor: pointer;
	transition: 0.2s;
	border: 1px solid var(--light-primary);
	color: var(--text);
	text-align: center;
	min-height: 270px;
	position: relative;
	overflow: hidden;
	@media only screen and (max-width: 767px) {
		margin: 4px;
	}
	&:hover {
		/* transform: translateY(-10px); */
		/* background-color: var(--light-back); */
		border-color: var(--dark-primary);
		color: var(--text);
		box-shadow: 1px 8px 20px var(--light-primary);
		transform: scale(1.05);
		.avatar {
			img {
				border: 1px solid var(--primary);
				box-shadow: 1px 8px 10px var(--light-primary);
				
			}
		}
	}
	.avatar {
		text-align: center;
		/* padding: 8px; */
		img {
			border-radius: 50%;
			border: 2px solid transparent;
			width: 100px;
			height: 100px;
			transition: 0.2s;
			/* border: 6px solid #f0f0f0; */
		}
	}
	.name {
		font-weight: 600;
		margin: 8px 0;
		font-size: 20px;
		font-weight: 700;
	}
	.price {
		font-size: 16px;
		font-weight: 400;
		color: #0caa41;
		margin:  0;
	}
	.detail {
		margin: 0;
		color: var(--gray-text);
	}
	.country {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: 500;	
		margin: 2px 0;
		color: var(--gray-text);
	}
	.reviews{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 2px 0;
		color: var(--gray-text);
		.review {
			margin-left: 8px;
		}
	}
	.verified {
		position: absolute;
		right: 0;
		top: 0;
		&::before {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			border-top: 50px solid #c851151f;
			border-left: 50px solid transparent;
		}
		.icon {
			z-index: 5;
			position: relative;
			color: #FF6700;
			float: left;
			margin: 6px 6px 0 0;
		}
	}
	.preferred {
		position: absolute;
		left: 10px;
		top: 8px;
		color: #4eace1;
		.icon {
			z-index: 5;
			position: relative;
			float: left;
			margin: 6px 6px 0 0;
		}
	}
`

const StyledHomeSection = styled.div`
	padding: 78px 1rem 0;
	position: relative;
	@media only screen and (max-width: 767px) {
		padding: 100px 8px;
	}
	.play-button{
		position: absolute;
		z-index: 1000;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		
		animation-name: scale-animation;
		animation-duration: 2s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		
		@keyframes scale-animation {
			0% { transform: scale(1); }
			50% { transform: scale(1.3); }
			100% { transform: scale(1); }
		}
		

	}
	.title {
		line-height: 1.11;
		letter-spacing: -1.2px;
		margin-bottom: 24px;
		font-size: 48px;
		@media only screen and (max-width: 767px) {
			font-size: 32px;
		}
	}
	.image {
		position: relative;
		max-width: 90%;
		margin: 0 auto;
		z-index: 2;

		img {
			transition: all 0.3s linear 0s;
			max-width: 90%;
		}
		.back {
			position: absolute;
			left: 10%;
			top: 20px;
			max-width: 75%;
			animation: jmSpin 20s linear infinite;
		}
	}
	@keyframes jmSpin {
		50% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.Rickroll {
		font-size: 150px;
		line-height: 110px;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-28%);
		z-index: 0;
		font-weight: 800;
		text-transform: uppercase;
		padding-right: 200px;
		background: linear-gradient(to bottom,var(--light) 0%,rgba(0,0,0,0) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		user-select: none;
		-webkit-user-select: none;
	}
		@media only screen and (max-width: 767px) {
		
		.Rickroll{
			font-size: 100px !important;
			/* left: 0; */
		}
	}
	
	.search-bar {
		display: flex;
		align-items: center;
		position: relative;
		padding: 16px;
		background-color: var(--light);
		z-index: 10;
		border-radius: 8px;
		margin: 32px 0;
		max-width: 700px;
		box-shadow: 0 10px 20px 0 rgba(30, 64, 89, 0.15);
		justify-content: space-between;
		input {
			border: none;
			background-color: transparent;
			color: var(--text);
			font-size: 20px;
			width: auto;
			flex: 11;
			margin-right: 8px;
			&:focus, &:active {
				border: none;
				outline: none;
			}
		}
		button {
			flex: 1;
		}
	}
`

const StyledCategoryCard = styled.div`
	padding: 8px;
	background-color: var(--light-primary);
	border-radius: 10px;
	position: relative;
	z-index: 1;
	overflow: hidden;
	text-align: center;
	transition: .5s all ease;
	text-align: center;
	margin: 16px 0;
	color: var(--text);
	.go-btn {
		border-radius: 50%;
		border: 2px solid var(--primary);
		margin: 8px 0;
		transition: 0.2s;
		color: var(--primary);
	}
	&:hover {
		background-color: #1967d2;
		color: #eee;
		&::after {
			background-color: #fff;
			opacity: .1;
			width: 500%;
			height: 500%;
		}
		.go-btn {
			border: 2px solid #eee;
			color: #eee;
			transform: rotate(-30deg);
		}
	}
	&::after {
		width: 110px;
		height: 110px;
		position: absolute;
		right: -60px;
		bottom: -60px;
		content: '';
		background-color: #1967d2;
		border-radius: 50%;
		opacity: .04;
		z-index: -1;
		transition: .5s all ease;
		opacity: 0;
	}
	img {
		width: 150px;
		height: auto;
		margin: 8px auto;
	}
	.title {
		font-weight: 500;
		margin: 4px 0 12px;
		font-size: 20px;
	}
	.count {
		font-size: 14px;
		margin: 16px 0;
	}
`

const StyledDarkBtn = styled.button`
	border-radius: 0px 4px 4px 0px;
	padding: 1em 1.5em;
	border: 0;
	cursor: pointer;
	font-size: 1.2em;
	background-color: var(--primary);
	color: #fff;
`