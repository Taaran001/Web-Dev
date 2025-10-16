import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [time, setTime] = useState(new Date())
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const hourDeg = (hours % 12) * 30 + minutes * 0.5
    const minuteDeg = minutes * 6
    const secondDeg = seconds * 6

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const ampm = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours % 12 || 12

    return (
        <div className={`min-h-screen flex items-center justify-center py-8 px-4 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <button
                onClick={() => setIsDark(!isDark)}
                className={`absolute top-6 right-6 px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-all ${
                    isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
            >
                {isDark ? 'Light mode' : 'Dark mode'}
            </button>

            <div className="flex flex-col items-center max-w-full">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-8">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                        <circle
                            cx="100"
                            cy="100"
                            r="95"
                            fill="none"
                            stroke={isDark ? '#374151' : '#e5e7eb'}
                            strokeWidth="2"
                            />

                        {[...Array(12)].map((_,i) => {
                            const angle = (i * 30 - 90) * (Math.PI / 180);
                            const x1 = 100 + 85 * Math.cos(angle);
                            const y1 = 100 + 85 * Math.sin(angle);
                            const x2 = 100 + 75 * Math.cos(angle);
                            const y2 = 100 + 75 * Math.sin(angle);
                            return (
                                <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke={isDark ? '#4b5563' : '#9ca3af'}
                                strokeWidth="2"
                                />
                            );
                        })}

                        <line
                            x1="100"
                            y1="100"
                            x2="100"
                            y2="50"
                            stroke={isDark ? '#fff' : '#000'}
                            strokeWidth="3"
                            strokeLinecap="round"
                            transform={`rotate(${hourDeg} 100 100)`}
                            />

                        <line
                            x1="100"
                            y1="100"
                            x2="100"
                            y2="35"
                            stroke={isDark ? '#fff' : '#000'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            transform={`rotate(${minuteDeg} 100 100)`}
                            />

                        <line
                            x1="100"
                            y1="100"
                            x2="100"
                            y2="25"
                            stroke="#ef4444"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            transform={`rotate(${secondDeg} 100 100)`}
                            />

                        <circle
                            cx="100"
                            cy="100"
                            r="4"
                            fill="#ef4444"
                            />
                    </svg>
                </div>

                <div className="text-center max-w-full">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-light mb-2 tracking-tight">
                        {displayHours}:{minutes.toString().padStart(2, '0')} {ampm}
                    </div>
                    <div className={`text-sm uppercase tracking-wider flex items-center justify-center gap-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        <span>{days[time.getDay()]}, {months[time.getMonth()]}</span>
                        <span className={`rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium ${
                            isDark ? 'bg-gray-800' : 'bg-gray-200'
                        }`}>
                            {time.getDate()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
