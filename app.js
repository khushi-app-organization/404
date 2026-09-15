import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static assets (logo, etc.) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Send the 404 page for any route
app.use((req, res) => {
    return res.status(404).sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(2001, () => {
    console.log("Server running on http://localhost:2001");
});
