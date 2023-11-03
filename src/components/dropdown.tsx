import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Icon from './icons'

interface SwitchInterface{
	values?: any
	className?: string
	value?: string|number
	onChange: Function
	props?: any
	itemProps?: any
	panelProps?: any
	hideImg?: boolean
}

export const Dropdown = ({values, value, className, hideImg, props, panelProps, itemProps, onChange}: SwitchInterface) => {
	const [showMenu, setShowMenu] = React.useState(false)
	const panelRef = React.useRef(null)

	return (
		<StyledDropdownPanel {...props} onMouseUp={() => { setShowMenu(true) }} onBlur={() => {setShowMenu(false)}} className={className}>
			<div style={{overflow: 'hidden'}}>{value || 'Please select'}</div>
			<div className="drop-icon">
				<div style={{transition: '0.12s', transform: showMenu? 'rotate(180deg)' : 'none'}} >
					<Icon icon="DownArrow" size={12} />
				</div>
			</div>
			<div className="menu-panel" ref={panelRef} style={{display: showMenu ? 'block' : 'none', ...panelProps?.style}}>
				{
					values && values.map((item, index) => {
						return <div 
									key={"menu" + index} 
									className= {`item flex middle ${value === item.value ? "active" : ""}`}
									{...itemProps} 
									onBlur={() => {setShowMenu(false) }} 
									onClick={() => {
										/* setStatus({selectedItem: item.value || item.symbol || item.name});  */
										onChange(item.key || item.key || item.symbol); 
										setShowMenu(false)
									}}
								>
									{!hideImg && (item.img || item.icon) && <img loading='lazy' width={24} height={24} alt="mnu" src={item.img || item.icon} style={{marginRight:'10px', borderRadius: '50%'}} />}
									<div>{item.value || item.symbol || item.name }</div>
								</div>		
					})
				}
			</div>
			{
				showMenu && <div className="background" onClick={() => {setShowMenu(false)}}/>
			}
		</StyledDropdownPanel>
	);
}

const StyledDropdownPanel = styled.div`
	background-color: var(--light-back);
	color: var(--text);
	padding: 0.5rem 0.75rem;
	border-radius: 4px;
	margin: 0;
	cursor: pointer;
	position: relative;
	user-select: none;
	border: 1px solid var(--border);
	/* height: 50px; */
	min-width: 200px;
	&.error {
		border-color: var(--danger);
	}
	&:hover {
		border-color: var(--focus-border);
	}
	.background{
		width: 100vw;
		height: 100vh;
		background-color: transparent;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.drop-icon{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		right: 10px;
		top: 0;
		transition: 0.2s;
		color: var(--text);
	}
	.menu-panel{
		position: absolute;
		top: calc(100% + 10px);
		left: 0;
		overflow: hidden;
		width: 100%;
		z-index: 1001;
		max-height: 300px;
		overflow-y: auto;
		border-radius: 8px;
		animation:  fadeIn-dropdown 0.3s linear;
		background-color: var(--light-back);
		box-shadow: var(--shadow) 0px 7px 14px, var(--shadow) 0px 3px 6px, rgba(94, 102, 115, 0.9) 0px 0px 1px inset;
		.item{
			width: 100%;
			background-color: var(--light-back);
			padding: 12px;
			transition: 0.2s all;
			color: var(--onsurface);
			p {
				text-overflow: ellipsis;
				overflow: clip;
			}
			&:hover{
				background-color: var(--hover-back);
			}
			&.active {
				color: var(--primary);
			}
		}
	}
	
	@-webkit-keyframes fadeIn-dropdown {
		0%   {
			opacity: 0;
			transform: translateY(10px);
		}
		50% {
			opacity: 1;
		}
		100% { 
			transform: translateY(0);
		}
   }
	
   @-moz-keyframes  fadeIn-dropdown {
		0%   {
			opacity: 0;
			transform: translateY(10px);
		}
		50% {
			opacity: 1;
		}
		100% { 
			transform: translateY(0);
		}
   }
   
	@keyframes fadeIn-dropdown {
		0%   {
			opacity: 0;
			transform: translateY(10px);
		}
		50% {
			opacity: 1;
		}
		100% { 
			transform: translateY(0);
		}
	}
`