import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            content: "This is first note",
            date: "10/04/2023",
        },
        { id: nanoid(), content: "This is second note", date: "10/04/2023" },
        { id: nanoid(), content: "This is third note", date: "10/04/2023" },
        { id: nanoid(), content: "This is fourth note", date: "10/04/2023" },
    ]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes-app-data", JSON.stringify(notes));
    }, [notes]);

    const [searchText, setSearchText] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const addNote = (content) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            content: content,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className={`${darkMode && "dark-mode"}`}>
            <div className="container">
                <Header darkModeToggleHandler={setDarkMode} />
                <Search searchNoteHandler={setSearchText} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.content.toLowerCase().includes(searchText)
                    )}
                    addNoteHandler={addNote}
                    deleteNoteHandler={deleteNote}
                />
            </div>
        </div>
    );
}

export default App;
