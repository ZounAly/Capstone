import React from 'react'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import BookingForm from '../components/sections/BookingForm'
import useReservationTime from '../hooks/useReservationTime'

const Reservations = () => {
  const [availableTimes, dispatch] = useReservationTime();
  return (
    <>
        <Header/>
        <BookingForm 
          availableTimes={availableTimes}
          dispatchTimes={dispatch}
        />
        <Footer/>
    </>
  )
}

export default Reservations