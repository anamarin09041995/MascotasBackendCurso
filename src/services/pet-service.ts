import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Pet } from './common/pet';

class PetService {

    private get db(): Collection<Pet> {
        return this.con.db.collection("pets")
    }

    constructor(private con: DBConnection) { }

    insert(pet: Pet) {
        return this.db.insertOne(pet);
    }

    update(id: string, pet: Pet) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: pet });
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

export const petService = new PetService(Con);