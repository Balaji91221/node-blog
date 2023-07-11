const express = require('express');
const morgan = require('morgan');
const app = express();

const dbURI = "mongodb+srv://cluster0.nwuffx9.mongodb.net/";

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Listen for requests on port 3001
app.listen(3000);

app.use(morgan('dev'));
app.use(express.static('public'));




// Route for the home page
app.get('/', (req, res) => {
    const blogs = [
        {
            title: 'Yoshi finds eggs',
            snippet: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            title: 'Mario finds stars',
            snippet: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            title: 'How to defeat bowser',
            snippet: 'Lorem ipsum dolor sit amet consectetur'
        }
    ];
    res.render('index', { title: 'Home', blogs });
});



// Route for the about page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Route for creating a new blog (not recommended)
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
