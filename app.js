import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { env } from "./config/env.js";
import { appRouter } from "./routes/app.routes.js";
import { adminRouter } from "./routes/admin.routes.js";

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const staticFiles = path.join(__dirname, "public");


app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(staticFiles));

// Routes
app.use("/admin", adminRouter);
app.use("/", appRouter);

// Start server
app.listen(env.PORT, () => {
  console.log(`Server is running at PORT ${env.PORT}`);
});
