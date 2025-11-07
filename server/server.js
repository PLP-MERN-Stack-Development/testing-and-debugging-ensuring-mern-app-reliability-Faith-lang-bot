import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, MONGO_URI } from "./config.js";
import bugRoutes from "./routes/bugRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bugs", bugRoutes);
app.use(errorHandler);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
