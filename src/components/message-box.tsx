import React from 'react'
import styled from 'styled-components'
import Icon from './icons'
import { Textarea } from './Inputs'
import { Button } from './buttons'
import Avatar from './avatar'

interface MessageBoxInterface {
	
}

const messageData = [
    {avatar: '/assets/img/team-1.jpg', name: 'James Edwards', onlineStatus: 1, content: 'Hello, Nice to meet you. I am senior full stack developer with 7 years of experience.', time: '3 mins ago'},
    {avatar: '/assets/img/team-2.jpg', name: 'James Edwards', onlineStatus: 1, content: 'Hello, Nice to meet you. I am senior full stack developer with 7 years of experience.', time: '3 mins ago'},
    {avatar: '/assets/img/team-3.jpg', name: 'James Edwards', onlineStatus: 1, content: 'Hello, Nice to meet you. I am senior full stack developer with 7 years of experience.', time: '3 mins ago'},
    {avatar: '/assets/img/team-4.jpg', name: 'James Edwards', onlineStatus: 1, content: 'Hello, Nice to meet you. I am senior full stack developer with 7 years of experience.', time: '3 mins ago'},
    {avatar: '/assets/img/team-5.jpg', name: 'James Edwards', onlineStatus: 1, content: 'Hello, Nice to meet you. I am senior full stack developer with 7 years of experience.', time: '3 mins ago'},
]

