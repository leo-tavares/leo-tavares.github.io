import React, { useEffect, useState } from 'react';

const Greetings = () => {
    const [greetings, setGreetings] = useState('Bem vindo!');
    useEffect(() => {
        const currentDate = new Date()
        const currentHour = currentDate.getHours();
        if (currentHour >= 6 && currentHour <= 12) {
            setGreetings("Bom dia!")
        } else if (currentHour >= 13 && currentHour <= 18) {
            setGreetings("Boa tarde!")
        } else if (currentHour >= 18 || currentHour < 6) {
            setGreetings("Boa noite!")
        }
    })
    return (
        <div>
            <h2>{greetings}</h2>
        </div>
    )
}

export default Greetings;