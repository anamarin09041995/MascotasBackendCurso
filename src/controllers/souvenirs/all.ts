import { souvenirService } from '../../services/souvenir-service';
import { Souvenir } from '../../services/common/souvenir';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export class SouvenirQuery {

    limit: number;
    skip: number;

    constructor(query: any) {
        this.limit = query.limit ? parseInt(query.limit) : 0;
        this.skip = query.skip ? parseInt(query.skip) : 0;
    }
}

export function all(req: Request, res: Response, next) {
    let query: SouvenirQuery =
        new SouvenirQuery(req.query);
    souvenirService.all(query.skip, query.limit)
        .then(result => resSuccess<Souvenir[]>(res, result))
        .catch(err => resFail(res, 500, err));
}