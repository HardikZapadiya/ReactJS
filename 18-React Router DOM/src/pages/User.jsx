import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="user-container">
      <h1>User Page</h1>

      <div className="sub-navbar">
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </div>

      <hr />

      <Outlet className="outlet-box" />
    </div>
  );
};

export default User;
