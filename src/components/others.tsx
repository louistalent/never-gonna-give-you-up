import { styled } from "styled-components"
import Icon from "./icons"

export const Others = {
	Badge: ({ text, type }: { text: string, type: 'primary' | 'warning' | 'danger' | 'primary' | 'purple' | 'light-primary' | 'light-warning' | 'light-danger' }) => {
		return (
			<StyledBadge className={type}>{text}</StyledBadge>
		)
	},
	Stars: ({ value, valueDisplay, size }: { value: number, valueDisplay?: boolean, size: number }) => {
		return (
			<div className="d middle" style={{ gap: '0.3em' }}>

				{Array(Math.floor(value)).fill(0).map((i, k) => (
					<div key={k} style={{ color: 'var(--orange)' }}>
						<Icon icon="Star" size={size} />
					</div>
				))}
				{Array(5 - Math.floor(value)).fill(0).map((i, k) => (
					<div key={k} style={{ color: '#bac1cc' }}>
						<Icon icon="Star" size={size} />
					</div>
				))}
				{value !== 0 && !!valueDisplay && <div style={{ color: `${value > 4.5 ? 'var(--secondary)' : (value > 2 ? 'var(--orange)' : 'var(--danger)')}`, fontWeight: '900', lineHeight: 1.6 }}>{value}</div>}
			</div>
		)
	}
}
export const StyledNoticeDropDown = styled.div`
	position: absolute;
	top: 56px;
	right: 0;
	left: auto;
	width: 400px;
	box-shadow: 0 0 20px 0 var(--shadow);
	transition: all 0.3s ease;
	opacity: 0;
	visibility: hidden;
	overflow: hidden;
	z-index: 999999;
	color: var(--text);
	@media (max-width: 992px) {
		display: none;
	}
	&:hover {
		opacity: 1;
		visibility: visible;
	}
	> div {
		background-color: var(--menu-back);
		padding: 0;
		border-radius: 6px;
		padding: 1em;
		> :nth-child(1) {
			display: flex;
			align-items: center;
			gap: 1em;
			background-color: var(--hover-back);
			border-radius: 6px;
			padding: 1em;
			font-size: 0.85em;
			> :nth-child(2) {
				flex: 1;
				color: var(--orange);
				font-weight: 600;
				cursor: pointer;
			}
			> :nth-child(3) {
				font-weight: 600;
			}
		}
		> :nth-child(2) {
			width: 100%;
			margin-top: 1em;
			height: 300px;
			overflow-y: auto;
			overflow-x: hidden;
			> div {
				padding: 1em;
				cursor: pointer;
				position: relative;
				.avatar {
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				.title {
					font-weight: 600;
					font-size: 1em;
					max-width: 280px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.content {
					font-size: 0.9em;
					line-break: anywhere;
					max-width: 280px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.time {
					position: absolute;
					top: 30px;
					right: 15px;
					font-size: 0.8em;
				}
				&:hover {
					background-color: var(--hover-back);
					border-radius: 6px;
				}
			}
		}
	}
`

const StyledBadge = styled.div`
	color: var(--light) !important;
	border-radius: 0.3rem;
	font-size: 0.85em;
	padding: 0em 0.7em;
	font-weight: 550;
	&.primary {
		background-color: var(--primary);
	}
	&.warning {
		background-color: var(--orange);
	}
	&.danger {
		background-color: var(--danger);
	}
	&.secondary {
		background-color: var(--secondary);
	}
	&.purple {
		background-color: var(--purple);
	}
	&.light-primary {
		background: rgba(139, 195, 74,0.1);
		color: #8bc34a !important;
	}
	&.light-warning {
		background: rgba(255, 152, 0,0.1);
		color: #ff9800 !important;
	}
	&.light-danger {
		background: rgba(220, 44, 44,0.1);
		color: #dc2c2c !important;
	}
`

export const StyledSteps = styled.ul`
	padding: 0;
	border-left: 1px dashed var(--dark-primary);
	&.check {
		> li:before {
			content: "✓";
		}
	}
	&.arrow {
		> li:before {
			content: "";
		}
	}
	> li {
		list-style: none;
		position: relative;
		padding-left: 30px;
		margin-bottom:  16px;
		&:before {
			position: absolute;
			left: -15px;
			top: 0;
			width: 24px;
			height: 24px;
			font-size: 16px;
			border-radius: 50%;
			background: var(--primary);
			color: #fff;
			box-shadow: 0px 0px 0px 5px var(--light-primary);
			-webkit-box-shadow: 0px 0px 0px 5px var(--light-primary);
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&:after {
			position: absolute;
			content: '';
			left: 0;
			top: 12px;
			height: 1px;
			width: 30px;
			border-bottom: 1px dashed var(--dark-primary);
		}
		> div {
			background: var(--menu-back);
			padding: 1.5em;
			border-radius: 4px;
		}
	}
`

export const StyledAttachment = styled.div`
	display: flex;
	align-items: center;
	background: var(--menu-back);
	margin: 0.5rem 0;
	padding: 1rem 1rem;
	border-radius: 6px;
	> :nth-child(1) {
		display: flex;
		flex: 1;
		align-items: center;
		gap: 1em;
		> img {
			width: 55px;
			height: auto;
		}
		> :nth-child(2) {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
			> :nth-child(1) {
				font-weight: 600;
			}
			> :nth-child(2) {
				color: var(--gray-text);
			}
		}
	}
	> :nth-child(2) {
		width: 45px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--light-back);
		border-radius: 4px;
		color: var(--text);
		cursor: pointer;
	}
`

export const StyledBidderSimpleList = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	padding: 1rem 0;
	border-bottom: 1px dashed var(--border);
	> :nth-child(1) {
		display: flex;
		align-items: center;
		gap: 1em;
		flex: 1;
		> img {
			width: 80px;
			border-radius: 50%;
		}
		> div {
			display: flex;
			flex-direction: column;
			> :nth-child(1) {
				font-size: 1.2em;
				font-weight: 700;
			}
			> :nth-child(2) {
				color: var(--gray-text);
				display: flex;
				gap: 0.3em;
				align-items: center;
			}
			> :nth-child(3) {
				color: var(--gray-text);
				display: flex;
				align-items: center;
				gap: 0.3em;
				flex-wrap: wrap;
			}
		}
	}
	> :nth-child(2) {
		text-align: right;
		> :nth-child(1) {
			color: var(--primary);
			font-size: 1.4em;
			font-weight: 750;
			margin-bottom: 0.3em;
		}
		> :nth-child(2) {
			color: var(--gray-text);
		}
	}
`

export const StyledBlogList = styled.div`
	background: var(--light-back);
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px var(--shadow);
	-webkit-box-shadow: 0px 0px 10px 0px var(--shadow);
	cursor: pointer;
	margin: 1em 0;
	color: var(--text);
	transition: 0.2s;
	overflow: hidden;
	&:hover {
		transform: translateY(-4px);
	}
	.popular {
		position: absolute;
		top: 0;
		right: 0;
	}
	> img {
		width: 100%;
		border-radius: 6px 6px 0 0;
		transition: 0.2s;
	}
	> div {
		display: flex;
		flex-direction: column;
		gap: 0.3em;
		padding: 12px 24px;
		line-height: 1.5;
		> :nth-child(1) {
			color: var(--gray-text);
			font-size: 14px;
		}
		> :nth-child(2) {
			font-weight: 700;
		}
		> :nth-child(3) {
			color: var(--gray-text);
			font-size: 14px;
		}
		> :nth-child(4) {
			margin-top: 4px;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 1em;
			> div {
				padding: 6px 10px;
				border-radius: 6px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				font-weight: 600;
				font-size: 0.9em;
				cursor: pointer;
				&.primary {
					background: rgba(9, 178, 228,0.1);
					color: #09b2e4;
				}
				&.primary {
					background: rgba(121, 187, 44,0.1);
					color: #79bb2c;
				}
				&.purple {
					background: rgba(144, 87, 208,0.1);
					color: #9057d0;
				}
				&.danger {
					background: rgba(255, 87, 34,0.1);
					color: #ff5722;
				}
			}
		}
	}
`
export const StyledBlockquote = styled.blockquote`
	background: var(--light-back);
	padding: 28px;
	margin: 50px 0;
	border-radius: 4px;
	border-left: 3px solid #0b85ec;
	display: flex;
	align-items: center;
	flex-wrap: no-wrap;
	gap: 1.5em;
	> :nth-child(1) {
		color: #f96825;
		min-width: 32px;
	}
	> :nth-child(2) {
		font-style: italic;
		> :nth-child(1) {
			margin: 25px 0 0;
			line-height: 2;
		}
		> :nth-child(2) {
			color: var(--text);
			font-size: 1.2em;
			font-weight: 700;
			margin-top: 0.5em;
		}
	}
`
export const StyledRelyList = styled.div`
	overflow: hidden;
	margin: 0 0 50px;
	display: flex;
	align-items: center;
	gap: 1.5em;
	> img {
		width: 64px;
		height: 64px;
		border-radius: 50%;
	}
	> div {
		> :nth-child(1) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 0.5em;
			> :nth-child(1) {
				> :nth-child(1) {
					font-size: 18px;
					font-weight: 500;
				}
				> :nth-child(2) {
					font-size: 0.85em;
					color: var(--orange);
				}
			}
			> :nth-child(2) {
				display: flex;
				align-items: center;
				gap: 0.3em;
				color: var(--gray-text);
				cursor: pointer;
			}
		}
	}
