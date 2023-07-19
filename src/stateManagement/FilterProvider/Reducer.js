//initial state

import { CITIES,BED_ROOMS,PER_RENT,LOADING, BATH_ROOMS, ROOM_SIZE, IS_AVAILABLE, PAGE_PAGI, LIMIT_PAGI } from "./ActionName"




export const initialFilterState = {
    cities : "",
    how_many_beedrooms : "",
    how_many_bathrooms : "",
    room_size : "",
    is_available : "",
    page : "",
    limit : 5,
    rent_per_month : [1000,2500],
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
        case BATH_ROOMS:
        return {
            ...state,
            how_many_bathrooms : actions.payload
        }
        case ROOM_SIZE:
        return {
            ...state,
            room_size : actions.payload
        }
        case IS_AVAILABLE:
        return {
            ...state,
            is_available : actions.payload
        }
        case PER_RENT:
        return {
            ...state,
            rent_per_month : actions.payload
        }
        case PAGE_PAGI:
        return {
            ...state,
            page : actions.payload
        }
        case LIMIT_PAGI:
        return {
            ...state,
            limit : actions.payload
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
