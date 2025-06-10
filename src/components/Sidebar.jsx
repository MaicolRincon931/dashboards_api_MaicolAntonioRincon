import { sidebarData } from "../data/SidebarData.jsx"
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);


  const handleClick = (link) => {
    window.location.pathname = link;
    if (window.innerWidth <= 900) setOpen(false);
  };

  return (
    <>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>
      <div className={`Sidebar${open ? " open" : ""}`}>
        <ul className="SidebarList">
          {sidebarData.map((val, key) => (
            <li
              id={window.location.pathname === val.link ? "active" : ""}
              className="row"
              key={key}
              onClick={() => handleClick(val.link)}
            >
              <div id="icon">{val.icon}</div>
              <div id="name">{val.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
