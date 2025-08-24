import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//     return(
//         <div>
//             <h1>Custom App</h1>
//         </div>
//     )
// }

const elem = (
    <a href="https://google.com" target='_blank'>Google</a>
)


const ReactElem = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Google.com'
)



createRoot(document.getElementById('root')).render(

    // ReactElem
    <App />)
