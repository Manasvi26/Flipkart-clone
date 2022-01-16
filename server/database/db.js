import mongoose from "mongoose";

//making a connection with mongoose
const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.mdmow.mongodb.net:27017,ecommerceweb-shard-00-01.mdmow.mongodb.net:27017,ecommerceweb-shard-00-02.mdmow.mongodb.net:27017/FLIPKART-CLONE?ssl=true&replicaSet=atlas-z3x0xh-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false, //this is throwing error
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

//calling the connection function
export default Connection;
