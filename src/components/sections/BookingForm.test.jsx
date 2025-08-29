import React from "react";
import { render, fireEvent, screen, renderHook } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTime, updateTime } from "../../hooks/useReservationTime";
import useReservationTime from '../../hooks/useReservationTime'
import { expect, vi } from "vitest";
import * as api from "../../api";

describe("Booking Form Unit Testing",()=>{
    let availableTimes;
    let dispatch;

    beforeEach(() => {
        const { result } = renderHook(() => useReservationTime());
        [availableTimes, dispatch] = result.current;
    });

    test('Form Rendered Correctly', () => { 
        render(<BookingForm 
          availableTimes={availableTimes}
          dispatchTimes={dispatch}
        />);
        
        const dateField = screen.getByRole("date");
        expect(dateField).toBeInTheDocument();

        const timeField = screen.getByRole("time");
        expect(timeField).toBeInTheDocument();

        const noOfGuestField = screen.getByRole("guests");
        expect(noOfGuestField).toBeInTheDocument();

        const occasionField = screen.getByRole("occasion");
        expect(occasionField).toBeInTheDocument();
    });

    test("initializeTimes() returns the expected values",()=>{
        const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        vi.spyOn(api, "fetchAPI").mockReturnValue(mockTimes);
        const times = initializeTime();

        expect(api.fetchAPI).toHaveBeenCalled(); //check if the function is called
        expect(Array.isArray(times)).toBe(true); //checks if times is array
        expect(times.length).toBeGreaterThan(0); //checks if its not empty
        expect(times.every(t => /^\d{2}:\d{2}$/.test(t))).toBe(true); //check format 00:00
        expect(times).toEqual(mockTimes); // confirms the function returns the expected value
    });

    test("test for the updateTimes() function to validate that it returns the same value that is provided in the state.", ()=> {
        const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        vi.spyOn(api, "fetchAPI").mockReturnValue(mockTimes);
        const action = { type: "UPDATE_DATE", date: "2025-08-28" };
        const prevState = ["17:00", "18:00"];
        const result = updateTime(prevState, action);
        expect(api.fetchAPI).toHaveBeenCalledWith(new Date("2025-08-28"));
        expect(result).toEqual(mockTimes);
    });
});