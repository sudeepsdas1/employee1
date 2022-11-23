const mongoose = require('mongoose');

const connectDB = async() => {
        try {
            // mongodb connection string
            const con = await mongoose.connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,

            })