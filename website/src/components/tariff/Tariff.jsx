import React, { useEffect, useState } from 'react'
import { TariffContext, TariffProvider } from '../../contexts/TariffContext';
import TariffTable from './TariffTable';
import TariffFilter from './TariffFilter';

function Tariff() {
  const [tableData, setTableData] = useState();
  const [filterLocation, setFilterLocation] = useState('');
  useEffect(() => {
    fetch('http://localhost:9001/data/tariff').then(res => res.json()).then(obj => {
      setTableData(obj);
    })
  });
  const changeFilterLocation = (event) => {
    setFilterLocation(event.target.value)
  }
  return (
    <TariffProvider value={{ tableData, filterLocation, changeFilterLocation }}>
      <TariffFilter />
      <TariffTable />
    </TariffProvider>
  )
}

export default Tariff