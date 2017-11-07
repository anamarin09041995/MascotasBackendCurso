import { souvenirService } from '../../services/souvenir-service';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function deleteSouvenir(req: Request, res: Response, next) {
    let id = req.params.id;
    souvenirService.delete(id)
        .then(result => resSuccess(res, true))
        .catch(err => resFail(res, 500, err))
}
