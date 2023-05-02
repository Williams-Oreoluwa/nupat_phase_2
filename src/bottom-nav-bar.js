import React from "react";

const BottomNav = () => {
  return (
    <>
      <header className="bottom-nav-header">
        <div className="bottom-nav" >
          <ul>
            <li className="nav-data">
              <img src="/images/Vector-num-1.png" alt="" />
              <h5>Participants View</h5>
            </li>
            <li  className="nav-data">
            <img src="/images/Vector (2).png" alt="" />
              
              <h5>Board View</h5>
            </li>
            <li  className="nav-data">
            <img src="/images/Vector (3).png" alt="" />
              <h5>List View</h5>
            </li>
            <li  className="nav-data">
              <img src="/images/Vector (4).png" alt="" />
              <h5>Power View</h5>
            </li>
            <li  className="nav-data">
              <img src="/images/Vector (5).png" alt="" />
              <h5>Options</h5>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default BottomNav
