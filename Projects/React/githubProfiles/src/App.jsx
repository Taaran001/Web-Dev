import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState([])
    const [error, setError] = useState('')

    const fetchUser = async (searchUsername) => {
        try {
            const response = await fetch(`https://api.github.com/users/${searchUsername}`)

            if (!response.ok) {
                if (response.status === 404) {
                    setError('No profile with this username')
                    setUser(null)
                }
            }
        } catch (error) {

        }
    }

    return (
        <>

        </>
    )
}

export default App
