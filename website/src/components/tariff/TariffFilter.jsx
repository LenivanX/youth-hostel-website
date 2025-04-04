import React from 'react'
import useTariff from '../../contexts/TariffContext'

function TariffFilter() {
    const { changeFilterLocation } = useTariff();
    return (
        <div>
            <select defaultValue='all' onChange={changeFilterLocation}>
                <option value='all'>All locations</option>
                <option value='ALIPURDUAR_Bhutanghat Youth Hostel'>ALIPURDUAR_Bhutanghat Youth Hostel</option>
                <option value='ALIPURDUAR_Jaldapara Youth Hostel'>ALIPURDUAR_Jaldapara Youth Hostel</option>
            </select>
        </div>
    )
}

export default TariffFilter