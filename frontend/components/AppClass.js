import React from "react";

// Suggested initial states
const initialMessage = "";
const initialEmail = "";
const initialSteps = 0;
const initialIndex = 4; // the index the "B" is at

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
};

export default class AppClass extends React.Component {
  state = {
    initialIndex: 4,
    initialMessage: "",
    initialEmail: "",
    initialSteps: 0,
    xCoordinate: 2,
    yCoordinate: 2,
  };

  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  getX = (xCoordinate) => {
    if (xCoordinate === 0 || (xCoordinate === 1) | (xCoordinate === 2))
      return xCoordinate + 1;
    if (xCoordinate === 3 || xCoordinate === 4 || xCoordinate === 5)
      return xCoordinate - 2;
    if (xCoordinate === 6 || xCoordinate === 7 || xCoordinate === 8)
      return xCoordinate - 5;

    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  };

  getY = (yCoordinate) => {
    if (yCoordinate === 0) return yCoordinate + 1;
    if (yCoordinate === 1) return yCoordinate;
    if (yCoordinate === 2 || yCoordinate === 3) return yCoordinate - 1;
    if (yCoordinate === 4) return yCoordinate - 2;
    if (yCoordinate === 5 || yCoordinate === 6) return yCoordinate - 3;
    if (yCoordinate === 7) return yCoordinate - 4;
    if (yCoordinate === 8) return yCoordinate - 5;
  };

  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  };

  reset = () => {
    this.setState({
      initialIndex: 4,
      initialMessage: "",
      initialEmail: "",
      initialSteps: 0,
      xCoordinate: 2,
      yCoordinate: 2,
    });
    // Use this helper to reset all states to their initial values.
  };

  getNextIndex = (direction) => {
    if (direction === "left" && this.state.initialIndex === 0)
      return this.state.initialIndex;
    if (direction === "left" && this.state.initialIndex === 3)
      return this.state.initialIndex;
    if (direction === "left" && this.state.initialIndex === 6)
      return this.state.initialIndex;

    if (direction === "right" && this.state.initialIndex === 2)
      return this.state.initialIndex;
    if (direction === "right" && this.state.initialIndex === 5)
      return this.state.initialIndex;
    if (direction === "right" && this.state.initialIndex === 8)
      return this.state.initialIndex;

    if (direction === "up" && this.state.initialIndex === 0)
      return this.state.initialIndex;
    if (direction === "up" && this.state.initialIndex === 1)
      return this.state.initialIndex;
    if (direction === "up" && this.state.initialIndex === 2)
      return this.state.initialIndex;

    if (direction === "down" && this.state.initialIndex === 6)
      return this.state.initialIndex;
    if (direction === "down" && this.state.initialIndex === 7)
      return this.state.initialIndex;
    if (direction === "down" && this.state.initialIndex === 8)
      return this.state.initialIndex;

    if (direction === "left") return this.state.initialIndex - 1;
    if (direction === "right") return this.state.initialIndex + 1;
    if (direction === "up") return this.state.initialIndex - 3;
    if (direction === "down") return this.state.initialIndex + 3;

    helperSteps = (direction) => {
      if (direction === "left" && this.state.initialIndex === 1)
        return this.state.initialSteps + 1;
      if (direction === "left" && this.state.initialIndex === 4)
        return this.state.initialSteps + 1;
      if (direction === "left" && this.state.initialIndex === 7)
        return this.state.initialSteps + 1;
      if (direction === "left" && this.state.initialIndex === 2)
        return this.state.initialSteps + 1;
      if (direction === "left" && this.state.initialIndex === 5)
        return this.state.initialSteps + 1;
      if (direction === "left" && this.state.initialIndex === 8)
        return this.state.initialSteps + 1;

      if (direction === "right" && this.state.initialIndex === 0)
        return this.state.initialSteps + 1;
      if (direction === "right" && this.state.initialIndex === 3)
        return this.state.initialSteps + 1;
      if (direction === "right" && this.state.initialIndex === 6)
        return this.state.initialSteps + 1;
      if (direction === "right" && this.state.initialIndex === 1)
        return this.state.initialSteps + 1;
      if (direction === "right" && this.state.initialIndex === 4)
        return this.state.initialSteps + 1;
      if (direction === "right" && this.state.initialIndex === 7)
        return this.state.initialSteps + 1;

      if (direction === "up" && this.state.initialIndex === 3)
        return this.state.initialSteps + 1;
      if (direction === "up" && this.state.initialIndex === 4)
        return this.state.initialSteps + 1;
      if (direction === "up" && this.state.initialIndex === 5)
        return this.state.initialSteps + 1;
      if (direction === "up" && this.state.initialIndex === 6)
        return this.state.initialSteps + 1;
      if (direction === "up" && this.state.initialIndex === 7)
        return this.state.initialSteps + 1;
      if (direction === "up" && this.state.initialIndex === 8)
        return this.state.initialSteps + 1;

      if (direction === "down" && this.state.initialIndex === 0)
        return this.state.initialSteps + 1;
      if (direction === "down" && this.state.initialIndex === 1)
        return this.state.initialSteps + 1;
      if (direction === "down" && this.state.initialIndex === 2)
        return this.state.initialSteps + 1;
      if (direction === "down" && this.state.initialIndex === 3)
        return this.state.initialSteps + 1;
      if (direction === "down" && this.state.initialIndex === 4)
        return this.state.initialSteps + 1;
      if (direction === "down" && this.state.initialIndex === 5)
        return this.state.initialSteps + 1;
      else return this.state.initialSteps;
    };

    errorHelper = (direction) => {
      if (direction === "left" && this.state.initialIndex === 0)
        return "You can't go left";
      if (direction === "left" && this.state.initialIndex === 3)
        return "You can't go left";
      if (direction === "left" && this.state.initialIndex === 6)
        return "You can't go left";

      if (direction === "up" && this.state.initialIndex === 0)
        return "You can't go up";
      if (direction === "up" && this.state.initialIndex === 1)
        return "You can't go up";
      if (direction === "up" && this.state.initialIndex === 2)
        return "You can't go up";

      if (direction === "down" && this.state.initialIndex === 6)
        return "You can't go down";
      if (direction === "down" && this.state.initialIndex === 7)
        return "You can't go down";
      if (direction === "down" && this.state.initialIndex === 8)
        return "You can't go down";

      if (direction === "right" && this.state.initialIndex === 2)
        return "You can't go right";
      if (direction === "right" && this.state.initialIndex === 5)
        return "You can't go right";
      if (direction === "right" && this.state.initialIndex === 8)
        return "You can't go right";
    };
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  };

  move = (evt) => {
    this.setState({
      ...this.state,
      initialIndex: this.getNextIndex(evt.target.id),
      initialSteps: this.helperSteps(evt.target.id),
      xCoordinate: this.getX(this.state.initialIndex),
      yCoordinate: this.getY(this.state.initialIndex),
      initialMessage: this.errorHelper(evt.target.id),
    });
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  };

  onChange = (evt) => {
    // You will need this to update the value of the input.
    const { value } = evt.target;
    this.setState({ ...this.state, initialEmail: value });
  };

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
  };

  render() {
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">
            Coordinates ({this.getX(this.state.initialIndex)},
            {this.getY(this.state.initialIndex)})
          </h3>
          {/* <h3 id="steps">You moved {this.state.initialSteps} times</h3> */}
          <h3 id="steps">
            You moved {this.state.initialSteps}{" "}
            {this.state.initialSteps === 1 ? "time" : "times"}
          </h3>
        </div>
        <div id="grid">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <div
              key={idx}
              className={`square${
                idx === this.state.initialIndex ? " active" : ""
              }`}
            >
              {idx === this.state.initialIndex ? "B" : null}
            </div>
          ))}
        </div>
        <div className="info">
          <h3 id="message">{this.state.initialMessage}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.move} id="left">
            LEFT
          </button>
          <button onClick={this.move} id="up">
            UP
          </button>
          <button onClick={this.move} id="right">
            RIGHT
          </button>
          <button onClick={this.move} id="down">
            DOWN
          </button>
          <button onClick={this.reset} id="reset">
            reset
          </button>
        </div>
        <form>
          <input
            id="email"
            type="email"
            placeholder="type email"
            onChange={this.onChange}
            value={this.state.initialEmail}
          ></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    );
  }
}
