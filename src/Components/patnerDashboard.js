import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const PatnerDashboard = () => {


    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);  // Change variable to true on hover
    };

    const handleMouseLeave = () => {
        setHovered(false); // Revert variable to false when hover ends
    };

    const [hovered2, setHovered2] = useState(false);

    const handleMouseEnter2 = () => {
        setHovered2(true);  // Change variable to true on hover
    };

    const handleMouseLeave2 = () => {
        setHovered2(false); // Revert variable to false when hover ends
    };

    const [hovered3, setHovered3] = useState(false);

    const handleMouseEnter3 = () => {
        setHovered3(true);  // Change variable to true on hover
    };

    const handleMouseLeave3 = () => {
        setHovered3(false); // Revert variable to false when hover ends
    };


    const [hovered4, setHovered4] = useState(false);

    const handleMouseEnter4 = () => {
        setHovered4(true);  // Change variable to true on hover
    };

    const handleMouseLeave4 = () => {
        setHovered4(false); // Revert variable to false when hover ends
    };


    const [hovered5, setHovered5] = useState(false);

    const handleMouseEnter5 = () => {
        setHovered5(true);  // Change variable to true on hover
    };

    const handleMouseLeave5 = () => {
        setHovered5(false); // Revert variable to false when hover ends
    };


    const [hovered6, setHovered6] = useState(false);

    const handleMouseEnter6 = () => {
        setHovered6(true);  // Change variable to true on hover
    };

    const handleMouseLeave6 = () => {
        setHovered6(false); // Revert variable to false when hover ends
    };


    const [hovered7, setHovered7] = useState(false);

    const handleMouseEnter7 = () => {
        setHovered7(true);  // Change variable to true on hover
    };

    const handleMouseLeave7 = () => {
        setHovered7(false); // Revert variable to false when hover ends
    };


    const [hovered8, setHovered8] = useState(false);

    const handleMouseEnter8 = () => {
        setHovered8(true);  // Change variable to true on hover
    };

    const handleMouseLeave8 = () => {
        setHovered8(false); // Revert variable to false when hover ends
    };


    const [hovered9, setHovered9] = useState(false);

    const handleMouseEnter9 = () => {
        setHovered9(true);  // Change variable to true on hover
    };

    const handleMouseLeave9 = () => {
        setHovered9(false); // Revert variable to false when hover ends
    };

    return (
        <>
            <div className="d-flex">
                <div className="nav-bar">
                    <img src="Images\Logo.png" alt="" className='logo mx-2 mt-2' />
                    <Link to={'/partner-dashboard'}><img src="Images\logo1.png" alt="" className='nav-opt mb-3 mt-5 mx-4' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} /></Link>
                    <Link to={'/dashboard'}><img src="Images\logo2.png" alt="" className='nav-opt my-3 mx-4' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} /></Link>
                    <Link to={'/MyCompanies'}><img src="Images\logo3.png" alt="" className='nav-opt my-3 mx-4' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} /></Link>
                    <img src="Images\logo4.png" alt="" className='nav-opt my-3 mx-4' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} />
                    <Link to={'/my-fillings'}><img src="Images\logo5.png" alt="" className='nav-opt my-3 mx-4' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} /></Link>
                    <Link to={'/my-info'}><img src="Images\logo6.png" alt="" className='nav-opt my-3 mx-4' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6} /></Link>
                    <img src="Images\logo7.png" alt="" className='nav-opt my-3 mx-4' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7} />
                    <img src="Images\logo8.png" alt="" className='nav-help mb-3 mx-4' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8} />
                    <img src="Images\logo9.png" alt="" className='nav-opt my-3 mx-4' onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9} />
                    <img src="Images\logo10.png" alt="" className='nav-profile my-3 mx-2' />
                </div>
                <div className="content px-5">
                    <div className="header mt-3 d-flex justify-content-between">
                        <h4>Partner Dashboard</h4>
                        <div>
                            <img src="Images\search.svg" alt="" />
                            <button type="button" class="btn btn-light mx-3">Edit Partner</button>
                            <button type="button" class="btn btn-light">Add Company</button>
                        </div>

                    </div>

                    <div className="partner-sec-1 d-flex px-5">
                        <img src="Images\smith.png" alt="" className='partner-img' />
                        <div className='partner-circle'></div>
                        <div className='mx-4'>
                            <div className='mt-4'>
                                <h5>Smith Jason</h5>
                                <p>Project Manager</p>
                            </div>
                            <div className='d-flex'>
                                <a href="#" className='me-3 partner-sec-1-selected-a'>Dashboard</a>
                                <Link to={'/report'} className='mx-3 partner-sec-1-a'>Reports</Link>
                                <Link to={'/companies'} className='mx-3 partner-sec-1-a'>Companies</Link>
                                <a href="#" className='mx-3 partner-sec-1-a'>Fillings</a>
                                <Link to={'/billings'} className='ms-3 partner-sec-1-a'>Billings</Link>
                                <a href="#" className='ms-3 partner-sec-1-a'>FAQ</a>
                            </div>
                        </div>
                        <div className='partner-status-bar'>
                            <div className='d-flex'>
                                <p style={{}}>Profile Completion</p>
                                <p style={{ marginLeft: "248px" }}>50%</p>
                            </div>
                            <div className='partner-status-line'><div className='partner-status-line2'></div></div>
                        </div>
                    </div>

                    <div className="d-flex">

                        <div className='partner-sec-2'>
                            <div className="d-flex justify-content-evenly pt-3">
                                <div>
                                    <h6>Need to Free</h6>
                                    <div className="partner-sec-2-line"></div>
                                </div>
                                <div>
                                    <h6>Fixed</h6>
                                    <div className="partner-sec-2-line2"></div>
                                </div>
                            </div>
                            <img src="Images\partner-pie.png" alt="" className='partner-pie' />
                        </div>

                        <div className='partner-sec-3 d-flex mx-3'>
                            <div className='partner-sec-3-1 '>
                                <p className='text-center mt-5' style={{ fontWeight: "500", }}>Limited Library Corporation</p>
                                <div className='partner-sec-3-container-1'></div>
                                <p className='text-center mt-5' style={{ fontWeight: "500", }}>Corporation</p>
                                <div className='partner-sec-3-container-2'></div>
                            </div>
                            <div className='partner-sec-3-2 mt-5'>
                                <img src="Images\partner-overlay.png" alt="" style={{ height: "223px" }} />
                                <img src="Images\partner-overlay2.png" alt="" className='partner-overlay' />
                            </div>
                        </div>
                        <div className='partner-sec-4'>
                            <h5 className='p-2'>You have</h5>
                            <img src="Images\5.png" alt="" className='my-3' style={{ marginLeft: "59px" }} />
                            <h6 className='text-center'>Companies under
                                Management</h6>
                        </div>
                    </div>

                    <div className='partner-sec-5 pt-4 px-5'>
                        <h5 style={{ color: "#1938551" }}>Alerts</h5>
                        <p className='pt-2' style={{ color: "#ACACBB" }}>You have no further alert at this time</p>
                    </div>


                    {hovered ? (
                        <>
                            <div className="triangle1 triangle"></div>
                            <div className="box1 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered2 ? (
                        <>
                            <div className="triangle2 triangle"></div>
                            <div className="box2 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered3 ? (
                        <>
                            <div className="triangle3 triangle"></div>
                            <div className="box3 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered4 ? (
                        <>
                            <div className="triangle4 triangle"></div>
                            <div className="box4 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered5 ? (
                        <>
                            <div className="triangle5 triangle"></div>
                            <div className="box5 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered6 ? (
                        <>
                            <div className="triangle6 triangle"></div>
                            <div className="box6 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered7 ? (
                        <>
                            <div className="triangle7 triangle"></div>
                            <div className="box7 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered7 ? (
                        <>
                            <div className="triangle7 triangle"></div>
                            <div className="box7 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered8 ? (
                        <>
                            <div className="triangle8 triangle"></div>
                            <div className="box8 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}
                    {hovered9 ? (
                        <>
                            <div className="triangle9 triangle"></div>
                            <div className="box9 box">Dashboard</div>
                        </>
                    ) : (
                        <></>
                    )}

                </div>
            </div>
        </>
    )
}

export default PatnerDashboard
