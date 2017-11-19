import React from "react";
import "normalize.css";
import "styles/index.scss";

export default class App extends React.Component {
  test() {
    const a = { nico: "1" };
    const b = { ...a, carro: "2" };

    return b.carro;
  }
  render() {
    return (
      <div>
        <h1>react babel</h1>
        <p>{this.test()}</p>
      </div>
    );
  }
}
