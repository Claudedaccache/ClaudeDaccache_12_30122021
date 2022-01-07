import React from "react";
import Header from "../Components/Header/Header";

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
