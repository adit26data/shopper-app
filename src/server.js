const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./user');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.post('/register', async (req, res) => {
    try {
        const { firstName, email, password } = req.body;
        const user = new User({ firstName, email, password });
        await user.save();
        console.log("Server Success")
        res.status(200).json({ message: "Success" })
    } catch (err) {
        console.error(err);
        res.status(500).send('Error registering new user.');
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: "Success in logging in" });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error logging in user.');
    }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000/'));