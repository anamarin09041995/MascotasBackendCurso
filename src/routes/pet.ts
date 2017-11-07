import { Router } from 'express';
import { verifyAuth } from '../middlewares/auth';
import { insert, deletePet, update, all } from '../controllers/pets/index';


const pets: Router = Router();
pets.use(verifyAuth);

pets.get("/", all);
pets.post("/", insert);
pets.put("/:id", update);
pets.delete("/:id", deletePet);


export default pets;