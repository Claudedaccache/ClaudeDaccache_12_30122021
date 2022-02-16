import users from "./Users.json";

async function usersData(params) {
  const createUserObject = (
    info,
    activity,
    averageSession,
    performance,
    performanceKind
  ) => {
    const user = Object.create(info, {
      info: { value: info ? info : null },
      activity: { value: activity ? activity : null },
      averageSession: { value: averageSession ? averageSession : null },
      performance: { value: performance ? performance : null },
      performanceKind: { value: performanceKind ? performanceKind : null },
    });
    return user;
  };

  const fetchedData = async (userId, path) => {
    let urlPath = path
      ? `http://localhost:3000/user/${userId}/${path}`
      : `http://localhost:3000/user/${userId}`;
    const response = await fetch(urlPath);
    if (response) {
      const userData = await response.json();
      return userData.data;
    } else {
      return null;
    }
  };

  const getUser = (usersdata, userid) => {
    let selectedUser = usersdata.find(
      (item) => item[0].id === parseInt(userid)
    );
    return selectedUser ? selectedUser : [undefined];
  };

  const values =
    process.env.REACT_APP_NODE_ENV === "1"
      ? await Promise.all([
          fetchedData(params, ""),
          fetchedData(params, "activity"),
          fetchedData(params, "average-sessions"),
          fetchedData(params, "performance"),
        ])
      : getUser(users, params);

  const hasUndefined = values.findIndex((elt) => elt === undefined);
  if (hasUndefined === -1) {
    const data = Object.assign({}, values);
    const userInfo = data[0] ? formatDataInfo(data[0]) : null;
    const userActivity = data[1].sessions ? data[1].sessions : null;
    const userAverageSessions = data[2].sessions ? data[2].sessions : null;
    const userPerformance = data[3].data ? data[3].data : null;
    const userPerformanceKind = data[3].kind ? data[3].kind : null;
    let userData = createUserObject(
      userInfo,
      userActivity,
      userAverageSessions,
      userPerformance,
      userPerformanceKind
    );
    return userData;
  }
  return null;
}
function formatDataInfo(data) {
  data.score = data.score ?? data.todayScore;
  return data;
}
export default usersData;
