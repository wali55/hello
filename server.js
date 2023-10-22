/*
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>hello world</h1>');
        res.statusCode = 200;
        res.end();
    } else if (req.url === '/hello') {
        res.write('<h1>hello guest</h1>');
        res.statusCode = 200;
        res.end();
    } else {
        res.write('<h1>404 not found</h1>');
        res.statusCode = 400;
        res.end();
    }
});

server.listen(8000, () => {
    console.log('server is listening at port 8000');
});
*/

const express = require('express');

const app = express();
app.use(express.json());

const books = [
    {
        id: '1',
        name: 'Finance',
        price: 1100
    },
    {
        id: '2',
        name: 'JavaScript',
        price: 700
    },
    {
        id: '3',
        name: 'React',
        price: 600
    },
    {
        id: '4',
        name: 'React',
        price: 100
    },
    {
        id: '5',
        name: 'React',
        price: 300
    },
];

app.get('/books', (req, res) => {
    if (req.query.show === 'all') {
        return res.json(books);
    }

    if (req.query.price == '500') {
        const under500 = books.filter((book) => book.price < 500);
        return res.json(under500);
    }
    
    if (req.query.price == '1000') {
        const under1000 = books.filter((book) => book.price < 1000);
        return res.json(under1000);
    }

    return res.json(books);
});

app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);

    res.json(books);
});

app.listen(8000, () => {
    console.log('server is running on port 8000');
});