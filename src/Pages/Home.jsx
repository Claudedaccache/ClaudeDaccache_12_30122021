import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import Greeting from "../Components/Greeting/Greeting";
import Charts from "../Containers/Charts";
import HealthIndicators from "../Containers/HealthIndicators";
import withRouter from "../Components/Wrapper/Wrapper";
import ErrorMessage from "../Components/Error/Error";

/**
 * class to display the user's home information and data according to the user's id
 */

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: null,
    };
  }

  /**
   * fetch an api to retrieve the users data and display them on the page
   */
  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/2mxj");
    const data = await response.json();
    const params = this.props.params.id;
    this.setState({
      userData: this.selectedResidence(data, params),
      loading: false,
    });
  }

  /**
   * fonction the filter the users data and only return the user that has an id equal the the param's id
   * @param {object} users all users data
   * @param {string} params id retrieved from the params
   * @returns user with the id that is equal to the param's id / null
   */
  selectedResidence(users, params) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == params) {
        return users[i];
      }
    }
    return null;
  }

  render() {
    if (this.state.userData !== null) {
      return (
        <div className="BodyContentWithSideBar">
          <div>
            {" "}
            <SideBar />
          </div>
          <div className="BodyContentWithoutSideBar">
            {" "}
            <Greeting userName={this.state.userData} />
            <div className="container-fluid allBobyContent">
              <Charts chartsData={this.state.userData} />
              <div className="healthIndicationMainContainer">
                <HealthIndicators userHealthData={this.state.userData} />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.loading) {
      return <div className="mainLoadingMessage">loading...</div>;
    } else {
      return <ErrorMessage />;
    }
  }
}

export default withRouter(UserHome);
