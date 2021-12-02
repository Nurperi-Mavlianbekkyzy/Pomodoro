import { CHECK, TIMES } from "../actionType/actionType";

export const CHANGE = "CHANGE";

export const change = (color) => {
   return {
    type: CHANGE,
    color,
   }
}

export const timesFunc = (all) => ({
    type: TIMES,
    payload:all,
})

export const Checking=(sec)=>({
    type: CHECK,
    payload: sec,
})

