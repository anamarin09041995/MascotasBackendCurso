import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Souvenir } from './common/souvenir';

class SouvenirService {

    private get db(): Collection<Souvenir> {
        return this.con.db.collection("souvenirs")
    }

    constructor(private con: DBConnection) { }

    insert(souvenir: Souvenir) {
        return this.db.insertOne(souvenir);
    }

    update(id: string, souvenir: Souvenir) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: souvenir });
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) })
    }

    all(skip: number = 0, limit: number = 0) {
        return this.db.find()
            .skip(skip)
            .limit(limit)
            .toArray();
    }
}

export const souvenirService = new SouvenirService(Con);