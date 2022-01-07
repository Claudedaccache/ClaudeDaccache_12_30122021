import "./App.css";
import React from "react";
import Layout from "../src/Containers/Layout";
import SideBar from "../src/Components/SideBar/SideBar";
import Greeting from "./Components/Greeting/Greeting";
import Charts from "./Containers/Charts";
import HealthIndicators from "./Containers/HealthIndicators";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <div className="BodyContentWithSideBar">
          <div>
            {" "}
            <SideBar />
          </div>
          <div className="BodyContentWithoutSideBar">
              {" "}
              <Greeting />
            <div className="container-fluid allBobyContent">
              <Charts />
              <div className="healthIndicationMainContainer">
                <HealthIndicators />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
