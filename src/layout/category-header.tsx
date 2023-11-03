/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useSocket from '../context/use-socket';


const CategoryHeader = () => {
	const { L } = useSocket()
	const [hideMenu, setHideMenu] = React.useState(false);
	const category = L.category;
	const onClick = () => {
		setHideMenu(true);
		setTimeout(()=>setHideMenu(false), 500)
	}

	return (
		<StyledCategoryHeader>
			<div className='container'>
				<ul>
					{Object.keys(category).map((_ct, ctIndex) => (
						<li key={ctIndex}>
							<Link to={`/services/${_ct}`}>{category[_ct]?.label}</Link>
							<div className={'container' + (hideMenu ? ' hide' : '')} style={{ columnCount: 4 }}>
								<ul key={`${ctIndex}-children`} >
									{
										Object.entries(category[_ct].children).map(([key, value]: any, index: number) => (
											<li key={`${ctIndex}-${index}`}>
												<Link to={`/services/${_ct}/${key}`} onClick={onClick}>{category[_ct].children[key]?.label}</Link>
											</li>
										))
									}
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
		</StyledCategoryHeader>
	)
}

const StyledCategoryHeader = styled.div`
	position: relative;
	margin-top: 1px;
	padding: 0;
	background-color: var(--light-back);
	border-top: 0.5px solid var(--border);
	border-bottom: 0.5px solid var(--border);
	color: var(--text);
	width: 100%;
	> div > ul {
		list-style: none;
		padding: 0;
		margin: 0;
		overflow-x: auto;
		overflow-y: hidden;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		li {
			padding: 0;
			cursor: pointer;
			> a {
				white-space: nowrap;
				padding: 16px 0;
				width: 100%;
				display: block;
				color: var(--gray-text);
				&:active {
					+ div {
						display: none;
					}
				}
				&:hover {
					color: var(--text);
				}
			}
			
			&:hover {
				>div:not(.hide) {
					animation:  animation-dropdown 0.2s ease-in-out;
					-webkit-animation:  animation-dropdown 0.2s ease-in-out;
					-moz-animation: animation-dropdown 0.2s ease-in-out;
					animation-fill-mode: forwards;
					-moz-animation-fill-mode: forwards;
					-webkit-animation-fill-mode: forwards;
					animation-delay: 0.2s;
					-webkit-animation-delay: 0.2s;
					-moz-animation-delay: 0.2s;
				}
			}
			> div {
				opacity: 0;
				visibility: hidden;
				position: absolute;
				width: 100vw;
				left: 0;
				right: 0;
				top: 99%;
				background-color: var(--menu-back);
				z-index: 10;
				box-shadow: 0 1px 3px var(--shadow);
				padding: 16px 24px;
				transition: 0.2s;
				&:hover {
					display: block;
				}
				ul {
					display: flex;
					flex-direction: column;
					> li {
						white-space: nowrap;
						display: block;
						a {
							padding: 6px 0;
						}
						&.bold {
							padding: 10px 0;
							font-weight: 700;
							color: var(--primary);
						}
					}
				}
			}
		}
	}
	@media (max-width: 992px) {
		display: none;
	}	
`

export default CategoryHeader;