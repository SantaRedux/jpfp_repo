import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';



// ****** DEFINE ACTIONS ******/

const types = {
    CREATE_STUDENT: 'CREATE_STUDENT',
    DELETE_STUDENT: 'DELETE_STUDENT',
    UPDATE_STUDENT: 'UPDATE_STUDENT',
    SET_STUDENT: 'SET_STUDENT'
}

const _createStudent = (student) => {
    return {
        type: types.CREATE_STUDENT,
        student
    };
};

const _updateStudent = (student) => {
    return {
        type: types.UPDATE_STUDENT,
        student
    };
};

const _deleteStudent = (student) => {
    return {
        type: types.DELETE_STUDENT,
        student
    };
};

const _setStudents = (students) => {
    return {
        type: types.SET_STUDENT,
        students
    };
};



//****** CONSTANTS AND THUNK ******/

export const createStudent = (student, history) => {
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/students', student);
        dispatch(_createStudent(created));
        history.push('/');
    };
};

export const updateStudent = (student, history) => {
    return async (dispatch) => {
        const { data: updated } = await axios.put(`/api/students/${student.id}`, student);
        dispatch(_updateStudent(updated));
        history.push('/');
    };
};

export const deleteStudent = (student, history) => {
    return async (dispatch) => {
        await axios.delete(`/api/students/${student.id}`);
        dispatch(_deleteStudent(student));
        history.push('/');
    };
};

export const fetchStudents = () => {
    return async (dispatch) => {
        const { data: students } = await axios.get('/api/students');
        dispatch(_setStudents(students));
    };
};

export const fetchStudent = () => {
    return async (dispatch) => {
        const { data: student } = await axios.get(`/api/students/${id}`);
        dispatch(_setStudent(student));
    };
};


//******* STUDENT REDUCER ********/

const studentReducer = (state = [], action) => {
    if (action.type === types.SET_STUDENT) {
        return action.students;
    }
    if (action.type === types.UPDATE_STUDENT) {
        return state.map((student) =>
            student.id === action.student.id ? action.student : student
        );
    }
    if (action.type === types.DELETE_STUDENT) {
        return state.filter((student) => student.id !== action.student.id * 1);
    }
    if (action.type === types.CREATE_STUDENT) {
        return [...state, action.student];
    }
    return state;
};


//******* COMBINE REDUCERS ********/

combineReducers({
    students: studentReducer
});

//******** CREATE STORE ********/

export default createStore(
    studentReducer,
    applyMiddleware(thunk, logger)
)