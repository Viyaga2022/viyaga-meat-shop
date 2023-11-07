import React from 'react'

const RewardList = () => {

    return (
        <>
            <div style={{ paddingTop: 15 }} className="title-bar mb-40 mt-20">
                <span className="title mb-0">History Rewards</span>
            </div>
            <div className="rewards-list">
                <ul>
                    <li>
                        <div className="item-head">
                            <h5 className="title">Goat + Chicken Skinless + Cleaned Prawns</h5>
                            <div className="dz-meta">
                                <ul>
                                    <li>June 18, 2020</li>
                                    <li>4:00 AM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pts-bx">
                            <h3 className="points text-primary">+250</h3>
                            <p>Pts</p>
                        </div>
                    </li>
                    <li>
                        <div className="item-head">
                            <h5 className="title">Fish + Fish Skinless + Cleaned Prawns</h5>
                            <div className="dz-meta">
                                <ul>
                                    <li>June 18, 2020</li>
                                    <li>4:00 AM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pts-bx">
                            <h3 className="points text-primary">+100</h3>
                            <p>Pts</p>
                        </div>
                    </li>
                    <li>
                        <div className="item-head">
                            <h5 className="title">Chicken Skinless</h5>
                            <div className="dz-meta">
                                <ul>
                                    <li>June 18, 2020</li>
                                    <li>4:00 AM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pts-bx">
                            <h3 className="points text-primary">+50</h3>
                            <p>Pts</p>
                        </div>
                    </li>
                    <li>
                        <div className="item-head">
                            <h5 className="title">Cleaned Prawns</h5>
                            <div className="dz-meta">
                                <ul>
                                    <li>June 18, 2020</li>
                                    <li>4:00 AM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pts-bx">
                            <h3 className="points text-primary">+100</h3>
                            <p>Pts</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default RewardList