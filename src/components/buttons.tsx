import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components'

const buttonStyle = css`
	color: var(--text);
	border-radius: 4px;
	padding: 1em 1.5em;
	border: 0;
	cursor: pointer;
	font-size: 1em;
	font-weight: 550;
	white-space: nowrap;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	
	&.sm {
		padding: 0.6em 1.5em;
	}
	&.fill {
		width: 100%;
	}
	
	@media (max-width: 768px) {
		&.fill-sm {
			width: 100%;
		}
	}
	&:not(:disabled):after {
		background: linear-gradient(90deg, rgba(25,103,210,.2) 0px, rgba(25,103,210,.2) 77%, rgba(255, 255, 255, 0.1) 92%, rgba(255, 255, 255, 0));
		content: "";
		height: 200%;
		left: -210%;
		opacity: 0;
		position: absolute;
		top: -50%;
		transition: all 0.4s ease 0s;
		width: 200%;
	}
	&:not(:disabled):hover {
		background-color: var(--dark-primary);
		&::after {
			left: -30%;
			opacity: 1;
			top: -20%;
			transition-duration: 0.7s, 0.7s, 0.15s;
			transition-property: left, top, opacity;
			transition-timing-function: linear;
		}
	}
	
	&:active:not(:disabled) {
		background-color: var(--dark-primary) !important;
	}

	&.round {
		border-radius: 50px
	}
	&:disabled {
		color: var(--gray-text);
		border: 1px solid var(--gray);
		cursor: auto;
	}
	&.gray:not(:disabled) {
		background: var(--gray);
		color: var(--text);
		&:hover:not(.static) {
			background: var(--primary);
		}
	}
	&.light:not(:disabled) {
		background: #fff;
		color: #102A51;
		&:hover {
			color: var(--blue);
		}
	}
	&.light-primary:not(:disabled) {
		background: var(--light-primary);
		color: var(--primary);
		&:hover {
			background: var(--primary);
			color: #fff;
		}
	}
	&.blue:not(:disabled) {
		background: var(--blue);
		color: var(--light);
		&:hover {
			background: var(--primary);
		}
	}
	&.danger:not(:disabled) {
		padding: 8px 15px;
		border-radius: 50px;
		font-size: 0.8em;
		margin: 0;
		background-color: #e4e8ef;
		color: #636a7b;
		&:hover {
			background: #da0136;
			color: var(--light);
		}
	}
	&.static-danger:not(:disabled) {
		background-color: #da0136;
		color: #fff;
	}
	&.primary:not(:disabled) {
		background: var(--primary);
		color: #fff;
	}
	&.link:not(:disabled) {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all ease 0.4s;
		background: rgba(0, 174, 225,0.1);
		color: var(--secondary);
		padding: 0;
		&:hover {
			background: var(--secondary);
    		color: var(--light);
		}
	}
`

export const StyledOutlineButton = styled.button`
	background-color: var(--light);
	border-radius: 0.4rem;
	padding: 1em 1.5em;
	cursor: pointer;
	font-size: 1em;
	font-weight: 550;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	&.fill {
		width: 100%;
	}
	&:after {
		background: linear-gradient(90deg, rgba(255, 255, 255, 0.13) 0px, rgba(255, 255, 255, 0.13) 77%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0));
		content: "";
		height: 200%;
		left: -210%;
		opacity: 0;
		position: absolute;
		top: -50%;
		transition: all 0.7s ease 0s;
		width: 200%;
	}
	&:hover:after {
		left: -30%;
		opacity: 1;
		top: -20%;
		transition-duration: 0.7s, 0.7s, 0.15s;
		transition-property: left, top, opacity;
		transition-timing-function: linear;
	}
	&.secondary {
		color: var(--secondary);
		border: 1px solid var(--secondary);
		&:hover {
			background-color: var(--secondary);
			color: var(--light);
		}
	}
	&.primary {
		color: var(--primary);
		border: 1px solid var(--primary);
		&:hover {
			background-color: var(--primary);
			color: var(--light);
		}
	}
	&.warning {
		color: var(--warning);
		border: 1px solid var(--warning);
		&:hover {
			background-color: var(--warning);
			color: var(--light);
		}
	}
	&.danger {
		color: var(--danger);
		border: 1px solid var(--danger);
		&:hover {
			background-color: var(--danger);
			color: var(--light);
		}
	}

`
export const StyledSocialBtn = styled.button`
	width: 40px;
	height: 40px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	color: var(--light);
	border: 0;
	cursor: pointer;
	background-color: #5da4ff;
	&.round {
		border-radius: 50%;
	}
	&.google {
		background-color: #ea4444;
	}
	&.facebook {
		background-color: #3f51b5;
	}
	&.linkedin {
		background-color: #16a0bf;
	}
	&.twitter {
		background-color: #089ee2;
	}
`

export const StyledSocialLoginBtn = styled.button`
	padding: 0;
	cursor: pointer;
	border: 0;
	background-color: transparent;
	.btn {
		color: white;
		transition: all 0.3s ease;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
		&.facebook {
			background-color: #3b5998;
			&:hover {
				background-color: #2a4071;
			}
		}
		&.microsoft {
			background-color: #0067bf;
			&:hover {
				background-color: #004887;
			}
		}
		&.github {
			background-color: var(--text);
			color: var(--light);
			position: relative;
			overflow: hidden;
			&:hover {
				background-color: var(--text);
				&:after {
					position: absolute;
					top: 0;
					right: 0;
					left: 0;
					bottom: 0;
					background-color: rgba(0, 0, 0, 0.1);
					content: "";
				}
			}
		}
		&.linkedin {
			background-color: #0077b5;
			&:hover {
				background-color: #035582;
			}
		}
		&.twitter {
			background-color: #1c9cea;
			&:hover {
				background-color: #146fa8;
			}
		}
	}
`

export const Button = styled.button`
  ${buttonStyle}
`;

export const LinkButton = styled(Link)`
  ${buttonStyle}
`;

export const LabelButton = styled.label`
  ${buttonStyle}
`;