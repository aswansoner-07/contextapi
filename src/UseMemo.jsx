import React, { useMemo, useState } from "react";
import useFetch from "./useFetch";

const UseMemo = () => {
  const [num, setNum] = useState(100);
  const {data}=useFetch('https://dummyjson.com/users')

  const total = useMemo(() => {
    return add(num);
  }, [num]);

  function add(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }

  return (
    <div>
        {JSON.stringify(data)}
      <h1>Total: {total}</h1>
      {/* <button onClick={() => setNum(num + 1)}>Increase Number</button> */}
    </div>
  );
};

export default UseMemo;
