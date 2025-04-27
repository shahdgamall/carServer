import { car } from "../types/type";
import { Request, Response } from "express";

let cars: car[] = [];
let carIdCounter = 1;
export function getAllCars(req:Request , res:Response ){
    res.status(200).json(cars);
}

export function addNewCar(req:Request, res:Response){
    const {brand, model, cllass} = req.body;
    if(brand!== undefined && model!== undefined && cllass!== undefined){
        const newCar: car ={
            brand: brand,
            model: model,
            cllass: cllass,
            id : carIdCounter++
        };

        cars.push(newCar);
        res.status(201).json("Created successfully");
    }
    else
        res.status(404).json({message : "Brand, Model and Class are required"});
};

export function getCar(req:Request, res:Response){
    const id = parseInt(req.params.id);
    
    if(id === undefined)
        res.status(400).json({message :"Invalid ID format"});
    else{
        const car = cars.find((b)=> b.id === id)
        if(car) res.status(200).json(car);
        else res.status(400).json({message:"car not found"});
    }
}


export function deleteCar(req:Request, res:Response){
    const id = parseInt(req.params.id);

    if(id === undefined)
        res.status(404).json({message :"Invalid ID format"});
    else{
        const carIndex = cars.findIndex((b)=> b.id === id);

        if(carIndex !== -1){
            const deletedCar = cars.splice(carIndex,1)[0];
            res.status(200).json({message: "car deleted successfully", car: deletedCar});
        }
        else res.status(404).json({message:"car not found"});
    }

}