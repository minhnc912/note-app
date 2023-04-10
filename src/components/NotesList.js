import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, addNoteHandler, deleteNoteHandler }) => {
    return (
        <div className="notes-list">
            {notes.map((note, index) => (
                <Note
                    key={index}
                    id={note.id}
                    content={note.content}
                    date={note.date}
                    deleteNoteHandler = {deleteNoteHandler}
                />
            ))}
            <AddNote addNoteHandler={addNoteHandler} />
        </div>
    );
};

export default NotesList;
