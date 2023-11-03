import React from 'react';
import { styled } from 'styled-components';

const Avatar = ({icon, username, size}: {icon?: string, username?: string, size?: number}) => {
	return (
		<StyledAvatar size={size || 32}>
				{!!icon ? (
					<img src={icon} alt="my-avatar" width={32} height={32} />
				) : (
					<span>{username?.slice(0,2) || 'AA'}</span>
				)}
				<div className="primary"></div>
			
		</StyledAvatar>
	)
}

const StyledAvatar = styled.div<{size: number}>`
	position: relative;
	width: ${({size}) => size + 'px'};
	height: ${({size}) => size + 'px'};
	> img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	> span {
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		font-weight: 900;
		font-size: ${({size}) => (size / 2) + 'px'};
		width: 100%;
		height: 100%;
		border-radius: 50%;
		color: var(--primary);
		border: 1px solid var(--primary);
	}
	> div {
		position: absolute;
		width: ${({size}) => size > 50 ? '20px' : '13px'};
		height: ${({size}) => size > 50 ? '20px' : '13px'};
		background: #252629;
		display: flex;
		border-radius: 50%;
		border: 2px solid #fff;
		position: absolute;
		right: -5px;
		top: ${({size}) => !!size ? (size > 50 ? size - 30 + 'px' : size - 13 + 'px') : '27px'};
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
`


export default Avatar