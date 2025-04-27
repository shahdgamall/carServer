import { Router } from "express";
import { user } from "../types/type";
import { getUser, addnewUser, removeUser } from "../modules/user";
const userRouter = Router();

userRouter.get("/:id", getUser);
userRouter.post("/", addnewUser);
userRouter.delete("/:id", removeUser);

export default userRouter;
