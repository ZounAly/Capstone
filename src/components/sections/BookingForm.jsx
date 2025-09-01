import React, { useCallback, useState, useEffect } from 'react'
import { submitAPI } from '../../api';

const BookingForm = (props) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: '',
    occasion: 'Birthday'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 🟢 Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'date') {
      props.dispatchTimes({ type: 'UPDATE_DATE', date: value });
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked :
              type === "number" ? +value : value
    }));
  }, [props.dispatchTimes]);

  // 🟢 Track blur events (to know if a field was touched)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // 🟢 Validation function
  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.date.trim()) {
      newErrors.date = "Date is required.";
    }
    if (!formData.time || !props.availableTimes.includes(formData.time)) {
      newErrors.time = "Please select a valid time.";
    }
    if (!formData.guests || formData.guests < 1 ) {
      newErrors.guests = "Guests must be greater than or equal to 1.";
    }
    if (!formData.occasion.trim()) {
      newErrors.occasion = "Occasion is required.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData, props.availableTimes]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  // 🟢 Handle submit
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true }); // mark all as touched

    if (!isFormValid) return; // prevent invalid submission

    console.log('Form submitted:', formData);
    setSubmitted(!!submitAPI(formData));

    setTimeout(() => setSubmitted(false), 3000);

    setFormData({
      date: '',
      time: '17:00',
      guests: '',
      occasion: 'Birthday'
    });
    setTouched({});
  }, [formData, isFormValid]);

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const today = getTodayDate();

  return (
    <section className='reservation-sec py-[clamp(50px,31.3158px+5.8553vw,100px)]' id="reservation-sec">
      <div className='container mx-auto'>
        <form onSubmit={handleSubmit} className='w-[90%] md:w-[70%] bg-primary rounded-xl shadow-md shadow-primary p-10 mx-auto'>
          
          {/* Date */}
          <div className='grid grid-cols-[20%_80%] items-center mb-3'>
            <label htmlFor="date" className="block mb-1 text-white leadText">Choose date</label>
            <input
                role="date"
                id="date"
                name="date"
                type="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded border-white text-white focus:border-primary2 outline-0 leadText"
                required
            />
            {touched.date && errors.date && <p className="text-red-500 col-start-2">{errors.date}</p>}
          </div>

          {/* Time */}
          <div className='grid grid-cols-[20%_80%] items-center mb-3'>
            <label htmlFor="time" className="block mb-1 text-white leadText">Select Time:</label>
            <select
                role="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded border-white text-white focus:border-primary2 outline-0 leadText"
                required
            >
              {props.availableTimes.map(time => (
                <option className='text-black' key={time} value={time}>{time}</option>
              ))}
            </select>
            {touched.time && errors.time && <p className="text-red-500 col-start-2">{errors.time}</p>}
          </div>

          {/* Guests */}
          <div className='grid grid-cols-[20%_80%] items-center mb-3'>
            <label htmlFor="guests" className="block mb-1 text-white leadText">Number of guests</label>
            <input
                role="guests"
                id="guests"
                name="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded border-white text-white focus:border-primary2 outline-0 leadText"
                required
                placeholder='1'
            />
            {touched.guests && errors.guests && <p className="text-red-500 col-start-2">{errors.guests}</p>}
          </div>

          {/* Occasion */}
          <div className='grid grid-cols-[20%_80%] items-center mb-3'>
            <label htmlFor="occasion" className="block mb-1 text-white leadText">Occasion:</label>
            <select
                role="occasion"
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded border-white text-white focus:border-primary2 outline-0 leadText"
                required
            >
              <option className='text-black'>Birthday</option>
              <option className='text-black'>Anniversary</option>
            </select>
            {touched.occasion && errors.occasion && <p className="text-red-500 col-start-2">{errors.occasion}</p>}
          </div>

          {/* Submit */}
          <div className='text-center mt-5'>
            <button 
              type="submit" 
              className="button leadText"
              disabled={!isFormValid}
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

export default BookingForm;
