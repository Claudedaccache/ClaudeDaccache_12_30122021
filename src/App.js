import "./App.css";
import React from "react";
import Layout from "../src/Containers/Layout";
import ErrorMessage from "./Components/Error/Error";
import { Routes, Route } from "react-router-dom";
import UserHome from "../src/Pages/Home";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route
              path={"/user/:id"}
              element={<UserHome  />}
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
