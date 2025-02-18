const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const authRoutes=require('./routes/authRoutes');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

const dbURI = 'mongodb://127.0.0.1:27017/authorisation';
mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((err) => console.log(err));

app.get('/smoothies', (req, res) => {
    res.render('smoothies');
});
app.use(authRoutes);