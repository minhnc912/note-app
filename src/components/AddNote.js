import React, { useState } from "react";

const AddNote = ({ addNoteHandler }) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const textChangeHandler = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const saveButtonCLickHandler = () => {
        if (noteText.trim().length > 0) {
            addNoteHandler(noteText);
            setNoteText("");
        }
    };

    return (
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a new note..."
                value={noteText}
                onChange={textChangeHandler}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button onClick={saveButtonCLickHandler} className="save">
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
