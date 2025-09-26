import mongoose from "mongoose";

export async function connect() {
  try {
   await mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("database connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongodb connection error please make sure mongodb is running" + err
      );
    });
  } catch (error) {
    console.log("Something is wrong ");
    console.log(error);
  }
}
