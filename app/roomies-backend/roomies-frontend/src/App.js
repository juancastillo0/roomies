import React from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import MessageBoard from "./components/MessageBoard";
import Vaca from "./components/Vaca";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <div class="container-fluid" id="homecontainer">
          <div class="row">
            <div class="col-3">
              <Menu />
            </div>
            <div class="col-6" id="messageboard">
              <MessageBoard />
            </div>
            <div class="col-3">
              <Vaca />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
