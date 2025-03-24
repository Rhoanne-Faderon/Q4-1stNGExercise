const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/draw', (req, res) => {
    const sideLength = parseFloat(req.query.sideLength);

    if (isNaN(sideLength) || sideLength <= 0) {
        return res.render('draw', { error: 'Please enter a valid positive number.' });
    }

    res.render('draw', { sideLength });
});


app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});


app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
