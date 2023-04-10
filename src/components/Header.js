import React from "react";

const Header = ({ darkModeToggleHandler }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={() =>
                    darkModeToggleHandler(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="save"
            >
                Toggle Mode
            </button>
        </div>
    );
};

export default Header;
