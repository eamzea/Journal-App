import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__input-title"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>
      </div>
      <div className="notes__image">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/4/2018/08/untitled-0888e07.jpg?quality=90&resize=940%2C400"
          alt="Space"
        />
      </div>
    </div>
  );
};

export default NoteScreen;
