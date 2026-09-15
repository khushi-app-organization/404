import express from "express";

const app = express;

app.use("*", (req, res) => {
   return res.status(404);
});

app.listen(2000);
