import React from 'react'
import styled from 'styled-components'
import Icon from './icons'
import { SeriesBoxplotDataDataLabelsAnimationOptions } from 'highcharts'

interface SwitchInterface{
	values?: any
	value?: string|number
	onChange: Function
	props?: any
	itemProps?: any
	panelProps?: any
	hideImg?: SeriesBoxplotDataDataLabelsAnimationOptions
	inputValue?: string
	onChangeInput?: Function
	showInput?: boolean
	showDesc?: boolean
	className?: string
}

export const SearchDropdown = ({values, value, className, hideImg, props, panelProps, itemProps, onChange, showInput = true, showDesc = false}: SwitchInterface) => {
	const [showMenu, setShowMenu] = React.useState(false)
	const [status, setStatus] = React.useState({
		value: value,
		searchValues: values,
		searchInput: ""
	})
	const updateStatus = (params) => setStatus({ ...status, ...params })


	const panelRef = React.useRef(null)

	const searchValue = (keyword: string) => {
		const vs = {};
		Object.entries(values).map(([key, value]: any, index: number) => {
			if(value.symbol?.toUpperCase()?.indexOf(keyword?.toUpperCase()) > -1) {
				vs[key] = value;
			}
		});
		updateStatus({searchValues: vs, searchInput: keyword});
	}

	React.useEffect(() => {
		searchValue(status.searchInput)
	}, [values])

	return (
		<StyledDropdownPanel {...props} className={className} >
			<div className="input-bar" onMouseUp={() => { setShowMenu(true) }} onBlur={() => {setShowMenu(false)}} >
				{showInput && (
					!!status.value && !!values?.[status.value] ? (
						<div style={{flex: 1}} className='d middle gap-sm'>
							{!!values[status.value]?.img && !hideImg && <img loading='lazy' src={values[status.value]?.img} alt={values[status.value]?.img} style={{width: 24, height: 'auto', marginRight:'10px', visibility: 'initial'}} />}
							<div style={{lineHeight: 1.5}}>{values[status.value].symbol}</div>
						</div>
					) : (
						<div style={{flex: 1}}>Please select</div>
					)
				)}
				<div className="selectdown" style={{width: showInput ? 'auto' : '100%'}}>
					<div className="drop-icon">
						<div style={{transition: '0.12s', transform: showMenu? 'rotate(180deg)' : 'none'}} >
							<Icon icon="DownArrow" size={12} />
						</div>
					</div>
				</div>
			</div>
			<div className="menu-panel" ref={panelRef} style={{display: showMenu ? 'block' : 'none', ...panelProps?.style}}>
				<div className="search-bar">
					<div className="search">
						<Icon icon="Search" size={16} />
					</div>
					<input type="text" placeholder='Search' value = {status.searchInput} onChange={(e) => {searchValue(e.target.value)}}/>
					{status.searchInput!=="" && <div className="close" onClick={() => {searchValue("")}}><Icon icon="Close" size={16} /></div>}
				</div>
				<div className="currency-list">
					{values && Object.entries(status.searchValues).map(([key, value]: any, index: number) => (
						<div 
							key={"menu" + index} 
							className="item d middle gap-sm" 
							{...itemProps} 
							onBlur={() => {setShowMenu(false) }} 
							onClick={() => {
								updateStatus({value: key}); 
								onChange(key); 
								setShowMenu(false)
							}}
						>
							{!hideImg && value && (value?.img ) && <img loading='lazy' alt="extra" src={value.img} style={{width: 24, height: 'auto', marginRight:'10px', visibility: 'initial'}} />}
							{value.symbol}
							{showDesc && <p style={{color: 'var(--text)', fontSize: '14px', marginLeft: '16px'}}>{value?.desc}</p>}
						</div>
					))}
					{Object.values(status.searchValues)?.length == 0 && <div className='center mt-1 mb-2 pl-1'>No results found</div>}
				</div>
			</div>
			{showMenu && <div className="background" onClick={() => {setShowMenu(false)}}/>}
		</StyledDropdownPanel>
	);
}

const StyledDropdownPanel = styled.div`
	background-color: var(--light-back);
	padding: 0.5rem 0.75rem;
	border-radius: 4px;
	cursor: pointer;
	position: relative;
	min-width: 100px;
	user-select: none;
	border: 1px solid var(--border);
	height: 50px;
	&.error {
		border-color: var(--danger);
	}
	&:hover, &:active{
		/* border: 1px solid var(--second); */
	}
	.input-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		input {
			border: none;
			width: 50%;
		}
		.close {
			width: 32px;
			color: var(--text);
			&:hover {
				color: var(--primary);
			}
		}
		.selectdown {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 16px;
			background-color: var(--light-back);
			border-radius: 8px;
			padding: 4px 8px;
			color: var(--text);
			/* min-width: 120px; */
			width: auto;
			.drop-icon {
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
		}
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
	.menu-panel{
		position: absolute;
		top: calc(100% + 10px);
		left: 0;
		overflow: hidden;
		width: 100%;
		z-index: 1001;
		border-radius: 8px;
		animation:  fadeIn-dropdown 0.3s linear;
		background-color: var(--light-back);
		.currency-list {
			max-height: 300px;
			overflow-y: auto;
		}
		.search-bar {
			margin: 12px;
			position: relative;
			border: 1px solid var(--border);
			border-radius: 6px;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			input {
				border: none;
				outline: none;
				padding: 8px;
				margin: 0;
				height: 40px;
				background-color: transparent;
				color: var(--text);
				flex: 1
			}
			.search {
				margin: 8px 2px 8px 12px;
			}
			.close {
				margin: 8px 12px 8px 4px;
				color: var(--text);
				&:hover {
					color: var(--primary);
				}
			}
		}
		.item{
			width: 100%;
			background-color: var(--light-back);
			padding: 1rem;
			transition: 0.2s all;
			color: var(--onsurface);
			&:hover{
				background-color: var(--hover-back)!important;
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