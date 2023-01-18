import { ActionTypes } from "../constants/action-types";

const initialState ={
    students: []
}
export const studentReducer = (state = initialState,{type,payload}) =>{
switch (type) {
    case ActionTypes.GET_STUDENTS:
        return {...state, students:payload};
    case ActionTypes.DELETE_STUDENT:
        return {...state,id:payload};
    case ActionTypes.CREATE_STUDENT:
        return {...state,student:payload};
    case ActionTypes.UPDATE_STUDENT:
        return {...state,id: payload } ;
    default:
        return state;
}
}