import express from 'express'
import { Router } from 'express';
import { car } from '../types/type';
import { getAllCars, getCar,deleteCar, addNewCar } from "../modules/car.ts";
const carRouter = Router();

carRouter.get('/',getAllCars );
carRouter.post('/', addNewCar);
carRouter.delete('/:id', deleteCar);
carRouter.get('/:id', getCar);

export default carRouter;