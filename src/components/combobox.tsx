/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import Icon from './icons';

type ComboItemType = string | number | {key: string|number, label: string, desc?: string, icon?: string}

interface ComboboxProps{
	items: ComboItemType[]
	value?: string|number
	props?: any
	itemProps?: any
	panelProps?: any
	// hideImg?: boolean
	showInput?: boolean
	showSearch?: boolean
	// showDesc?: boolean
	className?: string
	onChange(key: string)
	minLabelWidth?: string|number
	placeholder?: string
}

const Combobox = ({items, value, className, placeholder, minLabelWidth, props, panelProps, itemProps, onChange, showSearch = true, showInput = true}: ComboboxProps) => {
	const [showMenu, setShowMenu] = React.useState(false)
	const [status, setStatus] = React.useState({
		value: value as ComboItemType|null,
		items,
		query: ""
	})
	const panelRef = React.useRef(null)

	const searchValue = (query: string) => {
		if (query==='') {
			setStatus({items, query, value: null});
			return;
		}
		const exp = new RegExp(query, 'i');
		const _items = items.filter(i=>{
			if (typeof i==='number') {
				return i===Number(query);
			} else if (typeof i==='string') {
				return i.match(exp);
			}
			return i.label.match(exp) || i.desc?.match(exp)
		})
		setStatus({...status, items: _items, query})
	}

	const onSelect = (index: number) => {
		const v = status.items[index];
		if (typeof v==='string' || typeof v==='number') {
			onChange(String(v))
		} else {
			onChange(String(v.key))
		}
		setShowMenu(false)
	}

	React.useEffect(()=>{
		const v = items.find(i=>{
			if (typeof i==='string' || typeof i==='number') return i===value;
			return i.key===value;
		});
		setStatus({...status, value: v || null})
	}, [value])

	return (
		<StyledDropdownPanel {...props} className={className} >
			<div className="input-bar" onMouseUp={() => { setShowMenu(true) }} onBlur={() => {setShowMenu(false)}} >
				{showInput && (
					!!status.value ? (
						<div style={{flex: 1}} className='d middle gap-sm'>
							{(typeof status.value==='string' || typeof status.value==='number') ? (
								<div style={{lineHeight: 1.5}}>{status.value}</div>	
							) : (
								<>
									{!!status.value.icon && <img src={status.value.icon} alt='current' width={24} style={{width: 24, height: 'auto', marginRight:'10px', visibility: 'initial'}} />}
									<div style={{lineHeight: 1.5}}>{status.value.label}{status.value.desc && ` (${status.value.desc})`}</div>
								</>
							)}
						</div>
					) : (
						<div className='gray-text' style={{flex: 1}}>{placeholder || "Please select"}</div>
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
				{showSearch && (
					<div className="search-bar">
						<div className="search">
							<Icon icon="Search" size={16} />
						</div>
						<input type="text" placeholder='Search' value = {status.query} onChange={(e) => {searchValue(e.target.value)}}/>
						{status.query!=="" && <div className="close" onClick={() => {searchValue("")}}><Icon icon="Close" size={16} /></div>}
					</div>
				)}
				
				<ul>
					{status.items.map((i, k) => (
						<li key={k} {...itemProps} onBlur={() => setShowMenu(false)} onClick={() => onSelect(k)}>
							{(typeof i==='string' || typeof i==='number') ? (
								i
							) : (
								<>
									{!!i.icon && <img loading='lazy' alt="extra" src={i.icon} style={{width: 24, height: 'auto', marginRight:'10px', visibility: 'initial'}} />}
									{!!status.query ? <span style={{minWidth: minLabelWidth || 'auto', display: 'inline-block'}} dangerouslySetInnerHTML={{__html: i.label.replace(new RegExp(status.query, 'i'), full=>`<span class="marked">${full}</span>`)}}></span> : <span style={{minWidth: minLabelWidth || 'auto', display: 'inline-block'}}>{i.label}</span> }
									{!!i.desc && (!!status.query ? <span dangerouslySetInnerHTML={{__html: i.desc.replace(new RegExp(status.query, 'i'), full=>`<span class="marked">${full}</span>`)}}></span> : <span>{i.desc}</span>) }
								</>
							)}
						</li>
					))}
					{status.items.length === 0 && <div className='center mt-1 mb-2 pl-1'>No results found</div>}
				</ul>
			</div>
			{showMenu && <div className="background" onClick={() => {setShowMenu(false)}}/>}
		</StyledDropdownPanel>
	);
}

const StyledDropdownPanel = styled.div`
	/* background-color: var(--light); */
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
			background-color: var(--light);
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
		left: -1px;
		right: -1px;
		overflow: hidden;
		/* width: 100%; */
		z-index: 1001;
		/* border-radius: 8px; */
		border: 1px solid var(--border);
		animation:  fadeIn-dropdown 0.3s linear;
		background-color: var(--light);
		
		ul {
			max-height: 200px;
			overflow-y: auto;
			padding-left: 0;
			margin: 0 0;

			li {
				/* d middle gap-sm */
				display: flex;
				align-items: center;
				gap: 0.5em;
				width: 100%;
				background-color: var(--light);
				padding: 0.7em 1rem;
				transition: 0.2s all;
				color: var(--onsurface);
				&:hover{
					background-color: var(--hover-back)!important;
				}
			}
		}
		.search-bar {
			margin: 16px;
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

export default Combobox