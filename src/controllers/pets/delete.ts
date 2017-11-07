import { petService } from '../../services/pet-service';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function deletePet(req: Request, res: Response, next) {
    let id = req.params.id;
    petService.delete(id)
        .then(result => resSuccess(res, true))
        .catch(err => resFail(res, 500, err))
}
