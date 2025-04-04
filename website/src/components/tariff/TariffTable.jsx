import React from 'react'
import useTariff from '../../contexts/TariffContext';

function TariffTable() {
    const { tableData, filterLocation } = useTariff();
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
                    {
                        tableData?.filter((row) => {
                            if (filterLocation === '' || filterLocation === 'all') return true;
                            else if (row.locationName === filterLocation) return true;
                            else return false;
                        }).map((data) => (
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

export default TariffTable