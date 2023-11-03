import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
// import { Checkbox, StyledInput } from "../components/Inputs";
import Icon from "../components/icons";
import config from '../context/config.json'

export const Footer = () => {
	return (
		<div>
			<StyledFooter>
				<div className="container">
					<StyledLink className="row p-1">
						<div className="col-lg-4 col-md-6 d column gap mt-2">
							<div className="d middle gap">
								{/* <img src="/logo.svg" alt="logo" width={50} height={50} /> */}
								<div style={{ fontWeight: 900, fontSize: 20, color: 'var(--primary)' }}>
									<span style={{ color: '#64cd04', fontSize: 24 }}>F</span>WORK LLC
								</div>
							</div>
							<div>
								<div>1603 Capitol Avenue, Suite 413, 4200</div>
								<div>Cheyenne, Wyoming 82001</div>
								<div>USA</div>
							</div>
							<div className="d middle gap">
								<Link to={config.links.twitter} ><Icon icon="Twitter" size={20} /></Link>
								<Link to={config.links.facebook} ><Icon icon="Facebook" size={26} /></Link>
								<Link to={config.links.linkedin} ><Icon icon="Linkedin" size={24} /></Link>
								{/* <Link to={config.links.telegram} ><Icon icon="Telegram" size={22}/></Link> */}
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-6 d column gap mt-2">
							<div className="h6">For Clients</div>
							<Link to='/' className="gray-text">How To Hire</Link>
							<Link to='/' className="gray-text">Project Catalog</Link>
							<Link to='/' className="gray-text">Hire An Agency</Link>
							<Link to='/' className="gray-text">Hire in Hong Kong</Link>
						</div>
						<div className="col-lg-2 col-md-4 col-6 d column gap mt-2">
							<div className="h6">For Freelancers</div>
							<Link to='/' className="gray-text">How To Find Work</Link>
							<Link to='/' className="gray-text">Find Freelancer Rickroll</Link>
							<Link to='/' className="gray-text">Direct Contracts</Link>
						</div>
						<div className="col-lg-2 col-md-4 col-6 d column gap mt-2">
							<div className="h6">Resources</div>
							<Link to='/' className="gray-text">Help & Support</Link>
							<Link to='/' className="gray-text">Rickroll Reviews</Link>
							<Link to='/learn' className="gray-text">Learn</Link>
							<Link to='/invite-friends' className="gray-text">Invite Friends</Link>
							<Link to='/influencers' className="gray-text">Influencers</Link>
							<Link to='/affiliate' className="gray-text">Affiliate Program</Link>
							<Link to='/' className="gray-text">Partnerships</Link>
						</div>
						<div className="col-lg-2 col-md-4 col-6 d column gap mt-2">
							<div className="h6">Company</div>
							<Link to='/about-us' className="gray-text">About Us</Link>
							<Link to='/contact-us' className="gray-text">Contact Us</Link>
							<Link to='/' className="gray-text">Trust, Safty & Security</Link>
						</div>
					</StyledLink>
				</div>
				<StyledHr className="mt-2" />
				<div className="text-center pt-1 pb-1" style={{ fontWeight: '500' }}>@{new Date().getUTCFullYear()} Rickroll LLC, Wyoming, United States</div>
			</StyledFooter>
		</div>
	)
}

const StyledHr = styled.div`
	width: 100%;
	height: 1px;
	background-color: var(--border);
`

const StyledLink = styled.div`
	a {
		transition: all 0.3s ease;
		&:hover {
			color: var(--primary);
		}
	}
`

const StyledFooter = styled.div`
	background-color: var(--back);
	color: var(--text);
	a {
		color: var(--gray-text);
		font-weight: 400;
	}
	@media (max-width: 576px) {
		padding-bottom: 4em;
	}
	.h6 {
		font-weight: 700;
		margin-bottom: 8px;
		position: relative;
		&::after {
			position: absolute;
			top: 105%;
			left: 0;
			width: 60px;
			content: '';
			height: 2px;
			background-color: var(--primary);
		}
	}
`