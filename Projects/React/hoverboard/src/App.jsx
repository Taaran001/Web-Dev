import { useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const COLORS = [randomColor]
const SQUARES = 500

function generateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function Square() {
    const [color, setColor] = useState('#1d1d1d')
    const [boxShadow, setBoxShadow] = useState('0 0 2px #000')

    const getRandomColor = () => {
        return COLORS[Math.floor(Math.random() * COLORS.length)]
    }
    const handleMouseOver = () => {
        const randomColor = getRandomColor()
        setColor(randomColor)
        setBoxShadow(`0 0 2px ${randomColor}, 0 0 10px {randomColor}`)
    }
    const handleMouseOut = () => {
        setColor('#1d1d1d')
        setBoxShadow('0 0 2px #000')
    }



    const randomColor = generateRandomRgbColor();
    console.log(randomColor);

    return (
        <div
            className='w-4 h-4 m-0.5 transition-all duration-[2000ms] ease-in-out hover:duration-0'
            style={{
                backgroundColor: color,
                boxShadow: boxShadow,
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >

        </div>
    )
}

function App() {
    return (
        <div className='flex items-center justify-center bg-gray-950 overflow-hidden m-0'>
            <div className='flex items-center justify-center flex-wrap max-w-[400px]'>
                {Array.from({ length: SQUARES }).map((_, index) => (
                    <Square key={index} />
                ))}
            </div>
        </div>
    )
}

export default App
