import express from "express"

const app = express()

// app.get('/',(req,res)=>{
//     res.send('server is ready')
// } )

//joxx
app.get('/api/jox',(req,res)=>{
    const jox = [
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
            content: 'This is a 5th joke'
        },
        {
            id:5,
            title: 'A 5th joke',
            content: 'This is a 5th joke'
        },
    ]

    res.send(jox)
})

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`serve at http://localhost:${port}`);

})
