import { LocationState } from "../store/types";
//import { GeolocationActionTypes, LOCATION_COORDS } from "../actions/geolocationtypes";
//import { GeolocationActionTypes, locationCoordsAction } from "../actions/geolocationtypes";
import { locationCoordsAction } from "../actions/geolocationtypes";
import { createReducer } from "@reduxjs/toolkit";
import { GetPosition } from "../actions/geolocationhandlers";

const initialState: LocationState = {
    coords: { longitude: 0, latitude: 0 },
    loadingStatus: "initial",
    isLoaded: false
};

// export function geolocationReducer(
//     state = initialState,
//     action: GeolocationActionTypes)
// {
//     switch(action.type) 
//     {
//         case LOCATION_COORDS:
//             return state = action.func;
//         default:
//             return state;
//     }
// }

export const geolocationReducer = createReducer(
    initialState, {
        [locationCoordsAction.type]: (state, action) => state = action.payload //GetPosition
    });