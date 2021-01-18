// in this finle is there we define our actions
import { NOTIF_SUCCESS, NOTIF_WARNING, NOTIF_FAIL } from "../constants";


export const actionNotifSuccess = (givenNotifObj) => {
    console.log('ACTIONS- givenNotifObj:', givenNotifObj);
    return {
        type: NOTIF_SUCCESS, // the type of action.. stored as a constant for consistancy purposes
        payload: {...givenNotifObj} // sending whatever data is needed to go onto the reducer to update the associated store
    }
}

export const actionNotifWarn = (givenNotifObj) => {
    console.log('ACTIONS- givenNotifObj:', givenNotifObj);
    return {
        type: NOTIF_WARNING, // the type of action.. stored as a constant for consistancy purposes
        payload: {...givenNotifObj} // sending whatever data is needed to go onto the reducer to update the associated store
    }
}

export const actionNotifFail = (givenNotifObj) => {
    console.log('ACTIONS- givenNotifObj:', givenNotifObj);
    return {
        type: NOTIF_FAIL, // the type of action.. stored as a constant for consistancy purposes
        payload: {...givenNotifObj} // sending whatever data is needed to go onto the reducer to update the associated store
    }
}