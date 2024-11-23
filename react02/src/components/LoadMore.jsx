import React from "react";
import { datas } from "../data";
import DarkMode from "./DarkMode";
const LoadMore = () => {
  const [list, setList] = React.useState(10);

  const load10Products = () => {
    setList(list + 10);
  };

  return (
    <div>
      <div className="flex">
        <button onClick={load10Products} id="btn">
          LoadMore
        </button>
        <DarkMode></DarkMode>
      </div>
      <div className="grid grid-cols-5">
        {datas.slice(0, list).map((data) => (
          <div key={data.id}>
            <h2>{data.name}</h2>
            <img src={data.image} alt="" className="w-[50px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadMore;
