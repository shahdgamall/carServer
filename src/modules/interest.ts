import { interest } from "../types/type";
import { user } from "../types/type";
import { car } from "../types/type";
import { Request, Response } from "express";
let interests : interest[] =[];
let users: user[]=[];

export function addUserInterest(req: Request,res: Response){
    const userID = parseInt(req.body.userID);
    const carID =parseInt(req.body.carID)
    const user = users.find((b)=> b.id === userID);
    if(user){
        const newInterest : interest = {
            id: interests.length > 0 ? interests[interests.length - 1].id + 1 : 1,
            userId: userID,
            carId: carID
        }
        interests.push(newInterest);
        res.status(200).json({message:"Interest added"});
    }
    else
        res.status(404).json({message: "Invalid ID"});
}


export function getAllInterests(req:Request, res:Response){
    const userid = parseInt(req.params.id);

    if(userid === undefined)
        res.status(400).json({message:"invalide ID format"});

    const UserInterest = interests.filter((b)=> b.userId === userid);
    res.status(200).json(UserInterest);

}