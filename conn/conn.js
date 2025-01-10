






const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://Aflah_Khan_Saljoqi:luqmaks1917d@cluster0.2vr9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected to DataBase");
      });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "Not Connected",
    });
  }
};
conn();




// const mongoose = require("mongoose");

// // Define the database connection function
// const conn = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(
//       "mongodb+srv://Aflah_Khan_Saljoqi:luqmaks1917d@cluster0.2vr9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log("Connected to Database");
//   } catch (error) {
//     console.error("Database connection error:", error.message);
//     // Avoid using res here as conn() is not part of a route handler
//   }

//   // Handle disconnection events
//   mongoose.connection.on("disconnected", () => {
//     console.log("MongoDB connection lost. Attempting to reconnect...");
//     conn(); // Retry the connection
//   });

//   mongoose.connection.on("error", (err) => {
//     console.error("MongoDB connection error:", err.message);
//   });
// };

// // Call the connection function
// conn();

// module.exports = conn;
