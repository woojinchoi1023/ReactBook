import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispatchToProps = (dispatch) =>
  //   {
  //   //temporal function
  //   increase: () => {
  //     console.log("increase");
  //     dispatch(increase());
  //   },
  //   decrease: () => {
  //     console.log("decrease");
  //     dispatch(decrease());
  //   },
  // }
  bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch
  );

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
//두번째 파라미터를 아예 객체 형태로 넣어 주면 connect함수가 내부적으로 bindActionCreators 작업을 대신해 줍니다.
export default CounterContainer;
