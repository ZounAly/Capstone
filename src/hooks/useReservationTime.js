import { useReducer, useState } from "react";

export const initializeTime = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export const updateTime = (state, action) => {
    const {date} = action;
    return initializeTime();
}

const useReservationTime = () => {
    const [availableTime, dispatch] = useReducer(updateTime, [], initializeTime);
    return [availableTime, dispatch];
}

export default useReservationTime;