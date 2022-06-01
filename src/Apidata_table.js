import React, { useState } from "react";
import "./styletable.css";

function ApiDataTable() {
  const [datatable, setDatatable] = useState([]);

  async function getApiTable() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=50");
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();

      //   return data;
      setDatatable(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <button onClick={getApiTable}>Api data</button>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Postcode</th>
            <th>Street Number</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {datatable?.results?.map((item) => {
            return (
              <tr>
                <td>{item.location.city}</td>
                <td>{item.location.state}</td>
                <td>{item.location.country}</td>
                <td>{item.location.postcode}</td>
                <td>{item.location.street.number}</td>
                <td>{item.location.coordinates.latitude}</td>
                <td>{item.location.coordinates.longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ApiDataTable;
