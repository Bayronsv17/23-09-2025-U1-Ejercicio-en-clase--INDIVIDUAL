const express = require('express');

const taskRoutes = require("./routers/tasks.routers");

const app = express();
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})