import { petService } from '../../services/pet-service';
import { Pet } from '../../services/common/pet';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export class PetQuery {

    limit: number;
    skip: number;

    constructor(query: any) {
        this.limit = query.limit ? parseInt(query.limit) : 0;
        this.skip = query.skip ? parseInt(query.skip) : 0;
    }
}

export function all(req: Request, res: Response, next) {
    let query: PetQuery =
        new PetQuery(req.query);
    petService.all(query.skip, query.limit)
        .then(result => resSuccess<Pet[]>(res, result))
        .catch(err => resFail(res, 500, err));
}