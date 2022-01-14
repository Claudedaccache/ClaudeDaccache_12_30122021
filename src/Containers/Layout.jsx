import React from "react";
import Header from "../Components/Header/Header";

/**
 * Component for showing the header on top and its children components beneath it
 * @component
 *
 */

class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-column">
          <div>
            <Header />
          </div>{" "}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
