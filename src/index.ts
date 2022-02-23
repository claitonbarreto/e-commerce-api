import express from "express";
import { createConnection } from "typeorm";
import { router } from "./routes";
import { UserRole } from "./user/enums/user-role.enum";

createConnection()
.then(async connection => {
    console.log("Connected to database");
})
const app = express();

app.use(express.json())
app.use(router)

export {
    app
}