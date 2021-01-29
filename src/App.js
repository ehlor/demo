import React, { useEffect, useState } from 'react'
import Popup from './Popup'
import './App.css'

const colorList = ['#00A5E3', '#FF5768']

function App() {
    const [color, setColor] = useState(0)
    const [openPopup, setOpenPopup] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)

    const handleActivity = () => {
        setOpenPopup(true)
        setCurrentTime(Date.now())
    }

    useEffect(() => {
        setInterval(() => {
            setColor(prev => (prev + 1) % colorList.length)
        }, 10000)
        window.addEventListener('keydown', handleActivity)
        return () => window.removeEventListener('keydown', handleActivity)
    }, [])

    return (
        <div 
            className="App" 
            style={{
                backgroundColor: colorList[color]
            }}
            onMouseMove={handleActivity}
        >
            {openPopup && 
                <Popup 
                    setOpenPopup={setOpenPopup}
                    currentTime={currentTime}
                />
            }
        </div>
    )
}

export default App;
