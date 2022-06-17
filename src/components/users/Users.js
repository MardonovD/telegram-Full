import React from "react";
import "./UsersStyle.css";
const Users = () => {
  return (
    <div className="users">
      <div className="users-map">
        <div className="users-inp">
          <input
            type="text "
            className="form-control bg-secondary"
            placeholder="search"
          />
        </div>
        <div className="user-api-map"></div>
      </div>
    </div>
  );
};

export default Users;
