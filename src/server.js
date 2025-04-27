import express from "express";
import userRouter from "./routes/userRoutes";
import carRouter from "./routes/carRoutes";
import interestRouter from "./routes/interestRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/car", carRouter);
app.use("/interest", interestRouter);

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
