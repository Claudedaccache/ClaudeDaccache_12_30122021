import "./App.css";
import React from "react";
import Layout from "../src/Containers/Layout";
import ErrorMessage from "./Components/Error/Error";
import { Routes, Route } from "react-router-dom";
import UserHome from "../src/Pages/Home";

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
              element={<UserHome userData={this.state.userData} />}
          ></Route>
            <Route
              path="*"
              element={<ErrorMessage />}
          ></Route>
        </Routes>
      </Layout>
    );
  }
}

export default App;
