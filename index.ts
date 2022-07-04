import app from "./app";

const port: Number = app.get("port");
app.listen(() => {
    console.log(`app is running on https://localhost.${port}`)
})
