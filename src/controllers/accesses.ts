import {
  Controller,
  Get,
  Post,
  BodyParams,
  Req,
  Res,
  Next,
  Request,
  Response,
} from "@tsed/common";
import { Accesse } from "../models/db/accesse";
import { AccessesService } from "../services/db/accesses";
import { HTTPStatusCodes } from "../types/http";
import { ResponseOkJson, ResponseErrorJson } from "../models/response";
import { StatusTransaction } from "../models/db/status-transaction";

@Controller("/accesses")
export class Accesses {
  constructor(private accessesService: AccessesService) {}

  @Get()
  async findAll(@Req() req, @Res() res, @Next() next) {
    try {
      const result = await this.accessesService.getAccesses();
      res
        .status(HTTPStatusCodes.OK)
        .json(ResponseOkJson(HTTPStatusCodes.OK, result, "OK"));
    } catch (err) {
      res
        .status(HTTPStatusCodes.INTERNAL_SERVER_ERROR)
        .json(ResponseErrorJson(HTTPStatusCodes.INTERNAL_SERVER_ERROR, {}));
    }
  }

  @Post()
  async create(
    @BodyParams() accesse: Accesse,
    @Request() require,
    @Response() res,
    @Next() next
  ) {
    try {
      const result: StatusTransaction = await this.accessesService.createAccesse(
        accesse
      );
      if (result instanceof StatusTransaction) {
        res
          .status(HTTPStatusCodes.CONFLICT)
          .json(ResponseOkJson(HTTPStatusCodes.CONFLICT, result, "CONFLICT"));
      } else {
        res
          .status(HTTPStatusCodes.OK)
          .json(ResponseOkJson(HTTPStatusCodes.OK, result, "OK"));
      }
    } catch (err) {
      res
        .status(HTTPStatusCodes.INTERNAL_SERVER_ERROR)
        .json(ResponseErrorJson(HTTPStatusCodes.INTERNAL_SERVER_ERROR, {}));
    }
  }
}
