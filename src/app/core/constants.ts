export function createArray(n:number) {
    return [...Array(n+1).keys()]
}

export const CHILDREN_UNDER_16: number[]=createArray(16)
export const FIVE_YEARS_ACCIDENTS: number[]=createArray(20)
export const YEARS_HOLDING_LICENSE: number[]=createArray(50)
export const YES_NO: {id:boolean, name:string}[]=[{id: true, name: '✅'}, {id: false, name: '❌'}];
