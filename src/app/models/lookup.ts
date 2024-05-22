import { ELookupCategory } from "../core/enums/lookups.enum";

export interface ILookup {
  lookupId: number;
  referenceId: number;
  orderNo: number;
  nameAr: string;
  nameEn: string;
  mappingCode: string;
  categoryId: number;
  lookupCategory: ELookupCategory;
}