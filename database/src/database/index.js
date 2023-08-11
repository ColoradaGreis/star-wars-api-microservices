const mongoose = require("mongoose")
const { MONGO_URI }= require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI) //le pasamos la url del cluster donde está la DB con la que lo queremos conectar

const Character = conn.model("Character", require("./schemas/characterSchema"))

Character.find().then((res) => console.log(res))