import { ELookupCategory } from "../../core/enums/lookups.enum";
import { ILookup } from "../../models/lookup";

export type ILookupStore = {
  [key in ELookupCategory]: ILookup[];
};