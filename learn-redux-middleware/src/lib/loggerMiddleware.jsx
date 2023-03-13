const loggerMiddleware = (store) => (next) => (action) => {
  //middleware basic structure
  console.group(action && action.type); //action타입으로 log를 그룹화
  console.log("pre state", store.getState());
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
  console.groupEnd(); //group ends
};

export default loggerMiddleware;