`

export const StyledProjectList = styled.div`
	border-radius: 8px;
	overflow: hidden;
	background: var(--light-back);
	line-height: 1.5;
	> :nth-child(1) {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1em;
		padding: 12px 20px; 
		border-bottom: 1px solid var(--border);
		> :nth-child(1) {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 1em;
			> div {
				> :nth-child(1) {
					font-size: 20px;
					font-weight: 600;
				}
				> :nth-child(2) {
					color: var(--gray-text);
				}
			}
		}
		> :nth-child(2) {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1em;
			> :nth-child(1) {
				text-align: right;
				> :nth-child(1) {
					font-size: 16px;
					font-weight: 600;
				}
				> :nth-child(2) {
					color: var(--gray-text);
				}
			}
		}
	}
	> :nth-child(2) {
		padding: 16px;
		> :nth-child(1) {
			padding: 0.2rem 0 1rem;
			display: flex;
			align-items: center;
			gap: 1.5em;
			flex-wrap: wrap;
			color: var(--gray-text);
			> div {
				display: flex;
				align-items: center;
				gap: 0.3em;
				> :nth-child(1) {
					width: 25px;
					height: 25px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #0089d5;
					border-radius: 50%;
					background: rgb(0 137 213 / 10%);
				}
				> :nth-child(2) {
					font-weight: 650;
					font-size: 0.85em;
				}
			}
		}
		> :nth-child(3) {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 1em;
			margin-top: 1em;
		}
	}
`

export const StyledRickrollList = styled.div`
	background-color: var(--light-back);
	border-radius: 0.4em;
	padding: 1.5em 1em;
	box-shadow: 0 0 20px 0 var(--shadow);
	-webkit-box-shadow: 0 0 20px 0 var(--shadow);
	display: flex;
	flex-wrap: wrap;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	/* &:hover {
		background-color: var(--light);
	} */
	&.border {
		box-shadow: none;
		border: 1px solid var(--border);
		background-color: transparent;
	}
	.badge {
		position: absolute;
		left: 0px;
		top: 0px;
	}
	> div:not(:nth-child(1), :nth-child(2)) {
		width: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* gap: 0.5em; */
		> :nth-child(1) {
			font-weight: 400;
		}
		> :nth-child(2) {
			color: var(--gray-text);
		}
	}
	> :nth-child(2) {
		width: 40%;
		display: flex;
		align-items: center;
		gap: 0.5em;
		padding-left: 1em;
		img {
			width: 48px;
			height: auto;
			margin-right: 0.5em;
		}
		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			/* gap: 0.5em; */
			> :nth-child(1) {
				font-weight: 600;
			}
			> :nth-child(2) {
				color: var(--gray-text);
			}
		}
	}
	.type {
		font-weight: 400;
		border-radius: 4px;
		padding: 4px 6px;
		margin: 4px;
		font-size: 14px;
		&.green {
			color: rgb(4,  133,  101) !important;
			background-color: rgba(4, 133, 101, 0.2) !important;
		}
		&.yellow {
			color: rgb(247, 204, 83) !important;
			background-color: rgba(247, 204, 83, 0.2) !important;
		}
		&.purple {
			color: rgb(129, 93, 242) !important;
			background-color: rgba(129, 93, 242, 0.2) !important;
		}
	}
	.apply {
		text-align: right;
		cursor: pointer;
		color: var(--text);
		background-color: var(--gray);
		padding: 6px 12px;
		border-radius: 50px;
		transition: 0.2s;
		font-weight: 400;
		&:hover {
			background-color: var(--dark-primary);
		}
	}
	@media (max-width: 768px) {
		> div:not(.badge) {
			width: 100% !important;
			margin: 0.3em 0;
		}
	}
`

export const StyledServiceList = styled.div`
	/* background: var(--menu-back); */
	border-radius: 4px;
	overflow: hidden;
	line-height: 1.5;
	
	width: 100%;
	height: auto;
	overflow: hidden;
	/* box-shadow: 0 0 20px 0 var(--shadow);
	-webkit-box-shadow: 0 0 20px 0 var(--shadow); */
	&.border {
		box-shadow: none;
		border: 1px solid var(--border);
		background-color: transparent;
	}
	&.active {
		border-color: var(--primary);
	}
	> :nth-child(1) {
		img {
			width: 100%;
			height: 350px;
			border: 1px solid var(--gray-text);
			background-size: contain;
			border-radius: 8px;
			transition: 0.2s;
			/* &:hover {
				transform: rotate(10deg);
			} */
		}
	}
	> .top {
		border-bottom: 1px solid var(--border);
		padding: 0.2em 4px;
		display: flex;
		align-items: center;
		> .user {
			display: flex;
			align-items: center;
			gap: 1em;
			flex: 1;
			> .avatar {
				position: relative;
				> img {
					height: 40px;
					width: auto;
					border-radius: 50%;
				}
				> div {
					position: absolute;
					right: -7px;
					top: 12px;
				}
			}
			> .name {
				font-size: 14px;
				font-weight: 500;
			}
		}
		> .save-btn {
			display: flex;
			align-items: center;
			gap: 0.5em;
			color: var(--gray-text);
			cursor: pointer;
			&.saved {
				color: var(--danger);
			}
		}
	}
	> .detail {
		padding: 0.5em 4px;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		> .title {
			font-size: 1em;
			font-weight: 400;
			/* color: var(--gray-text); */
		}
		> .price {
			display: flex;
			align-items: center;
			gap: 8px;
			color: var(--gray-text);
			> :nth-child(1) {
				display: flex;
				align-items: center;
				gap: 0.3em;
				> :nth-child(1) {
					color: var(--orange)
				}
			}
			> :nth-child(2) {
				font-size: 16px;
				font-weight: 500;
				color: var(--secondary);
			}
		}
	}
