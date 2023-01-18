import {ActionTypes} from '../constants/action-types';
export const getStudents = (students) =>{
    return{
        type: ActionTypes.GET_STUDENTS,
        payload: students,
    };
}
export const deleteStudent = (id) =>{
    return{
        type: ActionTypes.DELETE_STUDENT,
        payload: id,
    };
}
export const updateStudent = (student,id) =>{
    return{
        type: ActionTypes.UPDATE_STUDENT,
        payload: {
            student,
            id
        }
    };
}
export const create = (student) =>{
    return{
        type: ActionTypes.CREATE_STUDENT,
        payload: {
            student,
        }
    };
}