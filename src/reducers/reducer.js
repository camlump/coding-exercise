import {
    ADD_USER_INFO,
    CHOOSE_TIME_SLOT,
    UPDATE_USER_INFO,
    MODAL_TOGGLE, 

} from '../actions/actionTypes'

//the reducer will keep track of all the actions brought in from actionTypes as well as use initial state 
//create the time slots that the users will be selecting.

export default AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case MODAL_TOGGLE:
            return {...state, open : !state.open}
        case CHOOSE_TIME_SLOT:
            return {...state, chosenTimeSlot: action.payload}
        case UPDATE_USER_INFO:
            return {...state, chosenTimeSlot: action.payload}
        case ADD_USER_INFO:
            return {...state, userData: action.payload.userData}
    }
}


const initialState = {
    userData: [
        {
        time: "9:00am-10:00am",
        name: '',
        phone: '',
        filled: false
        },

        {
            time: "10:00am-11:00am",
            name: '',
            phone: '',
            filled: false
            },
            {
                time: "11:00am-12:00pm",
                name: '',
                phone: '',
                filled: false
                },

                {
                    time: "12:00pm-1:00pm",
                    name: '',
                    phone: '',
                    filled: false
                    },

                    {
                        time: "1:00pm-2:00pm",
                        name: '',
                        phone: '',
                        filled: false
                        },

                        {
                            time: "2:00pm-3:00pm",
                            name: '',
                            phone: '',
                            filled: false
                            },

                            {
                                time: "3:00pm-4:00pm",
                                name: '',
                                phone: '',
                                filled: false
                                },


                            {
                                time: "4:00pm-5:00pm",
                                name: '',
                                phone: '',
                                filled: false
                                },
    ],

    open:false,
    chosenTimeSlot: {
        time: '',
        name: '',
        phone: '',
        filled: false
    }
}

