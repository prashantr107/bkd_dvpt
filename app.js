const express = require('express');
const morgan = require('morgan')
const app = express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.set('view engine', 'ejs')





app.get('/', (req, res, next) => {
    const a = 10;
    const b = 5;

    console.log('Sum:', a + b);
    next();

 }, (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})


app.get('/register', (req, res) => {
    res.render("register")      
})

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body 

    userModel.create({ 
        username: username, 
        email: email, 
        password: password 
    })

    res.send('User registered successfully')
})

app.post('/get-form-data', (req, res) => {
    console.log(req.body)
    res.send('Form data received')
})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
})   