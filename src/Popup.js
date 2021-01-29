import React, { useEffect, useState, useRef } from 'react'
import './Popup.css'

const seconds = 5

function Popup({ currentTime, setOpenPopup }) {
    const [time, setTime] = useState(seconds)
    const interval = useRef()

    useEffect(() => {
        clearInterval(interval.current)
        setTime(seconds)
        interval.current = setInterval(() => setTime(prev => prev - 1), 1000)
    }, [currentTime])

    useEffect(() => {
        if (time <= 0) {
            setOpenPopup(false)
            clearInterval(interval.current)
        }
    }, [time, setOpenPopup])

    return (
        <div className="Popup">
            {time}
        </div>
    )
}

export default Popup