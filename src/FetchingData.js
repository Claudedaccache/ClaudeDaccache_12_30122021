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

  const data = await Promise.all([
    fetchedData(params, ""),
    fetchedData(params, "activity"),
    fetchedData(params, "average-sessions"),
    fetchedData(params, "performance"),
  ]).then((values) => {
    const data = Object.assign({}, values);
    const userInfo = data[0];
    const userActivity = data[1].sessions;
    const userAverageSessions = data[2].sessions;
    const userPerformance = data[3].data;
    const userPerformanceKind = data[3].kind;
    let userData = createUserObject(
      userInfo,
      userActivity,
      userAverageSessions,
      userPerformance,
      userPerformanceKind
    );
    return userData;
  });
  if (data) {
    return data;
  } else {
    return null;
  }
}

export default usersData;
