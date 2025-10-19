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
                    setRepos([])
                    return;
                }
                throw new Error("Failed to fetch user");
            }

            const userData = await response.json()
            setUser(userData)
            setError('')
            fetchReops(searchUsername)
        } catch (err) {
            setError('Problem fetching user')
            setUser(null)
            setRepos([])
        }
    }

    const fetchReops = async (searchUsername) => {
        try {
            const response = await fetch(`https://api.github.com/users/${searchUsername}/repos?sort=created`)

            if (response.ok) {
                throw new Error("Failed to fetch reops");
            }

            const reposData = await response.json()
            setRepos(reposData.slice(0,10))
        } catch (err) {
            setError("Problem fetching repos")
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (username.trim()) {
            fetchUser(username.trim())
        }
    }

    return (
        <>

        </>
    )
}

export default App
