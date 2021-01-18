// just reads the actions and spits out the updated state to the store.
// the global store is available for any component that that wats to connect to is using the {connect} feature of react-redux
import { NOTIF_SUCCESS, NOTIF_WARNING, NOTIF_FAIL } from "../constants";
import { store as NotifSender } from 'react-notifications-component';

const initialState = {
    notificationMessage: {
        title: '',
        message: ''
    }
}

const notifyUser = (title='', body='', type='default')=> {
    NotifSender.addNotification({
        title: title,
        message: body,
        type: type,
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 4000
        }
    });
}



// name the actions that will be taken
export const notifyClient = (state=initialState, action={}) => {
    console.log('REDUCER - initial/ predefined State:', initialState);
    console.log('REDUCER - action:', action);

    if (action.payload){

        const {title, message} = action.payload;
        // if we recive any actions that are related to notifying the clinet then we will "do something"
        switch(action.type){
            case NOTIF_SUCCESS:{ // I want update the desired value within my inital state
                notifyUser(title, message, 'success');
                return state = {
                    ...state, 
                    notificationMessage: {
                        title,
                        message
                    }
                };
            }
            case NOTIF_WARNING:{ // I want update the desired value within my inital state
                notifyUser(title, message, 'warning');
                return state = {
                    ...state, 
                    notificationMessage: {
                        title,
                        message
                    }
                };
            }
            case NOTIF_FAIL:{ // I want update the desired value within my inital state
                notifyUser(title, message, 'danger');
                return state = {
                    ...state, 
                    notificationMessage: {
                        title,
                        message
                    }
                };
            }
            default:
                return state;
        }
    }


}