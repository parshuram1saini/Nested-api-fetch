import React, { useState } from "react";
import "./styletable.css";

function ApiData() {
  const [apidata, setApidata] = useState([]);
  const [apidata1, setApidata1] = useState([]);
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  async function getApiData() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=50");
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      setClick(true);
      setClick1(false);

      const data = await response.json();
      setApidata(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  async function getApiData1() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=50");
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      setClick1(true);
      setClick(false);
      const data = await response.json();
      setApidata1(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(apidata.results);
  return (
    <div>
      <button onClick={getApiData}>Click Me</button>
      <button onClick={getApiData1}>getapi1</button>
      <div className={click === false ? "hidden" : "visible"}>
        {apidata?.results?.map((item) => {
          return (
            <div
              key={item.id}
            >{`  ${item.name.title}  ${item.name.first}  ${item.name.last} `}</div>
          );
        })}
      </div>
      <div className={click1 === false ? "hidden" : "visible"}>
        {apidata1?.results?.map((item) => {
          return (
            <div
              key={item.id}
            >{`  ${item.name.title}   ${item.name.last} `}</div>
          );
        })}
      </div>
    </div>
  );
}

export default ApiData;
