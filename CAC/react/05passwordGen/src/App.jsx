import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] =useState(false)
  const [charAllow, setCharAllow] =useState(false)
  const [pass, setpass] = useState("")

  const passRef = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) {
        str += "0123456789"
    }
    if (charAllow) {
        str += "!@#$%^&*_-+=~`"
    }
    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length)
        pass += str.charAt(char)
    }
    setpass(pass)

  }, [length, numAllow, charAllow, setpass])

  const copyPassToCliped = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(()=>{
    passwordGen()
  },[length, numAllow, charAllow, passwordGen])

  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-1 pb-4 my-8 text-orange-600 bg-gray-500">
            <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className="flex rounded-lg overflow-hidden mb-4">
                <input
                type="text"
                value={pass}
                className='outline-none w-full py-1 px-3 bg-white text-black'
                placeholder='Password'
                ref = {passRef}
                readOnly
                />
                <button onClick={copyPassToCliped} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer'>
                    Copy
                </button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={8}
                        max={50}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => {setLength(e.target.value)}}
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-1 pl-2">
                    <input
                    type="checkbox"
                    defaultChecked={numAllow}
                    id='numInp'
                    onChange={()=> {
                        setNumAllow((prev)=> !prev)
                    }}
                    />
                    <label>Numbers</label>
                </div>
                <div className="flex items-center gap-x-1 pl-2">
                    <input
                    type="checkbox"
                    defaultChecked={charAllow}
                    id='charInp'
                    onChange={()=> {
                        setCharAllow((prev)=> !prev)
                    }}
                    />
                    <label>Characters</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
