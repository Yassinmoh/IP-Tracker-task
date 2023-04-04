import './App.css';
import Map from './components/Map';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const [locationInfo, setLocationInfo] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const apiKey = 'at_fuFlI1b50jWiqQjXVaq0y3bwP57tJ'
    const handleInput = (e) => {
        console.log("value", e.target.value);
        setIpAddress(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://geo.ipify.org/api/v2/ip?apiKey=${apiKey}&ipAddress=${ipAddress}`);
            console.log("response.data", response?.data);
            setLocationInfo(response?.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <input type='search' value={ipAddress} onChange={handleInput} />
            <button type='submit' onClick={handleSearch}>Search</button>
            {locationInfo && <Map locationInfo={locationInfo}/>}
        </div>
    );
}

export default App;