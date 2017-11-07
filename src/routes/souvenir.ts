import { Router } from 'express';
import { verifyAuth } from '../middlewares/auth';
import { insert, deleteSouvenir, update, all } from '../controllers/souvenirs/index';


const souvenirs: Router = Router();
souvenirs.use(verifyAuth);

souvenirs.get("/", all);
souvenirs.post("/", insert);
souvenirs.put("/:id", update);
souvenirs.delete("/:id", deleteSouvenir);


export default souvenirs;

