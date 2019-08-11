export const STORED_PROCEDURES = {
  GET: {
    SP_GET_ACCESSES: "call get_accesses()",
    SP_GET_ACCESSE_BY_ID: "call get_accese_by_id(?)",
  },
  INSERT: {
    SP_INSERT_ACCESSE: "call insert_accesse(?)",
  },
  UPDATE: {
    SP_UPDATE_ACCESSE: "call update_accesse(?, ?)",
  },
  DELETE: {
    SP_DELETE_ACCESSE: "call delete_accesse(?)",
  },
};
