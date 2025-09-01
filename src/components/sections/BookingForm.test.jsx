import React from "react";
import { render, fireEvent, screen, renderHook} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
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

    test('Form Rendered Correctly with correct attributes', () => { 
        render(<BookingForm 
          availableTimes={availableTimes}
          dispatchTimes={dispatch}
        />);
        
        const dateField = screen.getByRole("date");
        expect(dateField).toBeInTheDocument();
        expect(dateField).toHaveAttribute("required","");

        const timeField = screen.getByRole("time");
        expect(timeField).toBeInTheDocument();
        expect(timeField).toHaveAttribute("required","");

        const noOfGuestField = screen.getByRole("guests");
        expect(noOfGuestField).toBeInTheDocument();
        expect(noOfGuestField).toHaveAttribute("required","");

        const occasionField = screen.getByRole("occasion");
        expect(occasionField).toBeInTheDocument();
        expect(occasionField).toHaveAttribute("required","");
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

    test("unit test for invalid states", () => {
        render(<BookingForm 
          availableTimes={availableTimes}
          dispatchTimes={dispatch}
        />);

        const buttOn = screen.getByRole("button", { name: "Make Your Reservation" });
        expect(buttOn).toBeDisabled();

        fireEvent.change(screen.getByRole("date"), {target: {value: ""}});
        fireEvent.blur(screen.getByRole("date"));
        expect(screen.getByText("Date is required.")).toBeInTheDocument();

        fireEvent.change(screen.getByRole("guests"), {target: {value: ""}});
        fireEvent.blur(screen.getByRole("guests"));
        expect(screen.getByText("Guests must be greater than or equal to 1.")).toBeInTheDocument();
    });

    test("unit test for valid states", async () => {
        const user = userEvent.setup()
        render(<BookingForm 
          availableTimes={availableTimes}
          dispatchTimes={dispatch}
        />);
        
        const date = screen.getByRole("date");
        await user.type(date, "2025-09-20");
        expect(date).toHaveValue("2025-09-20");

        const time = screen.getByRole("time");
        await user.selectOptions(time, "21:00");
        expect(time).toHaveValue("21:00");

        const guests = screen.getByRole("guests");
        await user.type(guests, "5");
        expect(guests).toHaveValue(5);

        const occasion = screen.getByRole("occasion");
        await user.selectOptions(occasion, "Anniversary");
        expect(occasion).toHaveValue("Anniversary");

        const buttOn = screen.getByRole("button", { name: "Make Your Reservation" });
        expect(buttOn).toBeEnabled(); 
        await user.click(buttOn);
        expect(screen.getByText("We are pleased to inform you that your booking is confirmed.")).toBeInTheDocument();
    });
});