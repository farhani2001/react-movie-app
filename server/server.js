const expres = require('express');
const app = expres();
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:5174']
};

app.use(cors(corsOptions));


app.get('/api', (req, res) => {
    res.json({ fruits: ['apple', 'banana', 'orange'] });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});