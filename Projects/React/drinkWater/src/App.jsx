import { useState } from 'react';

function App() {
    const [numCups, setNumCups] = useState(0);
    const totalCups = 8;
    const totalLiters = 2;
    const cupML = 250;

    const handleCupClick = (index) => {
        if (index === numCups - 1) {
            setNumCups(numCups - 1);
        } else {
            setNumCups(index + 1);
        }
    };

    const remainingLiters = totalLiters - (numCups * cupML) / 1000;
    const percentage = (numCups / totalCups) * 100;

    return (
        <div className="min-w-screen min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white p-8">
            <h1 className="text-4xl font-light mb-6">Drink Water</h1>
            <h3 className="text-xl font-light mb-8">Goal: {totalLiters} Liters</h3>

            <div className="relative w-40 h-80 bg-white rounded-b-full border-4 border-blue-600 text-blue-600 flex flex-col items-center justify-center mb-8 overflow-hidden">
                {remainingLiters > 0 && (
                    <div className="text-center z-10">
                        <div className="text-3xl font-bold">{remainingLiters}L</div>
                        <div className="text-sm">Remained</div>
                    </div>
                )}

                {percentage > 0 && (
                    <>
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-300 ease-in-out"
                            style={{ height: `${percentage}%` }}
                        ></div>
                        <div
                            className="absolute text-white z-10 text-center"
                            style={{
                                bottom: `${percentage / 2}%`,
                                transform: 'translateY(50%)'
                            }}
                        >
                            <div className="text-2xl font-bold">{percentage}%</div>
                        </div>
                    </>
                )}
            </div>

            <p className="text-lg mb-4">Select how many glasses of water that you have drank</p>

            <div className="grid grid-cols-4 gap-4">
                {[...Array(totalCups)].map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleCupClick(index)}
                        className={`w-16 h-20 border-4 border-blue-600 rounded-b-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${index < numCups ? 'bg-blue-500 text-white' : 'bg-white text-blue-600'
                            }`}
                    >
                        <div className="text-sm font-bold">{cupML}</div>
                        <div className="text-xs">ml</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
