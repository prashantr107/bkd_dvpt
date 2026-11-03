const express = require('express');
const app = express();


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})   