`

export const StyledSkillTag = styled.div`
	/* height: 25px; */
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2px 8px;
	border-radius: 3px;
	font-size: 0.85em;
	font-weight: 400;
	cursor: pointer;
	transition: all ease 0.4s;
	&.gray {
		background: var(--gray);
		color: var(--text);
	}
	&.orange {
		background-color: var(--orange);
		color: var(--light);
	}
	&.primary {
		background-color: var(--light-primary);
		color: var(--text);
		&:hover {
			background-color: var(--dark-primary);
		}
	}
`

export const StyledCollapse = styled.div`
	transition:  0.4s;
	overflow: hidden;
	&.hide {
		display: none;
	}
	&.show {
		display: block;
	}
`

export const StyledCourseList = styled.div`
	background: var(--light);
	border-radius: 6px;
	overflow: hidden;
	> a {
		> img {
			width: 100%;
			height: auto;
			background-size: cover;
		}
	}
	> :nth-child(2) {
		padding: 1em;
		> :nth-child(1) {
			display: flex;
			align-items: center;
			gap: 1em;
			margin-bottom: 0.5em;
		}
		> :nth-child(2) {
			font-size: 1.1em;
			font-weight: 600;
		}
		> :nth-child(3) {
			display: flex;
			align-items: center;
			gap: 0.6em;
			> :nth-child(1), > :nth-child(2) {
				color: var(--orange);
				font-weight: 600;
			}
			/* > :nth-child(3) {
				color: var(--gray-text);
			} */
			> :nth-child(3) {
				display: flex;
				align-items: center;
				gap: 0.3em;
				> :nth-child(1) {
					color: var(--primary);
				}
				> :nth-child(2) {
					color: var(--text);
					font-weight: 600;
				}
			}
		}
		> :nth-child(4) {
			font-weight: 600;
		}
		> :nth-child(6) {
			color: var(--primary);
			font-size: 1.6em;
			font-weight: 800;
			margin-top: 0.3em;
		}
	}
