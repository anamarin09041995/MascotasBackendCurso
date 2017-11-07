import { petService } from '../../services/pet-service';
import { Pet } from '../../services/common/pet';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function insert(req: Request, res: Response) {
    let body: Pet = req.body;
    petService
        .insert(body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}