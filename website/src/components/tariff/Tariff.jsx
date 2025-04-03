import React, { useEffect, useState } from 'react'

function Tariff() {
  const [tableData, setTableData] = useState([
    {
      "id": 0,
      "locationName": "Location",
      "accomodationType": "Accomodation",
      "maxAccomodation": 0,
      "bookingCharge": 0.0,
      "cautionMoney": 0.0,
      "userCharge": 0.0,
      "totalAmount": 0.0
    }
  ]);
  useEffect(() => {
    fetch('http://localhost:9001/data/tariff').then(res => res.json()).then(obj => {
      setTableData(obj);
    })
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Accomodation</th>
            <th>Max accomodation</th>
            <th>Booking charge</th>
            <th>Caution money</th>
            <th>User charge</th>
            <th>Total amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr>
              <td>{data.locationName}</td>
              <td>{data.accomodationType}</td>
              <td>{data.maxAccomodation}</td>
              <td>{data.bookingCharge}</td>
              <td>{data.cautionMoney}</td>
              <td>{data.userCharge}</td>
              <td>{data.totalAmount}</td>
            </tr>))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Tariff