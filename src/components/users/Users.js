import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UsersStyle.css";
const Users = (props) => {
  const [data, setData] = useState([]);
  console.log(props.userReducers.users);

  const axiosUsers = async (save) => {
    const res = await axios
      .get("https://fakestoreapi.com/users")
      .catch((err) => console.log(err, "ERROR"));
    console.log(res);
    save(res.data);
    setData(res);
  };

  useEffect(() => {
    const thunkWith = (res) => async (dispatch) => {
      dispatch(props.usersAction(res));
    };

    axiosUsers(thunkWith());
  }, [data]);

  return (
    <div className="users">
      <div className="users-map">
        <div className="users-inp">
          <input
            type="text"
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