export const MessageBox = ({}: MessageBoxInterface) => {

    const [status, setStatus] = React.useState({
        isShrink: true,
        searchText: '',
        chatDetail: false,
        chatDetailShrink: false
    })

	return (
        <StyledMessageBox>
            <div className={`box ${status.isShrink ? 'hide' : ''}`}>
                <div className='top' onClick={()=>setStatus({...status, isShrink: !status.isShrink})}>
                    <div>Messages</div>
                    <div className='d middle gap-sm'>
                        <div className='icon-btn'><Icon icon='Notification' /></div>
                        <div className='icon-btn' style={{transform: status.isShrink ? 'rotate(180deg)' : 'none', transition: 'all 0.3s ease'}}><Icon icon='DownArrow' /></div>
                    </div>
                </div>
                <div className="messages">
                    <div className='search-box'>
                        <input type="text" placeholder='' value={status.searchText} onChange={(e)=>setStatus({...status, searchText: e.target.value})} />
                        <div className="search-icon"><Icon icon='Search' size={16} /></div>
                        <div className={`delete-icon ${!!status.searchText ? 'show' : 'hide'}`}><Icon icon='Close' size={16} /></div>
                    </div>
                    <div className='chat-list mt-1'>
                        {messageData.map((i, k) => (
                            <div key={k} className="d middle gap-sm item" onClick={()=>setStatus({...status, chatDetail: true})}>
                                <img src={i.avatar} alt={i.avatar} className="avatar" width={400} height={400} />
                                <div>
                                    <div className="title">{i.name}</div>
                                    <div className="content">{i.content}</div>
                                </div>
                                <div className="time">{i.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {status.chatDetail && (
                <div className={`box small ${status.chatDetailShrink ? 'hide' : ''}`}>
                    <div className='top'>
                        <div className='d middle gap'>
                            <Avatar icon={'"/assets/img/team-2.jpg"'} size={32} />
                            {/* <StyledAvatar style={{width: 32, height: 32}}>
                                <img src="/assets/img/team-2.jpg" alt="/assets/img/team-2.jpg" width={32} height={32} style={{width: 32}} />
                                <div className="primary" style={{width: 10, height: 10, top: 20, right: 0}}></div>
                            </StyledAvatar> */}
                            <div>James Edwards</div>
                        </div>
                        <div className='d middle gap-sm'>
                            <div className='icon-btn' onClick={()=>setStatus({...status, chatDetailShrink: !status.chatDetailShrink})}><Icon icon='DownArrow' /></div>
                            <div className='icon-btn' onClick={()=>setStatus({...status, chatDetail: false})}><Icon icon='Close' /></div>
                        </div>
                    </div>
                    <div className={`messages ${status.isShrink ? 'hide' : ''}`}>
                        <div className='chat-content'>
                            <div className='item'>
                                <div className='avatar'><img src="/assets/img/team-2.jpg" alt="/assets/img/team-2.jpg" width={400} height={400} /></div>
                                <div className='item-message'>
                                    <div>Hello, Nice to meet you</div>
                                    <div>Cloud you please explain about your project more detail?</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='avatar'><img src="/assets/img/team-5.jpg" alt="/assets/img/team-5.jpg" width={400} height={400} /></div>
                                <div className='item-message'>
                                    <div>OK</div>
                                    <div>But first give me some website urls that you developed.</div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            <Textarea placeholder='Enter message here...' rows={2} />
                            <div className='d between middle gap'>
                                <div>
                                    <input type="file" style={{display: 'none'}} id='message-upload' />
                                    <label htmlFor="message-upload">
                                        <div className='icon-btn'><Icon icon='Link' /></div>
                                    </label>
                                </div>
                                <Button className='primary'>Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </StyledMessageBox>
    )
}

const StyledMessageBox = styled.div`
    width: 100%;
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    gap: 1em;
    @media (max-width: 768px) {
        display: none;
    }
    .box {
        width: 350px;
        height: 65vh;
        overflow-y: hidden;
        color: #fff;
        box-shadow: 0 0 4px #3d4a5d1e, 0 2px 4px #3d4a5d1e;
        z-index: 10;
        transition: all 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        &.hide {
            height: 55px !important;
        }
        &.small {
            height: 50vh;
        }
        > .top {
            background-color: #1f242a;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.8em 1em;
            border-radius: 4px 4px 0 0;
            cursor: pointer;
        }
        > .messages {
            background-color: var(--light-back);
            padding: 1em;
            flex: 1;
            position: relative;
            .search-box {
                position: relative;
                color: var(--text);
                > input {
                    background-color: transparent;
                    border: 1px solid var(--border);
                    border-radius: 4px;
                    width: 100%;
                    padding: 0.5em 1em;
                    outline: 0;
                    padding-left: 35px;
                    font-size: 1em;
                    color: var(--text);
                    &:focus {
                        border-color: var(--primary);
                    }
                }
                .search-icon {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                }
                .delete-icon {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    transition: all 0.3s ease;
                    &.show {
                        opacity: 1;
                        visibility: visible;
                    }
                    &.hide {
                        opacity: 0;
                        visibility: hidden;
                    }
                }
            }
            .chat-list {
                > .item {
                    padding: 0.7em 0.5em;
                    cursor: pointer;
                    position: relative;
                    color: var(--text);
                    .avatar {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                    .title {
                        font-weight: 600;
                        font-size: 1em;
                        max-width: 200px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .content {
                        font-size: 0.9em;
                        line-break: anywhere;
                        max-width: 200px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .time {
                        position: absolute;
                        top: 23px;
                        right: 15px;
                        font-size: 0.8em;
                    }
                    &:hover {
                        background-color: var(--hover-back);
                        border-radius: 6px;
                    }
                }
            }
            .chat-content {
                max-height: 310px;
                overflow-y: auto;
                > .item {
                    display: flex;
                    gap: 1em;
                    color: var(--text);
                    margin-top: 0.7em;
                    > .avatar {
                        > img {
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                        }
                    }
                    > .item-message {
                        background-color: var(--menu-back);
                        padding: 0.5em;
                        border-radius: 4px;
                        flex: 1;
                        line-height: 1.3;
                        > div {
                            margin-top: 0.2em;
                        }
                    }
                }
            }
            > .bottom {
                padding: 0;
                padding-top: 1em;
                padding-bottom: 0.5em;
                position: absolute;
                bottom: 0;
                width: calc(100% - 2em);
                button {
                    padding: 0.5em 1em;
                }
            }
        }
        .icon-btn {
            cursor: pointer;
            padding: 0.5em;
            border-radius: 50%;
            border: 0;
            background-color: transparent;
            transition: all 0.3s ease;
            &:hover {
                background-color: #2B3139;
            }
        }
    }
`
