const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")
const morgan = require("morgan")

const app = express()
app.use(morgan("dev"))

app.use("/characters", createProxyMiddleware({
    target: "http://localhost:8001", //dónde va a estar escuchando la app
    changeOrigin: true, //indica que a partir de ahí se van a modificar los headers
}))
app.use("/films", createProxyMiddleware({
    target: "http://localhost:8002", //dónde va a estar escuchando la app
    changeOrigin: true, //indica que a partir de ahí se van a modificar los headers
}))
app.use("/planets", createProxyMiddleware({
    target: "http://localhost:8003", //dónde va a estar escuchando la app
    changeOrigin: true, //indica que a partir de ahí se van a modificar los headers
}))

app.listen(8000, () => {
    console.log("gateway on port 8000")
})