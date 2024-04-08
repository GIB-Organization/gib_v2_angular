import { Routes } from '@angular/router';
export interface IRoutingData{
    animation: string,
    title: string
}

export interface ICustomRoutes extends Routes{
    data: IRoutingData
}