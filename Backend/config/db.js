const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

const connectdb = async () => {
    try {
        await client.connect();
        db = client.db('trackwise');
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

const getdb = () => {
    if(!db) {
        throw new Error('Database is not connected');
    }
    return db;
}

module.exports = {connectdb, getdb};