`

export const StyledChatList = styled.ul`
	max-height: calc(100vh - 50px);
	overflow-y: scroll;
	width: 300px;
	list-style: none;
	padding: 0;
	margin: 0;
	> li {
		border-bottom: 1px solid var(--border);
		transition: .2s;
		list-style: none;
		border-left: 3px solid transparent;
		cursor: pointer;
		&.active {
			border-left: 3px solid var(--primary);
			background-color: var(--hover-back);
		}
		> :nth-child(1) {
			padding: 1.5em 1em;
			display: flex;
			align-items: center;
			gap: 0.5em;
			position: relative;
			> :nth-child(1) {
				position: relative;
				> img {
					width: 40px;
					height: auto;
					border-radius: 50%;
				}
				> :nth-child(2) {
					position: absolute;
					width: 12px;
					height: 12px;
					background: #252629;
					display: flex;
					border-radius: 50%;
					border: 1px solid var(--light);
					position: absolute;
					right: -5px;
					top: 50%;
					&.danger {
						background-color: #e23528;
					}
					&.primary {
						background-color: #28af51;
					}
					&.red {
						background-color: var(--orange);
					}
				}
			}
			> :nth-child(2) {
				line-height: 1.5;
				> :nth-child(1) {
					font-weight: 600;
					color: var(--text);
					max-width: 100px;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				> :nth-child(2) {
					max-width: 200px;
					color: var(--gray-text);
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
				> :nth-child(3) {
					font-size: 0.9em;
					position: absolute;
					top: 25px;
					right: 25px;
					float: right;
					color: #888;
				}
			}
		}
	}
	@media (max-width: 768px) {
		width: auto;
		> li {
			> :nth-child(1) {
				> :nth-child(2) {
					> :nth-child(1), > :nth-child(2) {
						max-width: calc(100vw - 120px);
					}
				}
			}
		}
	}
`

export const StyledChatContents = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: nowrap;
	margin-bottom: 2em;
	gap: 1.5em;
	> img {
		width: 50px;
		height: auto;
		border-radius: 50%;
		order: 2;
	}
	&.other {
		justify-content: flex-start;
		> :nth-child(2) {
			background-color: var(--hover-back);
			color: var(--text);
		}
	}
	&.owner {
		justify-content: flex-end;
		> :nth-child(2) {
			order: 1;
			color: var(--text);
			background-color: rgba(57, 179, 110,0.25);
		}
	}
	> :nth-child(2) {
		order: 3;
		border-radius: 4px;
		padding: 1em;
		position: relative;
		> div {
			position: absolute;
		}
	}
`

export const StyledCandidateList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
	background-color: var(--menu-back);
	border-radius: 6px;
	padding: 2em;
	/* box-shadow: 0 0 20px 0 var(--shadow);
	-webkit-box-shadow: 0 0 20px 0 var(--shadow); */
	margin: 1em 0;
	position: relative;
	> :nth-child(1) {
		position: absolute;
		top: 20px;
		left: 35px;
		> input {
			display: none;
			&:checked {
				+ label {
					color: var(--orange);
				}
			}
		}
		> label {
			color: #dadeef;
			cursor: pointer;
		}
	}
	.photo {
		position: relative;
		> .verify {
			position: absolute;
			right: -9px;
			top: 40px;
		}
		.main {
			border-radius: 50%;
			width: 100px;
			height: 100px
		}
	}
	> :nth-child(3) {
		margin-top: -0.8em;
		font-weight: 600;
	}
	> :nth-child(4) {
		margin-top: -0.8em;
	}
`

export const StyledRow = styled.div`
	/* display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between; */
	display: grid;
	grid-template-columns: auto auto auto auto auto;
	gap: 1em;
	/* > div {
		width: 18%;
	} */
	@media (max-width: 1360px) {
		/* > div {
			width: 18%;
		} */
		grid-template-columns: auto auto auto auto;
	}
	@media (max-width: 1024px) {
		grid-template-columns: auto auto auto;
		/* > div {
			width: 30%;
		}
		justify-content: center; */
	}
	@media (max-width: 768px) {
		grid-template-columns: auto auto;
		/* > div {
			width: 48%;
		}
		justify-content: center; */
	}
	@media (max-width: 576px) {
		grid-template-columns: auto;
		/* > div {
			width: 100%;
		}
		justify-content: center; */
	}
`

export const StyledPeopleCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
	background: var(--light-back);
	padding: 2em 1em;
	border-radius: 8px;
	box-shadow: 0 0 8px 0 var(--shadow);
	margin: 1em;
	.photo {
		width: 65px;
		height: 65px;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0px 0px 0px 5px var(--shadow);
		-webkit-box-shadow: 0px 0px 0px 5px var(--shadow);
		> img {
			width: 100%;
		}
	}
`

export const StyledTeamMemberList = styled.div`
	background: var(--menu-back);
	border-radius: 6px;
	padding: 3em 0;
	/* box-shadow: 0 0 20px 0 var(--shadow); */
	display: flex;
	flex-direction: column;
	align-items: center;
	> img {
		width: 120px;
		border-radius: 50%;
	}
	> :nth-child(2) {
		font-size: 1.1em;
		font-weight: 600;
	}
	> :nth-child(4) {
		display: flex;
		align-items: center;
		gap: 1em;
	}
`

export const StyledTopRated = styled.div`
	background-color: var(--warning);
	color: #102A51;
	font-weight: 700;
	border-radius: 5px;
	border: 0;
	padding: 0em 0.5em;
	white-space: nowrap;
`

export const StyledReviewList = styled.div`
	padding: 1.5rem;
	display: flex;
	border-bottom: 1px solid var(--border);
	gap: 1em;
	&.border {
		border: 1px solid var(--border);
	}
	&.top-border {
		border-top: 1px solid var(--border);
	}
	> img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	> :nth-child(2) {
		width: 100%;
		> :nth-child(1) {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			gap: 1em;
			> :nth-child(1) {
				font-weight: 600;
			}
			> :nth-child(2) {
				color: var(--gray-text);
			}
		}
		> :nth-child(2) {
			display: flex;
			align-items: center;
			gap: 0.3em;
			> img {
				width: 20px;
			}
			> div {
				color: var(--gray-text);
			}
		}
		> :nth-child(4) {
			font-weight: 600;
		}
		> .image {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 1em;
			margin-top: 1em;
			> img {
				width: 120px;
				height: auto;
			}
		}
	}
`

export const StyledBorderCard = styled.div`
	border: 1px solid var(--border);
	border-radius: 4px;
	padding: 1.5rem;
	@media (max-width: 768px) {
		padding: 1rem;
	}
	&.primary-border {
		border-color: var(--primary);
	}
	&.cursor-pointer {
		cursor: pointer;
	}
`

export const StyledDefaultCard = styled.div`
	box-shadow: 0 0 20px 0 var(--shadow);
	border-radius: 3px;
	.padding {
		padding: 1.5rem;
		@media (max-width: 768px) {
			padding: 1rem;
		}
	}
	.border {
		border-bottom: 1px solid var(--border);
		padding-bottom: 1rem;
	}
`

export const StyledServiceTab = styled.div`
	> .tab-header {
		display: flex;
		align-items: center;
		> div {
			background-color: var(--light-back);
			color: var(--text);
			border-left: 0;
			padding: 1em;
			flex: 1;
			text-align: center;
			cursor: pointer;
			&.active {
				background-color: var(--menu-back);
				color: var(--text);
			}
		}
	}
	> .tab-container {
		padding: 1em 1.5em;
		padding-top: 2em;
		border-top: 0;
		background-color: var(--menu-back);
	}
`

export const StyledFaqComponent = styled.div`
	> label {
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		gap: 1em;
		align-items: center;
		font-size: 1.1em;
		font-weight: 500;
		position: relative;
		padding: 0.5em 0;
		>.arrow {
			position: absolute;
			top: 10px;
			left: auto;
			right: 10px;
			height: 8px;
			width: 8px;
			display: block;
			border-style: solid;
			border-width: 0 1px 1px 0;
			border-color: transparent var(--gray-text) var(--gray-text) transparent;
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
			transition: all 0.3s;
		}
	}
	> input {
		display: none;
		&:checked {
			~.content {
				height: auto;
				padding: 0.5em 0;
			}
			~label {
				>.arrow {
					transform: rotate(-135deg);
				}
			}
		}
	}
	> .content {
		height: 0;
		overflow: hidden;
		transition: all 0.3s;
		color: var(--gray-text);
	}
	padding: 0.5em 0;
	border-bottom: 1px solid var(--border);
`


export const StyledSelectType = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	background-color: var(--light);
	border: 3px solid var(--border);
	border-radius: 0;
	cursor: pointer;
	height: 100%;
	padding: 24px 24px;
	transition: 0.2s;
	position: relative;
	&:hover {
		border: 3px solid var(--primary);
		transform: translateY(-5px);
	}
	> img {
		height: 200px;
		width: auto;
		max-width: 100%;
		@media (max-width: 768px) {
			max-width: 300px;
			width: 100%;
			height: auto;
		}
	}
	> div {
		font-size: 1.3em;
		font-weight: 700;
	}
	&.active {
		border: 3px solid var(--primary);
	}
`

export const StyledBottomFixed = styled.div`
	position: fixed;
	top: auto;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 1em;
	background-color: var(--light);
`

export const StyledReactTagInput = styled.div`
	.ReactTags__selected {
		> .tag-wrapper {
			display: inline-flex;
			align-items: center;
			gap: 0.3em;
			/* height: 32px; */
			font-weight: 500;
			color: var(--text);
			line-height: 32px;
			padding: 0 12px;
			border-radius: 16px;
			background-color: var(--hover-back);
			margin-bottom: 5px;
			margin-right: 5px;
			border: 1px solid var(--hover-back);
			> .ReactTags__remove {
				background-color: transparent;
				color: var(--text);
				border: 0;
				font-size: 1.2em;
				padding: 0;
				margin-top: 2px;
				cursor: pointer;
			}
		}
	}
	.ReactTags__tagInput {
		> .ReactTags__tagInputField {
			width: 100%;
			border: 1px solid var(--border);
			border-radius: 4px;
			background: transparent;
			height: 50px;
			font-size: 1.1em;
			padding: 0.5rem 0.75rem;
			color: var(--text);
			outline: 0;
			margin: 0 0 8px 0;
			&:focus {
				border-color: var(--primary);
			}
		}
	}
	.ReactTags__tags {
		position: relative;
	}
	.ReactTags__suggestions ul {
		list-style-type: none;
		box-shadow: 0.05em 0.01em 0.5em var(--shadow);
		background: var(--light-back);
		max-height: 500px;
		overflow-y: auto;
		padding: 0;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 100;
	}
	.ReactTags__suggestions li {
		border-bottom: 1px solid var(--border);
		padding: 0.5em 1em;
		margin: 0;
		font-weight: 400;
	}
	.ReactTags__suggestions li mark {
		color: var(--text);
		background: none;
		font-weight: 600;
	}
	.ReactTags__suggestions ul li.ReactTags__activeSuggestion {
		background: var(--hover-back);
		cursor: pointer;
	}
`
export const StyledBackImage = styled.img`
	width: 100%;
	height: auto;
	max-width: 500px;
	max-height: 300px;
	@media (max-width: 992px) {
		display: none;
	}
`
export const StyledAvatarUpload = styled.div`
	width: 300px;
	display: flex;
	align-items: center;
	> input {
		position: relative;
		z-index: 2;
		width: 100%;
		display: none;
	}
	> label {
		width: 300px;
		height: 300px;
		border-radius: 10px;
		background: var(--light-back);
		border: 1px dashed var(--text);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
`

export const StyledColorRoundDiv = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	opacity: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--light) !important;
	background: linear-gradient(to left,rgba(255,255,255,0) 30%,rgba(255,255,255,0.1));
	&.primary {
		background-color: #1baf65;
	}
	&.warning {
		background-color: #f39f00;
	}
	&.dark {
		background-color: #002758;
	}
	&.danger {
		background-color: #ce024b;
	}
	&.gray {
		background-color: rgba(41, 68, 193,0.1);
		color: var(--blue) !important;
	}
`

export const StyledNotificationList = styled.div`
	padding: 1.5em 1em;
	display: flex;
	align-items: center;
	gap: 1em;
	justify-content: space-between;
	flex-wrap: wrap;
	border-bottom: 1px solid var(--border);
	background-color: transparent;
	&.top-border {
		border-top: 1px solid var(--border);
	}
	> :nth-child(1) {
		> :nth-child(1) {
			display: flex;
			gap: 0.5em;
			align-items: center;
			> :nth-child(2) {
				font-weight: 600;
				color: var(--text);
				font-size: 1.2em;
			}
		}
	}
`

export const StyledPostedProjectList = styled.div`
	display: flex;
	align-items: center;
	gap: 1em;
	flex-wrap: wrap;
	padding: 1.5em;
	border-bottom: 1px solid var(--border);
	&.bottom-border {
		border-top: 1px solid var(--border);
	}
	> :nth-child(1) {
		flex: 1;
		min-width: 300px;
		> :nth-child(2) {
			font-weight: 600;
			font-size: 1.2em;
		}
		> :nth-child(3) {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 0.5em;
		}
	}
	> :nth-child(2) {
		display: flex;
		align-items: center;
		gap: 1em;
		> div {
			> :nth-child(2) {
				color: var(--gray-text);
				font-weight: 600;
			}
		}
		> .bid {
			> :nth-child(1) {
				color: var(--primary);
				font-weight: 700;
				font-size: 1.3em;
			}
		}
		> .bid-budget {
			> :nth-child(1) {
				color: var(--orange);
				font-weight: 700;
				font-size: 1.3em;
			}
		}
		> .hourly-rate {
			> :nth-child(1) {
				color: #fc4755;
				font-weight: 700;
				font-size: 1.3em;
			}
		}
	}
`

export const StyledBidderList = styled.div`
	position: relative;
	border: 1px solid var(--border);
	border-radius: 6px;
	padding-top: 1.5em;
	> .hourly-rate {
		position: absolute;
		top: 12px;
		left: 15px;
	}
	> .delete {
		width: 38px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--hover-back);
		border-radius: 50%;
		color: #5c75a2;
		transition: all ease 0.4s;
		position: absolute;
		top: 15px;
		right: 15px;
		cursor: pointer;
		&:hover {
			color: var(--light);
			background: #d63232;
		}
	}
	> .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 1rem 2rem;;
		> .avatar {
			position: relative;
			> img {
				width: 80px;
				height: 80px;
				border-radius: 50%;
			}
			> .verified {
				position: absolute;
				left: auto;
				right: -8px;
				top: 35px;
			}
		}
		> :nth-child(2) {
			color: var(--gray-text);
			display: flex;
			align-items: center;
			gap: 0.5em;
			font-weight: 600;
		}
		> :nth-child(3) {
			font-size: 1.2em;
			font-weight: 600;
		}
		> .conditions {
			display: flex;
			align-items: center;
			gap: 1em;
			justify-content: space-between;
			margin-top: 0.5em;
			> div {
				width: calc(50% - 1em);
				white-space: nowrap;
				text-align: left;
				display: flex;
				flex-direction: column;
				align-items: center;
				> :nth-child(1) {
					font-size: 1.2em;
					font-weight: 800;
				}
				> :nth-child(2) {
					color: var(--gray-text);
					font-weight: 600;
					margin-top: -5px;
				}
			}
		}
		> .actions {
			margin-top: 0.5em;
			display: flex;
			align-items: center;
			gap: 1em;
			justify-content: center;
			width: 100%;
			> div {
				/* width: calc(50% - 1em); */
				white-space: nowrap;
				text-align: left;
				button {
					font-size: 0.9em;
					font-weight: 700;
					padding: 0.8em;
					gap: 0.1em;
				}
			}
		}
	}
	> .bottom {
		border-top: 1px solid var(--border);
		padding: 0.5em;
		display: flex;
		align-items: center;
		gap: 1em;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		> :nth-child(2) {
			width: 35px;
			height: 35px;
			align-items: center;
			justify-content: center;
			display: inline-flex;
			background: rgba(76, 175, 80,0.1);
			border-radius: 50%;
			color: #4caf50;
			cursor: pointer;
		}
	}
`

export const StyledPostedRickrollList = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5em;
	border-bottom: 1px solid var(--border);
	padding: 1.5em;
	flex-wrap: wrap;
	> :nth-child(1) {
		width: 60px;
		height: auto;
	}
	> :nth-child(2) {
		.title {
			font-size: 1.2em;
			font-weight: 600;
		}
		> .detail {
			color: var(--gray-text);
			display: flex;
			align-items: center;
			gap: 1em;
			flex-wrap: wrap;
			> div {
				display: flex;
				align-items: center;
				gap: 0.2em;
				font-weight: 600;
			}
		}
		> .actions {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 0.5em;
			
		}
	}
`

export const StyledBidList = styled.div`
	padding: 1em 1.5em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	flex-wrap: wrap;
	border-bottom: 1px solid var(--border);
	> :nth-child(1) {
		> .title {
			font-size: 1.2em;
			font-weight: 600;
		}
		> .actions {
			display: flex;
			align-items: center;
			gap: 0.5em;
		}
	}
	> :nth-child(2) {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		line-height: 1.4;
		> :nth-child(1) {
			display: flex;
			align-items: center;
			height: 80px;
			padding: 0 30px;
			background: var(--hover-back);
			border-radius: 50px 0px 0px 50px;
			color: var(--text);
		}
		> :nth-child(2) {
			display: flex;
			align-items: center;
			height: 80px;
			padding: 0 30px;
			border-radius: 0px 50px 50px 0px;
			background: #2eb95f;
			color: #fff;
		}
	}
`

export const StyledAccountActionButtons = styled.div`
	background: transparent;
	transition: all 0.3s ease;
	&:hover {
		background-color: var(--back);
	}
	&.bidders, .bidders {
		padding: 0.3em 0.7em;
		color: var(--text);
		background: rgba(22, 183, 57,0.12);
		border-radius: 6px;
		cursor: pointer;
		> span {
			background: var(--hover-back);
			font-size: 0.8em;
			border-radius: 50px;
			margin-left: 10px;
			color: var(--text);
			width: 21px;
			height: 21px;
			display: inline-flex;
			justify-content: center;
			align-items: center;
		}
	}
	&.edit {
		color: #079ee6;
		height: 34px;
		display: inline-flex;
		align-items: center;
		border-radius: 4px;
		padding: 0 13px;
		cursor: pointer;
		border: 1px solid var(--border);
	}
	&.delete {
		color: #e83535;
		height: 34px;
		display: inline-flex;
		align-items: center;
		border-radius: 4px;
		padding: 0 13px;
		cursor: pointer;
		border: 1px solid var(--border);
	}
`

export const StyledOrderList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	border-bottom: 1px solid var(--border);
	padding: 1.5em;
	flex-wrap: wrap;
	&.top-border {
		border-top: 1px solid var(--border);
	}
	.order-img {
		width: 80px;
		height: auto;
	}
	> .content {
		flex: 1;
		.title {
			font-size: 1.2em;
			font-weight: 600;
		}
		.avatar {
			width: 40px;
			height: auto;
			border-radius: 50%;
		}
	}
`

export const StyledAccountTab = styled.div`
	> div {
		display: flex;
		align-items: center;
		gap: 0.5em;
		cursor: pointer;
		border: 0;
		border-radius: 6px;
		background-color: transparent;
		padding: 0.5em 1em;
		font-weight: 600;
		&:hover {
			background-color: var(--light);
		}
		&.active {
			background-color: var(--hover-back);
			color: var(--primary);
		}
	}
`

export const StyledPromotionList = styled.div`
	padding: 1em;
	border: 1px solid var(--primary);
	border-radius: 6px;
	color: var(--text);
	.image {
		width: 64px;
		height: 64px;
	}
	.title {
		font-weight: 600;
		font-size: 1.1em;
		line-height: 1.5;
	}
	.desc {
		color: var(--gray-text);
		font-size: 0.9em;
	}
	.price {
		font-weight: 600;
		font-size: 1.3em;
	}
	.action-btn {
		padding: 0.7em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const StyledStripeTable = styled.table`
	border: 1px solid var(--border);
	border-collapse: separate;
	border-radius: 0.375rem;
	border-spacing: 0;
	width: 100%;
	tr {
		td:first-child {
			font-weight: 700;
			border-right: 1px solid var(--border);
		}
		td {
			border-bottom: 1px solid var(--border);
			padding: 0.875rem 1.5rem;
		}
	}
	tr:last-child {
		td {
			border-bottom: 0;
		}
	}
	tr:nth-child(2n) {
		background-color: #f7f8fa;
	}
`

export const ButtonTab = styled.div`
	display: inline-flex;
	align-items: center;
	border-radius: 6px;
	border: 1px solid var(--primary);
	padding: 0.2em;
	> div {
		background-color: var(--light-primary);
		padding: 0.5em 0.7em;
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.3s ease;
		&:hover {
			background-color: rgba(1, 183, 83,0.2);
		}
		&.active {
			background-color: var(--primary);
		}
	}
	> div:nth-child(1) {
		border-radius: 6px 0 0px 6px;
	}
	> div:nth-child(2) {
		border-radius: 0;
	}
	> div:nth-child(3) {
		border-radius: 0 6px 6px 0;
	}
`

export const StyledOnlineBadge = styled.div`
	position: absolute;
	bottom: 12px;
	right: 8px;
	width: 16px;
	height: 16px;
	border: 1px solid #ddd;
	border-radius: 50%;
	&.primary {
		background-color: #15b915; //var(--primary);
	}
	&.warning {
		background-color: var(--warning);
	}
	&.danger {
		background-color: var(--danger);
	}
`

export const StyledImgUpload = styled.label`
	background-color: var(--hover-back);
	border-radius: 4px;
	border: 1px dashed var(--text);
	color: var(--text);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5em;
	padding: 1em;
	cursor: pointer;
	aspect-ratio: 1.7/1;
`


export const StyledListitem = styled.div`
	&.error {
		border: 1px solid var(--danger);
	}
	&.warn {
		border: 1px solid var(--warning);
	}
`

export const StyledListitemTip = styled.ul`
	padding-left: 1em;
	padding-top: 0.5em;
	padding-bottom: 1em;
	li {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
`