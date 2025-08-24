import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./compo/card";

function App() {
    const [count, setCount] = useState(0)
    let myObj={
        name: "hello",
        age:  69
    }
    let Arr=[1,3,4,5]

    return (
        <>
            <h1 className='bg-green-400 text-black rounded-xl mb-4'>Hello</h1>

            <Card username="hahahah" />
            <Card username="lolololol" price="111"/>
            <Card username="xdxdxdxd" price="222"/>
        </>
    )
}

export default App
