import { useReducer, useState } from "react";
import { fetchAPI } from '../api';

export const initializeTime = () => {
    const todaysTime = fetchAPI(new Date());
    return todaysTime;
}

export const updateTime = (state, action) => {
    if (action.type === "UPDATE_DATE") {
        const newDate = new Date(action.date);
        return fetchAPI(newDate);      // fetch times for the chosen date
    }
    return state; 
}

const useReservationTime = () => {
    const [availableTime, dispatch] = useReducer(updateTime, [], initializeTime);
    return [availableTime, dispatch];
}

export default useReservationTime;