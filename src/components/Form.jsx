import React, { useState } from 'react';


function Form({ onAddActivity }) {
    const [activity, setActivity] = useState('');
    const [isGoodWeather, setIsGoodWeather] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddActivity(activity, isGoodWeather);
        setActivity('');
        setIsGoodWeather(false);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Activity Form</h1>
            <input
                type="text"
                placeholder="Name of activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={isGoodWeather}
                    onChange={(e) => setIsGoodWeather(e.target.checked)}
                />
                Good Weather
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Form;
