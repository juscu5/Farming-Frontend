import * as ACTION from './action';
import * as API from './services';
import { toast } from 'react-toastify';

export const addForm = (newData) => (dispatch) => {
    API.addForm(newData)
        .then((response) => {
            dispatch(ACTION.addFormSuccess(
                toast.success("Success Adding Form", {
                    position: "bottom-right"
                })
            ));
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getTypes = () => (dispatch) => {
    API.getTypes()
        .then((response) => {
            dispatch(ACTION.getTypes(response.data));
        })
        .catch((error) => {
            dispatch(ACTION.fetchError(
                toast.error("Network Error!", {
                    position: "bottom-right"
                 }) 
            ));
        })
}

export const getClients = () => (dispatch) => {
    API.getClients()
        .then((response) => {
            dispatch(ACTION.getClients(response.data));
        })
        .catch((error) => {
            dispatch(ACTION.fetchError(
                toast.error("Network Error!", {
                    position: "bottom-right"
                 }) 
            ));
        })
}

export const getSites = () => (dispatch) => {
    API.getSites()
        .then((response) => {
            dispatch(ACTION.getSites(response.data));
        })
        .catch((error) => {
            dispatch(ACTION.fetchError(
                toast.error("Network Error!", {
                    position: "bottom-right"
                 }) 
            ));
        })
}