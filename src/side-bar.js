import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-container-wrapper">
          <SideBarTitle />
          <SideBarContents />
          <SideBarContentsContinued />
          <NewProjectButton />
        </div>
      </div>
     
    </>
  );
};

const SideBarTitle = () => {
  return (
    <>
      <div className="logo">
        <div className="logo-wrapper">
          <img src="/images/thunderr.png" alt="" />
          <h2>Welcome Keerthi</h2>
        </div>
      </div>
    </>
  );
};

const SideBarContents = () => {
  return (
    <>
      <div className="contents">
        <div className="contents-wrapper">
          <ul>
            <li className="list-contents">
              <img src="/images/1-sidebar.png" alt="" />
              <h2>Dashboard</h2>
            </li>
            <li className="list-contents">
              <img src="/images/2-sidebar.png" alt="" />
              <h2>Settings</h2>
            </li>
            <li className="list-contents">
              <img src="/images/3-sidebar.png" alt="" />
              <h2>Activities</h2>
            </li>
            <li className="list-contents">
              <img src="/images/4-sidebar.png" alt="" />
              <h2>Users</h2>
            </li>
            <li className="list-contents">
              <img src="/images/5-sidebar.png" alt="" />
              <h2>Added Users</h2>
            </li>
            <li className="list-contents">
              <img src="/images/6-sidebar.png" alt="" />
              <h2>Affiliate</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const SideBarContentsContinued = () => {
  return (
    <>
      <div className="continued">
        <div className="continued-wrapper">
          <ul>
            <li className="list-contents">
              <img src="/images/side-thunder.png" alt="" />
              <h2>Profile</h2>
            </li>
            <li className="list-contents">
              <i class="ri-user-line"></i>
              <h2>Logout</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const NewProjectButton = () => {
  return (
    <>
      <div className="new-btn">
        <div className="new-btn-wrapper">
          <button className="new">
            <i class="ri-add-line"></i>
            <h3>NEW PROJECT</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
