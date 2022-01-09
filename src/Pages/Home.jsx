import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import Greeting from "../Components/Greeting/Greeting";
import Charts from "../Containers/Charts";
import HealthIndicators from "../Containers/HealthIndicators";
import withRouter from "../Components/Wrapper/Wrapper"
import ErrorMessage from "../Components/Error/Error"

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: null,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://myjson.dit.upm.es/api/bins/2mxj");
    const data = await response.json();
    const params = this.props.params.id;
    this.setState({
      userData: this.selectedResidence(data, params),
      loading: false,
    });
  }

  selectedResidence(user, params) {
    for (let i = 0; i < user.length; i++) {
      if (user[i].id == params) {
        return user[i];
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
          <Greeting userName={this.state.userData}/>
          <div className="container-fluid allBobyContent">
            <Charts chartsData={this.state.userData} />
            <div className="healthIndicationMainContainer">
              <HealthIndicators userHealthData={this.state.userData}/>
            </div>
          </div>
        </div>
      </div>
    );}else if (this.state.loading) {
      return <div className="mainLoadingMessage">loading...</div>;}
    else{
      return <ErrorMessage />
    }
  }
}

export default withRouter(Home);
