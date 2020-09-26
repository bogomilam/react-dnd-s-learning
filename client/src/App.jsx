import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const App = () => {
    return (
        <DndProvider backend={Backend}>
            <Header />
            <h1 className={"instructions"}>
                Drag and Drop each item to it's correct number type, click on the number item for a clue!!!
            </h1>
            <Homepage />
        </DndProvider>
    );
};

export default App;