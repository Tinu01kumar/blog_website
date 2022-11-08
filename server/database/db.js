import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-un9w7j4-shard-00-00.ypeckea.mongodb.net:27017,ac-un9w7j4-shard-00-01.ypeckea.mongodb.net:27017,ac-un9w7j4-shard-00-02.ypeckea.mongodb.net:27017/?ssl=true&replicaSet=atlas-ur28nd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;