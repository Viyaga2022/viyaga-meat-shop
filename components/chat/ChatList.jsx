import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ChatList = () => {
    return (
        <div className="page-content">
            <div className="content-inner pt-0">
                <div className="container bottom-content">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search.." />
                            <span className="input-group-text">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                                        fill="var(--primary)"
                                    />
                                </svg>
                            </span>
                        </div>
                    </form>
                    <ul className="dz-list message-list">
                        <li>
                            <Link href="/chat/message">
                                <div className="media media-50">
                                    <Image
                                        className="rounded"
                                        src="/images/message/pic1.jpg"
                                        alt="image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Lucas Mokmana</h6>
                                        <p className="my-1">
                                            Hey bro, let’s meetup at centre point corner
                                        </p>
                                    </div>
                                    <div className="left-content">
                                        <span className="time">2m ago</span>
                                        <div className="seen-btn active mt-2">
                                            <svg
                                                width={11}
                                                height={9}
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.73609 8.82324L0.161085 4.90081C-0.0536949 4.66516 -0.0536949 4.28308 0.161085 4.0474L0.938884 3.19399C1.15366 2.95832 1.50193 2.95832 1.71671 3.19399L4.125 5.8363L9.28329 0.176739C9.49807 -0.058913 9.84634 -0.058913 10.0611 0.176739L10.8389 1.03015C11.0537 1.2658 11.0537 1.64789 10.8389 1.88356L4.51391 8.82326C4.29911 9.05892 3.95087 9.05892 3.73609 8.82324Z"
                                                    fill="#BBB6D0"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/chat/message">
                                <div className="media media-50">
                                    <Image
                                        className="rounded"
                                        src="/images/message/pic2.jpg"
                                        alt="image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Emilia Green</h6>
                                        <p className="my-1">
                                            Can you share your current location now sis
                                        </p>
                                    </div>
                                    <div className="left-content">
                                        <span className="time">2m ago</span>
                                        <div className="seen-btn mt-2">
                                            <svg
                                                width={11}
                                                height={9}
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.73609 8.82324L0.161085 4.90081C-0.0536949 4.66516 -0.0536949 4.28308 0.161085 4.0474L0.938884 3.19399C1.15366 2.95832 1.50193 2.95832 1.71671 3.19399L4.125 5.8363L9.28329 0.176739C9.49807 -0.058913 9.84634 -0.058913 10.0611 0.176739L10.8389 1.03015C11.0537 1.2658 11.0537 1.64789 10.8389 1.88356L4.51391 8.82326C4.29911 9.05892 3.95087 9.05892 3.73609 8.82324Z"
                                                    fill="#BBB6D0"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/chat/message">
                                <div className="media media-50">
                                    <Image
                                        className="rounded"
                                        src="/images/message/pic3.jpg"
                                        alt="image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Richard lee</h6>
                                        <p className="my-1">Cmon dude! make it fast, let’s go</p>
                                    </div>
                                    <div className="left-content">
                                        <span className="time">2m ago</span>
                                        <div className="seen-btn mt-2">
                                            <svg
                                                width={11}
                                                height={9}
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.73609 8.82324L0.161085 4.90081C-0.0536949 4.66516 -0.0536949 4.28308 0.161085 4.0474L0.938884 3.19399C1.15366 2.95832 1.50193 2.95832 1.71671 3.19399L4.125 5.8363L9.28329 0.176739C9.49807 -0.058913 9.84634 -0.058913 10.0611 0.176739L10.8389 1.03015C11.0537 1.2658 11.0537 1.64789 10.8389 1.88356L4.51391 8.82326C4.29911 9.05892 3.95087 9.05892 3.73609 8.82324Z"
                                                    fill="#BBB6D0"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/chat/message">
                                <div className="media media-50">
                                    <Image
                                        className="rounded"
                                        src="/images/message/pic4.jpg"
                                        alt="image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Hendri Lee</h6>
                                        <p className="my-1">Did you tell him about your new car?</p>
                                    </div>
                                    <div className="left-content">
                                        <span className="time">2m ago</span>
                                        <div className="seen-btn active mt-2">
                                            <svg
                                                width={11}
                                                height={9}
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.73609 8.82324L0.161085 4.90081C-0.0536949 4.66516 -0.0536949 4.28308 0.161085 4.0474L0.938884 3.19399C1.15366 2.95832 1.50193 2.95832 1.71671 3.19399L4.125 5.8363L9.28329 0.176739C9.49807 -0.058913 9.84634 -0.058913 10.0611 0.176739L10.8389 1.03015C11.0537 1.2658 11.0537 1.64789 10.8389 1.88356L4.51391 8.82326C4.29911 9.05892 3.95087 9.05892 3.73609 8.82324Z"
                                                    fill="#BBB6D0"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/chat/message">
                                <div className="media media-50">
                                    <Image
                                        className="rounded"
                                        src="/images/message/pic5.jpg"
                                        alt="image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="media-content">
                                    <div>
                                        <h6 className="name">Mogan Fox</h6>
                                        <p className="my-1">Let's go!</p>
                                    </div>
                                    <div className="left-content">
                                        <span className="time">2m ago</span>
                                        <div className="seen-btn mt-2">
                                            <svg
                                                width={11}
                                                height={9}
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.73609 8.82324L0.161085 4.90081C-0.0536949 4.66516 -0.0536949 4.28308 0.161085 4.0474L0.938884 3.19399C1.15366 2.95832 1.50193 2.95832 1.71671 3.19399L4.125 5.8363L9.28329 0.176739C9.49807 -0.058913 9.84634 -0.058913 10.0611 0.176739L10.8389 1.03015C11.0537 1.2658 11.0537 1.64789 10.8389 1.88356L4.51391 8.82326C4.29911 9.05892 3.95087 9.05892 3.73609 8.82324Z"
                                                    fill="#BBB6D0"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChatList