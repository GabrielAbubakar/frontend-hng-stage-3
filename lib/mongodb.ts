import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL as string)
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error connecting to the database');
    }
}