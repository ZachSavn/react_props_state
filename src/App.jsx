import "./App.css";
import { Component } from "react";
import Box from "./components/Box"

class App extends Component {
  constructor(props) {
    super(props);

    // set default state
    let boxes = [];
    let numBoxes = 24;
   let i = 0
    //iterate through boxes

    for (i = 0, i < numBoxes; i++;) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
    }); 
    }
    this.state = {
      boxes
    };
    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);

  }
  handleBoxClick(e){
    const newBoxes = this.state.boxes.map((box) => {
      //only change color for specified 1 box
    if (box.id === e.target.id) {
     box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
    }
    return box;
    });
    this.setState({boxes: newBoxes})
  }
  //random color assignment
  getRandomColor() {
    const rgb = (Math.round(Math.random() * 255));
      return rgb;
  }
  render() {
     //iterates over boxes and assigns props
     const renderBoxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        color={box.color}
        handleClick={this.handleBoxClick}
      />
    ));
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
