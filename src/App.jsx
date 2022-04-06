import "./App.css";
import { Component } from "react";

let boxes = [];
let numBoxes = 24;

for (i = 0; i < numBoxes, i++; ) {
  Push(boxes) => 
}

class App extends Component {
  constructor(props) {
    super(props);

    // set default state

    // bind methods to this
  }

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
