import React from "react";
import { StyledNoticeDropDown } from "../components/others";
import { Link } from "react-router-dom";
import Icon from "../components/icons";

const orderData = [
	{img: '/assets/img/co-2.jpg', title: 'originate lucid crypto white paper , nft white paper, ico white paper in 24hrs', status: 0, startTime: '2023-08-01', endTime: '2023-08-20', price: 1500, seller: {name: 'James Edwards', avatar: '/assets/img/team-1.jpg', score: 5}},
	{img: '/assets/img/co-3.jpg', title: 'provide backlinks, organic keywords reports using ahrefs SEO tool', status: 1, startTime: '2023-08-01', endTime: '2023-08-20', price: 2300, seller: {name: 'James Edwards', avatar: '/assets/img/team-2.jpg', score: 4.5}},
	{img: '/assets/img/co-4.jpg', title: 'deliver 1500 real website hits from all over the world', status: 1, startTime: '2023-08-01', endTime: '2023-08-20', price: 3400, seller: {name: 'James Edwards', avatar: '/assets/img/team-3.jpg', score: 3}},
	{img: '/assets/img/co-2.jpg', title: 'distribute press release on bloomberg, yahoo finance, apnews', status: 1, startTime: '2023-08-01', endTime: '2023-08-20', price: 2500, seller: {name: 'James Edwards', avatar: '/assets/img/team-4.jpg', score: 3.5}},
	{img: '/assets/img/co-3.jpg', title: 'originate lucid crypto white paper , nft white paper, ico white paper in 24hrs', status: 2, startTime: '2023-08-01', endTime: '2023-08-20', price: 3500, seller: {name: 'James Edwards', avatar: '/assets/img/team-5.jpg', score: 4.8}},
]

const MenuOrder = () => {
	return (
		<StyledNoticeDropDown className="order-dropdown">
			<div>
				<div>
					<div><span className="bold-600" style={{fontSize: '1em'}}>0</span> pending orders</div>
					<div>Clear All</div>
					<Link to='/account/orders' className="d middle">
						<div>View All</div>
						<Icon icon="RightSingleArrow" />
					</Link>
				</div>
				<div>
					{orderData.map((i, k) => (
						<div key={k} className="d middle gap-sm">
							<img src={i.img} alt={i.img} className="avatar" width={626} height={417} style={{borderRadius: 0}} />
							<div>
								<div className="title" style={{maxWidth: 210}}>{i.title}</div>
								<div style={{maxWidth: 210, fontSize: '0.9em'}} className="d middle gap-sm">
									<div className="text-ellipsis" style={{maxWidth: 110}}>by {i.seller.name}</div>
									<div className={`bold-600 ${i.status === 0 ? 'blue-text' : (i.status === 1 ? 'primary-text' : 'danger-text')}`}>{i.status === 0 ? 'Pending' : (i.status === 1 ? 'Completed' : 'Cancelled')}</div>
								</div>
							</div>
							<div className="time">{i.endTime}</div>
						</div>
					))}
				</div>
			</div>
		</StyledNoticeDropDown>
	)
}

export default MenuOrder