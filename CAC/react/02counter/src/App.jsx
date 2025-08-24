import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0)
    // let counter = 0;

    const addValue = () => {
        console.log("Clicked", counter);
        console.log(counter);
                if (counter <= 19) {
            setCounter(counter +1)
        }
        else{
            // break;
            console.log("not allowed");
        }
        // counter=counter + 1
    }
    const removeValue = () => {
        console.log("Clicked", counter);
        console.log(counter);
        // counter+=1
        if (counter >= 1) {
            setCounter(counter - 1)
        }
        else{
            // break;
            console.log("not allowed");
        }
    }

    return (
        <>
            <h2>Hahahah</h2>
            <h2>Counter value: {counter}</h2>
            <button onClick={addValue}>Add value</button>
            <br />
            <button onClick={removeValue}>Remove value</button>
            <p>Footer: {counter}</p>
        </>
    )
}

export default App
