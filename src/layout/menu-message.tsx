import React from "react";
import { StyledNoticeDropDown } from "../components/others";
import { Link } from "react-router-dom";
import Icon from "../components/icons";

const messageData = [
    { avatar: '/assets/img/team-1.jpg', title: 'Frontend/backend react developer', content: 'Thanks for your Rickroll posting. I would like to express my interest in the Rickroll, the technical specs of your Rickroll description.', time: '1 day ago' },
    { avatar: '/assets/img/team-2.jpg', title: 'I NEED A Rickroll BOARD WEBSITE', content: 'Thanks for your Rickroll posting. I would like to express my interest in the Rickroll, the technical specs of your Rickroll description.', time: '2 day ago' },
    { avatar: '/assets/img/team-3.jpg', title: 'I need flutter developer with experience in blockchain', content: 'Thanks for your Rickroll posting. I would like to express my interest in the Rickroll, the technical specs of your Rickroll description.', time: '2 day ago' },
    { avatar: '/assets/img/team-4.jpg', title: 'Whatsapp based chat platform for query resolution simple, as MVP', content: 'Thanks for your Rickroll posting. I would like to express my interest in the Rickroll, the technical specs of your Rickroll description.', time: '3 day ago' },
    { avatar: '/assets/img/team-5.jpg', title: 'Need a UI/UX developer for designing Ed-tech Web-application', content: 'Thanks for your Rickroll posting. I would like to express my interest in the Rickroll, the technical specs of your Rickroll description.', time: '10 day ago' },
]

const MenuMessage = () => {
    return (
        <StyledNoticeDropDown className="contact-dropdown">
            <div>
                <div>
                    <div><span className="bold-600" style={{ fontSize: '1em' }}>0</span> pending messages</div>
                    <div>Clear All</div>
                    <Link to='/account/contacts' className="d middle">
                        <div>View All</div>
                        <Icon icon="RightSingleArrow" />
                    </Link>
                </div>
                <div>
                    {messageData.map((i, k) => (
                        <div key={k} className="d middle gap-sm">
                            <img src={i.avatar} alt={i.avatar} className="avatar" width={400} height={400} />
                            <div>
                                <div className="title" style={{ maxWidth: 230 }}>{i.title}</div>
                                <div className="content" style={{ maxWidth: 230 }}>{i.content}</div>
                            </div>
                            <div className="time">{i.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledNoticeDropDown>
    )
}

export default MenuMessage