import mongoose from "mongoose";
import {logger} from "./logger";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URL as string);
        // console.log(`MongoDB connected `);
        logger.info(`MongoDB connected to ${con.connection.host}`);
    } catch (error) {
        // console.error(`MongoDB connection Error: ${error}`);
        logger.error(`MongoDB connection Error: ${error}`);
    }
}

export { connectDB };