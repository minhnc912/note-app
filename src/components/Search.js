import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ searchNoteHandler }) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input
                onChange={(event) => searchNoteHandler(event.target.value)}
                type="text"
                placeholder="Type to search..."
            ></input>
        </div>
    );
};

export default Search;
