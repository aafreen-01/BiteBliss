const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://bitebliss:bitebliss01@cluster0.1bt8ntx.mongodb.net/bitebliss?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected");

    const fetched_data = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();

    global.food_items = fetched_data;
    global.foodCategory = foodCategory;
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = mongoDB;
