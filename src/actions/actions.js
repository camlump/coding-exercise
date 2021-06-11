import {
    ADD_USER_INFO,
    CHOOSE_TIME_SLOT,
    UPDATE_USER_INFO,
    MODAL_TOGGLE, 

} from './actionTypes'


export const chooseTimeSlot = (userInput) => ({
    type: CHOOSE_TIME_SLOT , payload: {
        time: userInput.time,
        name: userInput.name,
        phone: userInput.phone,
        filled: userInput.filled,
    }
});

export const updateTimeSlot = (userData) => ({
    type: ADD_USER_INFO, payload: {
        user: userData
    },
    userData
});

export const editForm = (userInput) => ({
    type: UPDATE_USER_INFO, payload: {
        time: userInput.time,
        name: userInput.name,
        phone: userInput.phone,
        filled: userInput.filled,

    }
    
});

export const ToggleModal = () => ({
    type: MODAL_TOGGLE,
});