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
            fetchRepos(searchUsername)
        } catch (err) {
            setError('Problem fetching user')
            setUser(null)
            setRepos([])
        }
    }

    const fetchRepos = async (searchUsername) => {
        try {
            const response = await fetch(`https://api.github.com/users/${searchUsername}/repos?sort=created`)

            if (!response.ok) {
                throw new Error("Failed to fetch repos");
            }

            const reposData = await response.json()
            setRepos(reposData.slice(0, 10))
        } catch (err) {
            setError("Problem fetching repos")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault() // prevents default from behaviour ( prvent page to refres after submit)
        if (username.trim()) {
            fetchUser(username.trim())
        }
    }

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center p-6' >
                <form onSubmit={handleSubmit} className='w-full max-w-3xl mb-8'>
                    <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Search a Github User'
                        className='w-full px-4 py-4 rounded-xl text-white font-sans text-base border-none outline-none placeholder-gray-400'
                        style={{
                            backgroundColor: '#555',
                            boxShadow: '0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </form>

                <main className='w-full max-w-4xl'>
                    {error && (
                        <div className='rounded-3xl p-12 mx-6 text-center'
                            style={{
                                backgroundColor: '#666',
                                boxShadow: '0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <h1 className="text-white text-3xl">{error}</h1>
                        </div>
                    )}

                    {user && (
                        <div className="rounded-3xl p-12 mx-6 flex flex-col md:flex-row gap-8"
                            style={{
                                backgroundColor: '#666',
                                boxShadow: '0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <div className='flex-shrink-0'>
                                <img src={user.avatar_url}
                                    className="rounded-full"
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        border: '10px solid #333'
                                    }}
                                />
                            </div>
                            <div className='flex-1'>
                                    <h2 className='text-white text-3xl mb-2'>{user.name || user.login}</h2>
                                    {user.bio && <p className="text-white text-base mb-4">{user.bio}</p>}

                                    <ul className="flex list-none gap-8 mb-4">
                                        <li className='text-white'>
                                            {user.followers} <strong>Followers</strong>
                                        </li>
                                        <li className='text-white'>
                                            {user.following} <strong>Following</strong>
                                        </li>
                                        <li className='text-white'>
                                            {user.public_repos} <strong>Repos</strong>
                                        </li>
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {repos.map((repo) => (
                                            <a key={repo.id}
                                                href={repo.html_url}
                                                target='_blank'
                                                // rel="noopener noreferrer"
                                                className='inline-block px-3 py-2 text-sm text-white rounded hover:opacity-80 transition-opacity'
                                                style={{ backgroundColor: '#222', color: '#999'  }}
                                            >
                                                {repo.name}
                                            </a>
                                        ))}
                                    </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    )
}

export default App
