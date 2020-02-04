import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.image} alt={props.nameavatar} class="avatar" />

      <div>
        <h4 class="name">{props.nameavatar}</h4>

        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>

          <h5 class="status-text">{props.online ? "Online" : "Offline"}</h5>
        </div>
      </div>
    </div>
  );
}

export default Contact;
