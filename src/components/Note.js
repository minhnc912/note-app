import { MdDeleteForever } from "react-icons/md";

const Note = ({ index, id, content, date, deleteNoteHandler }) => {

    return (
        <div className="note" key={index}>
            <span>{content}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => deleteNoteHandler(id)}/>
            </div>
        </div>
    );
};

export default Note;
