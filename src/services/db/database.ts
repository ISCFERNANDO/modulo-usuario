import * as mysql from "mysql";
import { DB } from "../../settings";

export class DatabaseService {
  private pool: any;
  constructor() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: DB.MYSQL.HOST,
      user: DB.MYSQL.USERNAME,
      password: DB.MYSQL.PASSWORD,
      port: DB.MYSQL.PORT,
      database: DB.MYSQL.DATABASE,
    });
  }

  async query(query: string, data?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pool.getConnection(async (error, connection) => {
        if (error) return reject(error);
        connection.query(query, data, (error, result) => {
          if (error) return reject(error);
          resolve(result[0]);
        });
      });
    });
  }
}
