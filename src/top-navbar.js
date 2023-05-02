import React from "react";

const TopNavbar = () => {
  return (
    <>
      <TopNavBarHeader />
    </>
  );
};

const TopNavBarHeader = () => {
  return (
    <>
      <div className="top-nav-container" style={{zIndex:'2323'}}>
        <div className="top-nav-wrapper">
          <div className="title">
            <h1>New Campaign Run </h1>
            <h4>
              A new campaign launch work for brand new feature in May month.
            </h4>
          </div>
          <div className="btn-container">
              <button className="top-btn">ADD MEMBERS</button>

          </div>
        
        </div>
        <BelowNavBar />
      </div>
    </>
  );
};

export const BelowNavBar = () => {
  return (
    <>
      <div className="below-header">
        <div className="below-header-wrapper">
          <div className="image-stuff">
            <div className="image">
              <img
                className="img image1"
                src="/images/image 8 (1).png"
                alt=""
              />
              <img className="img image2" src="/images/image 8.png" alt="" />
              <img className="img image3" src="/images/image 8.png" alt="" />
            </div>
            <div className="image-text">
              <h3>8 members</h3>
            </div>
          </div>
          <BelowNavList/>
         
        </div>
      </div>
    </>
  );
};

export const BelowNavList = () =>{
  return<>
   <div className="more-options">
            <div className="more-options-wrapper">
              <ul>
                <li className="options">
                  <i class="ri-user-3-line"></i>
                  <h1>Participants View</h1>
                </li>
                <li className="options">
                  <i class="ri-pause-mini-line"></i>
                  <h1>Board View</h1>
                </li>
                <li className="options">
                  <i class="ri-equalizer-line"></i>
                  <h1>List View</h1>
                </li>
                <li className="options">
                  <i class="ri-thunderstorms-line"></i>
                  <h1>Power View</h1>
                </li>
                <li className="options">
                  <i class="ri-add-line"></i>
                </li>
              </ul>
            </div>
          </div>
  </>
}

export default TopNavbar;
