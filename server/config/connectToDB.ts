const mongoose = require('mongoose');

export const connectToDB = async(uri: string) => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error);
        process.exit(1); 
    }
}