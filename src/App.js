import "./App.css";
import React from "react";
import Layout from "../src/Containers/Layout";
// import SideBar from "../src/Components/SideBar/SideBar";
// import Greeting from "./Components/Greeting/Greeting";
// import Charts from "./Containers/Charts";
// import HealthIndicators from "./Containers/HealthIndicators";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/2mxj");
    const data = await response.json();
    this.setState({
      userData: data,
      loading: false,
    });
  }

  render() {
    return (
      <Layout>
        <Routes>
          <Route
              path={"/user/:id"}
              element={<Home userData={this.state.userData} />}
          ></Route>
        </Routes>
      </Layout>
    );
  }
}

export default App;
