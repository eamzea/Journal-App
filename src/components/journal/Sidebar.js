import React from "react";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  return (
    <aside className="jornal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>Edgar</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"> </i>
        <p className="mt-5">new Entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
