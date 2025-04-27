import { Router } from "express";
import { interest } from "../types/type";
import { addUserInterest, getAllInterests } from "../modules/interest";
const interestRouter = Router();

interestRouter.get('/', getAllInterests);
interestRouter.post('/:id', addUserInterest);

export default interestRouter;