import { petService } from '../../services/pet-service';
import { Pet } from '../../services/common/pet';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function update(req: Request, res: Response, next) {
    let id = req.params.id;
    let body: Pet = req.body;

    petService.update(id, body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}