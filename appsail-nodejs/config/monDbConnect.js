import { mongoose } from 'mongoose';

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://sivaranjitha9843:Siva%402002@clusterjeo.os1qyi2.mongodb.net/Jeometry?retryWrites=true&w=majority");
        console.log("Database Connected", connect.connection.host,connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}