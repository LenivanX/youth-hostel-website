import React from 'react'
import useTariff from '../../contexts/TariffContext';

function TariffTable() {
    const { tableData, filterLocation } = useTariff();
    return (
        <div>
            <table className='tarifftable'>
                <thead className='tarifftable-head'>
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
                    {
                        tableData?.filter((row) => {
                            if (filterLocation === '' || filterLocation === 'all') return true;
                            else if (row.locationName === filterLocation) return true;
                            else return false;
                        }).map((data) => (
                            <tr>
                                <td className='tarifftable-data'>{data.locationName}</td>
                                <td className='tarifftable-data'>{data.accomodationType}</td>
                                <td className='tarifftable-data'>{data.maxAccomodation}</td>
                                <td className='tarifftable-data'>{data.bookingCharge}</td>
                                <td className='tarifftable-data'>{data.cautionMoney}</td>
                                <td className='tarifftable-data'>{data.userCharge}</td>
                                <td className='tarifftable-data'>{data.totalAmount}</td>
                            </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TariffTable