import React from "react";
import { StyledNoticeDropDown } from "../components/others";
import { Link } from "react-router-dom";
import Icon from "../components/icons";

const notificationData = [
	{title: 'You have been bided', content: 'You have been selected to bid first for the project "Experienced WordPress Developer for New Website Project"', time: '1 day ago'},
	{title: 'You have been bided', content: 'You have been selected to bid first for the project "Experienced WordPress Developer for New Website Project"', time: '2 day ago'},
	{title: 'You have been bided', content: 'You have been selected to bid first for the project "Experienced WordPress Developer for New Website Project"', time: '3 day ago'},
	{title: 'You have been bided', content: 'You have been selected to bid first for the project "Experienced WordPress Developer for New Website Project"', time: '3 day ago'},
	{title: 'You have been bided', content: 'You have been selected to bid first for the project "Experienced WordPress Developer for New Website Project"', time: '5 day ago'},
]

const MenuNotification = () => {
	return (
		<StyledNoticeDropDown className="notification-dropdown">
			<div>
				<div>
					<div><span className="bold-600" style={{fontSize: '1em'}}>0</span> pending notifications</div>
					<div>Clear All</div>
					<Link to='/account/notifications' className="d middle">
						<div>View All</div>
						<Icon icon="RightSingleArrow" />
					</Link>
				</div>
				<div>
					{notificationData.map((i, k) => (
						<div key={k}>
							<div className="title">{i.title}</div>
							<div className="content">{i.content}</div>
							<div className="time">{i.time}</div>
						</div>
					))}
				</div>
			</div>
		</StyledNoticeDropDown>
	)
}

export default MenuNotification