const app = require('express')



const PORT = process.env.PORT || 4444

app.get('/', (req, res) => {
    res.send('hello! this is sample application')
})


app.get('/hi', (req,res) => {
    res.send('hello' + req.query.name)
    
})



/*
app.listen(PORT, () => {
    console.log('Server started' + PORT)
})

*/

