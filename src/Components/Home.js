import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {

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
            <h4>Dashboard</h4>
            <div>
              <img src="Images\search.svg" alt="" />
              <button type="button" class="btn btn-light mx-3">Add a Partner</button>
              <Link to={'/addcompany'}><button type="button" class="btn btn-light">Add Company</button></Link>
            </div>

          </div>

          <div className="d-flex mt-4">
            <div className='home-left py-4 ps-5'>
              <h4>Let’s Setup Your Account</h4>
              <div className="d-flex mt-4">
                <div className="line"></div>
                <div>
                  <div className="circle-1"></div>

                  <div className="mx-3">
                    <h6 style={{ fontSize: "18px" }}>Personal & Business Information</h6>
                    <p style={{ fontSize: "14px" }}>Provide personal and business contact information that will be used in all of your reports.</p>
                    <button className='home-button px-3 py-2'>Go to my info</button>
                  </div>
                  <div className="horz-line"></div>
                  <div className="circle-2"></div>

                  <div className="mx-3 mt-4">
                    <h6 style={{ fontSize: "18px" }}>Identifying Documents</h6>
                    <p style={{ fontSize: "14px" }}>Upload the appropiate identification to verify your identity.</p>
                    <button className='home-button px-3 py-2'>Add Information</button>
                  </div>

                  <div className="horz-line"></div>
                  <div className="circle-3"></div>

                  <div className="mx-3 mt-4">
                    <h6 style={{ fontSize: "18px" }}>Your First Company</h6>
                    <p style={{ fontSize: "14px" }}>Set up your first company!</p>
                    <button className='home-button px-3 py-2'>Add Company</button>
                  </div>

                </div>
              </div>
            </div>
            <div className='home-right ms-4'>
              <div className="d-flex">
                <div className='home-right-1 px-4 py-4'>
                  <h5>Pending Invites</h5>
                  <p className='my-2'>You havebeen invited to join these companies.</p>
                  <p className='mt-5 text-center'>Your invite inbox is empty.</p>
                </div>
                <div className='home-right-1 mx-4 px-4 py-4'>
                  <h5>Pending Approvals</h5>
                  <p className='my-2'>Others have requested to join a company you manage.</p>
                  <p className='mt-5 text-center'>Your Approval inbox is empty.</p>
                </div>
              </div>
              <div className='home-right-2 px-4 py-4'>
                <h5>About FinCEN Reporting</h5>
                <p className='my-2'>Notice: We will safely store your account information in accordance with our Privacy Policy and Terms of Service. When the Corporate Transparency Act takes effect on January 1, 2024, you will be able to file a beneficial ownership report for your company and tack other steps.</p>
                <p className='mt-4 '>Please check back from time to time for updates on FinCEN's regulatory process at FinCEN Report.</p>
              </div>
            </div>
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

export default Home
