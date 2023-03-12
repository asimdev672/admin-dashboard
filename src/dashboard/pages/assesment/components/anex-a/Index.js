import React, { useState } from "react";
import CompA5 from "./CompA5";
import CompA6 from "./CompA6";
import CompA7 from "./CompA7";
import CompA8 from "./CompA8";
import { BsFillChatDotsFill } from "react-icons/bs";
import Chat from "./ChatBot";
export default function MainAnex() {
  const [show, setShow] = useState(false);
  return (
    <>
    <h3 className="text-center my-3" style={{fontWeight: '700',
    color: '#024264'}}>Annex A</h3>
      <CompA5 /> <br />
      <CompA6 /> <br />
      <CompA7 /> <br />
      <CompA8 /> <br />
      <div className="anexA">
      {show ? (
        <div className="chatBox">
          <Chat />
        </div>
      ) : (
        ""
      )}
      <div className="chat-main">
        <BsFillChatDotsFill
          className="chat-ico"
          onClick={() => setShow(!show)}
        />
      </div>
      </div>
    </>
  );
}
