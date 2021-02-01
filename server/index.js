import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
const app=express();








app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL="mongodb://memories:memories123@cluster0-shard-00-00.kf2ph.mongodb.net:27017,cluster0-shard-00-01.kf2ph.mongodb.net:27017,cluster0-shard-00-02.kf2ph.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-zhwyjj-shard-0&authSource=admin&retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);


