import React from "react";
import Cam from "../image/cam.png";
import AddFriend from "../image/add-friend.png";
import SetMore from "../image/more.png";
import Messages from "./Messages";
import Input from "./Input"

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Brian</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={AddFriend} alt="" />
          <img src={SetMore} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
