require("env2")(".env");
import mongoose from "mongoose";

const dbUrl: any = process.env.DB_URL;

mongoose
    .connect(dbUrl)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log(err));

module.exports = mongoose.connection;
