import React, { useEffect, useState } from 'react'
import Popup from './Popup'
import './App.css'

const colorList = ['#00A5E3', '#FF5768']

function App() {
    const [color, setColor] = useState(0)
    const [openPopup, setOpenPopup] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setColor(prev => (prev + 1) % colorList.length)
        }, 10000)
    }, [])

    const handleMouseMove = () => {
        setOpenPopup(true)
        setCurrentTime(Date.now())
    }

    return (
        <div 
            className="App" 
            style={{
                backgroundColor: colorList[color]
            }}
            onMouseMove={handleMouseMove}
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
