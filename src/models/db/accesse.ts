import { JsonProperty } from "@tsed/common";

export class Accesse {
  @JsonProperty()
  _id: string;
  @JsonProperty()
  name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this.name = name;
  }
}
