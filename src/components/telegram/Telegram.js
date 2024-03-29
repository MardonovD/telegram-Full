import React from "react";
import LeftIcons from "../lefticons/LeftIcons";
import { UserContainerConnect } from "../../redux/containers/UserContainers";
import "./TelegramStyle.css";
const Telegram = () => {
  return (
    <div className="telegram ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
            <LeftIcons />
          </div>
          <div className="col-3">
            <UserContainerConnect />
          </div>
          <div className="col-5"></div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Telegram;
