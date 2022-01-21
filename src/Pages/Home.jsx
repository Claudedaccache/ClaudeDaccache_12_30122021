import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import Greeting from "../Components/Greeting/Greeting";
import Charts from "../Containers/Charts";
import HealthIndicators from "../Containers/HealthIndicators";
import withRouter from "../Components/Wrapper/Wrapper";
import ErrorMessage from "../Components/Error/Error";
import usersData from "../FetchingData";

/**
 * class to display the user's home information and data according to the user's id
 */

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userInfo: null,
      userActivity: null,
      userAverageSessions: null,
      userPerformance: null,
      userPerformanceKind: null,
    };
  }

  /**
   * fetch data from api to retrieve users data and display them on the page
   */
  async componentDidMount() {
    const params = this.props.params.id;
    let response = usersData(params);
    const data = await response;
    this.setState({
      loading: false,
      userInfo: data.info,
      userActivity: data.activity,
      userAverageSessions: data.averageSession,
      userPerformance: data.performance,
      userPerformanceKind: data.performanceKind,
    });
  }

  render() {
    if (
      this.state.userInfo !== null &&
      this.state.userActivity !== null &&
      this.state.userAverageSessions !== null &&
      this.state.userPerformance !== null &&
      this.state.userPerformanceKind !== null
    ) {
      return (
        <div className="BodyContentWithSideBar">
          <div>
            {" "}
            <SideBar />
          </div>
          <div className="BodyContentWithoutSideBar">
            {" "}
            <Greeting userName={this.state.userInfo} />
            <div className="allBobyContent">
              <Charts
                userScore={this.state.userInfo}
                UserActivity={this.state.userActivity}
                userAverageSessions={this.state.userAverageSessions}
                userPerformance={this.state.userPerformance}
                userPerformanceKind={this.state.userPerformanceKind}
              />
              <div className="healthIndicationMainContainer">
                <HealthIndicators userHealthData={this.state.userInfo} />
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
