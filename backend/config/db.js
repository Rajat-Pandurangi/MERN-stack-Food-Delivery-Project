import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://<username>:<password>@book-store.nyabj4a.mongodb.net/food-del')
    .then(()=> {
        console.log("DB connected");
    })
}

