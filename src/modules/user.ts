import {user} from "../types/type";
import {interest} from "../types/type"
import {Request, Response}  from "express";

let users: user[] =[];
let interests: interest[]=[];
let userindx = 1;

export function addnewUser(req : Request, res: Response){
    const name = req.body.name;
    const age = req.body.age;

    if(name !== undefined && age!== undefined){
        const newuser : user ={
            name: name,
            age: age,
            id: userindx++
        }
        users.push(newuser);
        res.status(200).json("added successfully");
    }
    else
        res.status(404).json({message : "name and age are Required!"});
}


export function getUser(req: Request, res:Response){
    const id = parseInt(req.params.id);
    const getuser = users.find((b)=> b.id === id);
    if(getuser)
        res.status(200).json(getuser);
    else
        res.status(404).json({message : "user not found"});
}


export function removeUser(req:Request, res:Response){
    const id = parseInt(req.params.id);
    const Uidx = users.findIndex((b)=> b.id === id);
    if(Uidx !== -1){
        const deleteduser = users.splice(Uidx,1)[0];
        // removing the users' interests
        interests = interests.filter(interest => interest.userId !== id);
        res.status(200).json({message: "user deleted successfully", user: deleteduser});

    }
    else
        res.status(404).json({message: "User not found!"});
}