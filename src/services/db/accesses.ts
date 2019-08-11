import { Service } from "@tsed/di";
import { DatabaseService } from "./database";
import { STORED_PROCEDURES } from "../../types/stored_procedures";
import { Accesse } from "../../models/db/accesse";
import { StatusTransaction } from "../../models/db/status-transaction";
@Service()
export class AccessesService {
  constructor(private dbService: DatabaseService) {}

  async getAccesses() {
    try {
      let sqlQuery: string = STORED_PROCEDURES.GET.SP_GET_ACCESSES;
      const resultSet = await this.dbService.query(sqlQuery);
      let accesses: Accesse[] = resultSet;
      return accesses;
    } catch (err) {
      return err;
    }
  }

  async createAccesse(sqlData: Accesse) {
    try {
      let sqlQuery: string = STORED_PROCEDURES.INSERT.SP_INSERT_ACCESSE;
      let data = [sqlData.name];
      const resultSet = await this.dbService.query(sqlQuery, data);
      const status: StatusTransaction = new StatusTransaction(resultSet[0]);
      if (status.code === 1) {
        const accesse = resultSet[1];
        return accesse;
      } else {
        return status;
      }
    } catch (err) {
      return err;
    }
  }
}
