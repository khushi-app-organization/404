import express from "express";

const app = express();

app.use((req, res) => {
    return res.status(404).send("404 Not Found <br/> Coming soon");
});

app.listen(2001, () => {
    console.log("Server running on http://localhost:2001");
});
