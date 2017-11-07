import { config } from '../config/global';
import { MongoClient, Db } from 'mongodb';

export class DBConnection {

    db: Db;
    
    constructor(configDB:any, callback:()=>void = null) {

        const connection = configDB.host
            + ":" + configDB.port
            + "/" + configDB.database;

        MongoClient.connect(connection)
            .then(db => {
                this.db = db;
                db.collection("pets")
            })
            .catch(err => console.log(err))
    }

}

export const Con = new DBConnection(config.database, ()=>{});