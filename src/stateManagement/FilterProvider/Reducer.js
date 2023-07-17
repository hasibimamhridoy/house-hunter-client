//initial state

import { CITIES,BED_ROOMS,PER_RENT,LOADING } from "./ActionName"




export const initialFilterState = {
    cities : "",
    how_many_beedrooms : "",
    rent_per_month : [],
}



export const filterReducer = (state,actions)=>{
    switch (actions.type) {
        case CITIES:
        return {
            ...state,
            cities : actions.payload
        }
        case BED_ROOMS:
        return {
            ...state,
            how_many_beedrooms : actions.payload
        }
        case PER_RENT:
        return {
            ...state,
            rent_per_month : actions.payload
        }
     
        case LOADING:
        return {
            ...state,
            loading : actions.payload
        }
    
        default:
        return state
    }
}
