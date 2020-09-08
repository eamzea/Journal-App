import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.pinimg.com/originals/64/29/75/642975b5a9f8b8414d5f3d4a6415fefc.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">A new day</p>
        <p className="journal__entry-content">
          Et id autem fugit fuga eaque explicabo consequuntur rerum.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
