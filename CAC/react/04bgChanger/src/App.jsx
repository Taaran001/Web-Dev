import { useState } from "react"

function App() {
  const [color, setColor] = useState("#242424")

  return (
    <>
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-xl">
                    <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "red"}}>Red</button>
                    <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "orange"}}>ora</button>
                    <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "yellow"}}>yel</button>
                    <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "green"}}>gre</button>
                    <button onClick={()=>setColor("cyan")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "cyan"}}>cya</button>
                    <button onClick={()=>setColor("indigo")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "indigo"}}>ind</button>
                    <button onClick={()=>setColor("blueviolet")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "blueviolet"}}>blu</button>
                    <button onClick={()=>setColor("magenta")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "magenta"}}>mag</button>
                    <button onClick={()=>setColor("white")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "white"}}>whi</button>
                    <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-xl text-transparent shadow-lg" style={{backgroundColor: "black"}}>bla</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
