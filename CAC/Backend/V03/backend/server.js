import express from "express"
import cors from 'express'

const app = express()

app.use(cors())

// app.get('/',(req,res)=>{
//     res.send('server is ready')
// } )

//joxx
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title: 'A 3rd joke',
            content: 'This is a 3rd joke'
        },
        {
            id:4,
            title: 'A 4th joke',
            content: 'This is a 4th joke'
        },
        {
            id:5,
            title: 'A 5th joke',
            content: 'This is a 5th joke'
        },
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`serve at http://localhost:${port}`);

})
