import { TOGGLE_BRAND } from "./actionTypes"

export const toggleBrand =(brandName) => {
    return {
        type : TOGGLE_BRAND,
        payload : brandName,
    }
}