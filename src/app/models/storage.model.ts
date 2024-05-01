import { StorageEnum } from "../core/enums/storage.enum";

export interface IStorageModel {
    getStorageElement(name:StorageEnum):any;
    setStorageElement(name:StorageEnum, value:any): any
}
