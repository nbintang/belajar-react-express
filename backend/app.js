import express from "express";
import cors from "cors";
import router from "./routes/UserRoute.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});