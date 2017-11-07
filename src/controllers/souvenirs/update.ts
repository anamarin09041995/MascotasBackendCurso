import { souvenirService } from '../../services/souvenir-service';
import { Souvenir } from '../../services/common/souvenir';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function update(req: Request, res: Response, next) {
    let id = req.params.id;
    let body: Souvenir = req.body;

    souvenirService.update(id, body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}