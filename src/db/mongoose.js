const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({ path: './.env'})

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log('MongoDB Connected')
