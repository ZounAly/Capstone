import React, { useCallback, useState } from 'react'
import { submitAPI } from '../../api';

const BookingForm = (props) => {
    const [formData, setFormData] = useState(
        {date:'',time:'',guests:'', occasion:'Birthday'}
    );

    const handleChange = useCallback((e) => {
        const {name, value, type, checked} = e.target;

        if (name === 'date') {
           props.dispatchTimes({ type: 'UPDATE_DATE', date: value });
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox"
            ? checked // handle checkboxes
            : type === "number"
                ? +value // convert number inputs to numbers
                : value // everything else stays as string
        }));
    }, []);
    
    const [submitted, setSubmitted] = useState(false); 

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(submitAPI(formData));
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
        setFormData({
            date: '',
            time: '17:00', // Keep your default time
            guests: '',
            occasion: 'Birthday'
        });
    },[formData]);

    const getTodayDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const dd = String(today.getDate()).padStart(2, '0');

        return `${yyyy}-${mm}-${dd}`;
    };
    
    const today = getTodayDate();
    return (
        <section className='reservation-sec py-[clamp(50px,31.3158px+5.8553vw,100px)]' id="reservation-sec">
            <div className='container mx-auto'>
                <form onSubmit={handleSubmit} className='w-[90%] md:w-[70%] bg-primary rounded-xl shadow-md shadow-primary p-10 mx-auto'>
                    <div className='grid grid-cols-[20%_80%] items-center mb-3'>
                        <label htmlFor="date" className="block mb-1 text-white leadText">
                        Choose date
                        </label>
                        <input
                        role='date'
                        id="date"
                        name="date"
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-3 border rounded border-white text-white focus:shadow-sm shadow-primary2 focus:border-primary2 outline-0 leadText"
                        required
                        />
                    </div>
                    <div className='grid grid-cols-[20%_80%] items-center mb-3'>
                        <label htmlFor="time" className="block mb-1 text-white leadText">Select Time:</label>
                        <select
                            role='time'
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full p-3 border rounded border-white text-white focus:shadow-sm shadow-primary2 focus:border-primary2 outline-0 leadText"
                            required
                        >
                            {props.availableTimes.map(time => (
                            <option className='text-black' key={time} value={time}>
                                {time}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className='grid grid-cols-[20%_80%] items-center mb-3'>
                        <label htmlFor="guests" className="block mb-1 text-white leadText">
                        Number of guests
                        </label>
                        <input
                        role='guests'
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full p-3 border rounded border-white text-white focus:shadow-sm shadow-primary2 focus:border-primary2 outline-0 leadText"
                        required
                        placeholder='1'
                        />
                    </div>
                    <div className='grid grid-cols-[20%_80%] items-center mb-3'>
                        <label htmlFor="occasion" className="block mb-1 text-white leadText">
                        Occasion:
                        </label>
                        <select
                        role='occasion'
                        id="occasion"
                        className="w-full p-3 border rounded border-white text-white focus:shadow-sm shadow-primary2 focus:border-primary2 outline-0 leadText"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        required
                        >
                            <option className='text-black'>Birthday</option>
                            <option className='text-black'>Anniversary</option>
                        </select>
                    </div>
                    <div className='text-center mt-5'>
                        <button 
                            type="submit" 
                            className="button leadText"
                            >
                            Make Your Reservation
                        </button>
                        {submitted && <p className='leadText p-2.5 bg-green-700 text-white mt-5'>We are pleased to inform you that your booking is confirmed.</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default BookingForm