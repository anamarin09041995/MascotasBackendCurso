import { souvenirService } from '../../services/souvenir-service';
import { Souvenir } from '../../services/common/souvenir';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function insert(req: Request, res: Response) {
    let body: Souvenir = req.body;
    souvenirService
        .insert(body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}