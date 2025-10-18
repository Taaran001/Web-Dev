import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
    const canvasRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [color, setColor] = useState('#000000')
    const [size, setSize] = useState(10)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
    }, [])

    const startDrawing = (e) => {
        setIsDrawing(true)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ctx.beginPath()
        ctx.moveTo(x, y)
    }

    const draw = (e) => {
        if (!isDrawing) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        ctx.lineTo(x, y)
        ctx.strokeStyle = color
        ctx.lineWidth = size
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()
    }

    const stopDrawing = () => {
        setIsDrawing(false)
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    const decSize = () => {
        setSize(prev => Math.min(50, prev - 5))
    }

    const incSize = () => {
        setSize(prev => Math.min(50, prev + 5))
    }

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 shadow-lg">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={decSize}
                            className="flex justify-center bg-gray-800 text-cyan-400 w-10 h-10 rounded-lg font-bold hover:bg-gray-700 transition-colors shadow-md"
                        >
                            -
                        </button>
                        <span className="text-white font-semibold min-w-[3rem] text-center">{size}</span>
                        <button
                            onClick={incSize}
                            className="flex justify-center bg-gray-800 text-cyan-400 w-10 h-10 rounded-lg font-bold hover:bg-gray-700 transition-colors shadow-md"
                        >
                            +
                        </button>
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-12 h-10 rounded-lg cursor-pointer border-2 border-gray-700 shadow-md"
                        />
                    </div>
                    <button
                        onClick={clearCanvas}
                        className="bg-gray-800 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-md"
                    >
                        Clear
                    </button>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-4">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="bg-gray-800 rounded-lg shadow-2xl cursor-crosshair w-full max-w-5xl"
                    style={{ height: '65vh', maxHeight: '650px' }}
                />
            </div>
        </div>
    );

}

export default App
