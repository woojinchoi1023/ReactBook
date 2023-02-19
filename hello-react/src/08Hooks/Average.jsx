import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("average calculate");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);
  const id = useRef(1); //리랜더링안되는 로컬변수
  const setId = () => {
    id.current += 1;
  };
  const printId = () => {
    console.log(id.current);
  };

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list] //함수 내부에서 상태 값에 의존할 때 필요
  );

  const onDoubleClick = (val) => {
    const nextList = list.filter((v, i) => v !== val);
    setList(nextList);
  };

  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);

  return (
    <>
      <div>
        <input ref={inputEl} value={number} onChange={onChange}></input>
        <button onClick={onInsert}>add</button>
        <ul>
          {list.map((val, i) => (
            <li
              onDoubleClick={() => {
                onDoubleClick(val);
              }}
              key={i}
            >
              {val}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <b>average: </b> {avg}
        <button onClick={printId}>printid</button>
        <button onClick={setId}>setId</button>
      </div>
    </>
  );
};

export default Average;
