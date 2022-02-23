import express from "express";
import { createConnection } from "typeorm";
import { UserRole } from "./user/enums/user-role.enum";

createConnection()
.then(async connection => {
    console.log("Connected to database");
})

const app = express();

export {
    app
}