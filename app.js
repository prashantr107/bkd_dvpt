const express = require('express');
const app = express();


app.set('view engine', 'ejs')


app.use((req, res, next) =>{
    console.log('This is Middleware');
    const a=10
    const b=20
    console.log('Sum of a and b is:', a+b);

    
    return next()
})


app.get('/', (req, res) => {
    res.render('index')
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