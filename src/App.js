import React from "react";
import logo from "./logo.svg";
import Data from "./data";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div class="card w-100">
          <div class="card-body">
            <form action="" className="w-100">
              <div className="form-group">
                <select className="form-controll">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <div className="form-group mt-2 ">
                  <button className="btn btn-primary">search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Data />
    </div>
  );
}

export default App;
