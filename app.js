import express from "express";
import path from "path"
import { env } from "./config/env.js";
import router from "./routes/routes.js";


const app = express();

const staticFiles = path.join(import.meta.dirname , "public");
app.set("view engine" , "ejs");
app.use(express.static(staticFiles));
app.use("/", router);


app.listen(env.PORT, () => {
    console.log(`Server is runing at PORT ${env.PORT}`);
})