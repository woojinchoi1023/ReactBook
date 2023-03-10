// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

const divToggle = document.querySelector("toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// const store = configureStore({ reducer });
const store = createStore(reducer);

const render = () => {
  const state = store.getState(); //current state
  console.log("state", state);
  console.log("store", store);
  //toggle handle
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  //counter handle
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};

//state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase());
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
