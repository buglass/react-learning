//import { GeolocationActionTypes } from "./geolocationtypes"
import { LocationState } from "../store/types";
import { Dispatch, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

// export function getPositionAction(funcState: LocationState) : GeolocationActionTypes
// {
//     return {
//         type: 'LOCATION_COORDS',
//         func: funcState
//     };
// }

// export const GetPositionThunk = () => (dispatch: Dispatch) => {
//     setTimeout(() => {
//         dispatch(GetPosition);
//     }, 60000);
// };

export const GetPositionThunk = () : ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    dispatch(GetPosition);
}

export async function GetPosition()
{
    try {
        const currentLocation = await getCurrentPositionPromise();
        return {
            coords: {
                longitude: currentLocation.coords.longitude,
                latitude: currentLocation.coords.latitude
            },
            loadingStatus: "",
            isLoaded: true
        };
    } catch (e) {
        return {
            coords: {
                longitude: 0,
                latitude: 0
            },
            loadingStatus: e.message,
            isLoaded: false
        };
    }
}


const getCurrentPositionPromise = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};