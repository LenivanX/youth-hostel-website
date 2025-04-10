import React, { useState } from 'react'
import useTariff from '../../contexts/TariffContext';
import useApp from '../../contexts/AppContext';

function TariffTable() {
    const { tableData, filterLocation } = useTariff();
    const [isBooking, setIsBooking] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [locationId, setLocationId] = useState(0);
    const { isLoggedIn, loggedInUser } = useApp();

    const book = () => {
        const req = { locationId, userId: loggedInUser.userId, startDate, endDate }
        fetch('http://localhost:9001/user/booking', {
            method: "POST",
            body: JSON.stringify(req),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            if (!data) {
                alert('cannot book, dates already booked');
            } else {
                setIsBooking(false)
                console.log(req)
            }
        })

    }
    const booking = (data) => {
        console.log(data);
        setLocationId(data.id)
        setIsBooking(true)
    }
    const closePopup = () => {
        setIsBooking(false)
    }
    return (
        <div>
            {isBooking &&
                (
                    <div className='popup-overlay'>
                        <div className='popup-form'>
                            <div className='popup-heading'>
                                Choose start and end date
                            </div>
                            <div className='popup-input'>
                                <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                <button onClick={book}>Book</button>
                                <button onClick={closePopup}>X</button>
                            </div>
                        </div>
                    </div>
                )
            }
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
                            <tr key={data.id}>
                                <td className='tarifftable-data'>{data.locationName}</td>
                                <td className='tarifftable-data'>{data.accomodationType}</td>
                                <td className='tarifftable-data'>{data.maxAccomodation}</td>
                                <td className='tarifftable-data'>{data.bookingCharge}</td>
                                <td className='tarifftable-data'>{data.cautionMoney}</td>
                                <td className='tarifftable-data'>{data.userCharge}</td>
                                <td className='tarifftable-data'>{data.totalAmount}</td>
                                <td><button hidden={!isLoggedIn} onClick={() => booking(data)} className='booking-button'>Book</button></td>
                            </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TariffTable