import React, { useState, useEffect } from 'react'

function CurrentTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);

    }, []);

    return (
        <div style={{ fontSize: '24px', fontFamily: 'monospace' }}>
            현재 시간: {time.toLocaleTimeString()}
        </div>
    );
}

export default CurrentTime;