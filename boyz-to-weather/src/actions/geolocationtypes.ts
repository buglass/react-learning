import { LocationState } from "../store/types";
import { createAction } from "@reduxjs/toolkit";

//export const LOCATION_COORDS = 'LOCATION_COORDS';
export const locationCoordsAction = createAction<LocationState>('LOCATION_COORDS');

// interface GeolocationAction {
//     type: typeof LOCATION_COORDS;
//     func: LocationState;
// };

//export type GeolocationActionTypes = GeolocationAction;