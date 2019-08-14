import * as mysql from "mysql";
import { DB } from "../../settings";

export class DatabaseService {
  private connection: any;
  constructor() {
    this.connection = mysql.createConnection({
      connectionLimit: 10,
      host: DB.MYSQL.HOST,
      user: DB.MYSQL.USERNAME,
      password: DB.MYSQL.PASSWORD,
      port: DB.MYSQL.PORT,
      database: DB.MYSQL.DATABASE,
    });
  }

  async query(query: string, data?: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.connection.query(query, data, (err, result) => {
        if (err) {
          reject(err);
        }
        this.connection.end();
        resolve(result[0]);
      });
    });
  }
}
