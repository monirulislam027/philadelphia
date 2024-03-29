import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { Box } from '@mui/lab/node_modules/@mui/system';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaCalendarAlt } from 'react-icons/fa';

const BookingHeading = () => {
  const [value, setValue] = useState(Date.now());
  const [isMobileDatePicker, setIsMobileDatePicker] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const dateUp = () => {
    setValue((prev) => {
      const dateInstance = new Date(prev);
      return dateInstance.setMonth(dateInstance.getMonth() + 1);
    });
  };
  const dateDown = () => {
    setValue((prev) => {
      const dateInstance = new Date(prev);
      return dateInstance.setMonth(dateInstance.getMonth() - 1);
    });
  };

  return (
    <div className='flex gap-4 mg:gap-0 justify-between items-center text-center'>
      <div className='md:hidden'></div>
      <h2 className='text-2xl font-bold text-primary-black'>
        Upcoming Bookings
      </h2>
      <div className='flex gap-x-4 items-center'>
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className='hidden md:block border py-2 px-4 rounded-md'>
              <DesktopDatePicker
                inputFormat='MMMM yyy'
                value={value}
                onChange={handleChange}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      ref={inputRef}
                      {...inputProps}
                      className='w-28 outline-none cursor-default select-none'
                      readOnly
                    />
                    {InputProps?.endAdornment}
                  </Box>
                )}
              />
            </div>
            <div className=' md:hidden py-2 px-4 rounded-md overflow-hidden'>
              <MobileDatePicker
                inputFormat='MMMM dd'
                value={value}
                open={isMobileDatePicker}
                onChange={handleChange}
                onAccept={() => setIsMobileDatePicker(false)}
                onClose={() => setIsMobileDatePicker(false)}
                renderInput={() => (
                  <FaCalendarAlt onClick={() => setIsMobileDatePicker(true)} />
                )}
              />
            </div>
          </LocalizationProvider>
        </div>
        <div
          className='bg-gray-200 text-sm font-light p-3 rounded-md text-black  justify-center items-center hover:cursor-pointer hidden md:flex'
          onClick={dateUp}
        >
          <FaAngleUp />
        </div>
        <div
          className='bg-gray-200 text-sm font-light p-3 rounded-md text-black  hidden md:flex justify-center items-center hover:cursor-pointer'
          onClick={dateDown}
        >
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default BookingHeading;
