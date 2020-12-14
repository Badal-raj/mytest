import React from "react";
import { BrowserRouter } from "react-router-dom";

import { RouterMethod } from "./Routes";
//import { TextBox } from "./Components/Common/FormComponents/TextBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TextBox
          type="text"
          label="Name"
          placeholder="Enter name"
          name="name"
        ></TextBox> */}

        <div className="App">
          <BrowserRouter>
            <RouterMethod />
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
