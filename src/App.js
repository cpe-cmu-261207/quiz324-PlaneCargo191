import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  var input = useState("Nothing");
  var name = input[0];
  var gender = input[1];
  var age = input[2]
  //load locationStorage
  useEffect(() => {
    //localStorage.setItem("items", );
    const items = localStorage.getItem("items");
    // ...
  }, []);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 5"></input>
        </div>

        <button
          onClick={() => }
          className="button is-danger is-fullwidth"
        >
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>

        {/* sample table */}
        <ItemTable name={"Coco"} gender={"Male"} age={"5"} />
        <p>Thanakorn Chaininphun 620610790</p>
      </div>
    </div>
  );
}

export default App;
