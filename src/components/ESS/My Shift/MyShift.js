import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  parseISO,
  getYear,
  setYear,
  setMonth,
} from 'date-fns';
import "./MyShift.css"

const Calendar = () => {
  // Initialize state with the current date to show the current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Array of month names for the dropdown
  const months = Array.from({ length: 12 }, (_, i) =>
    format(setMonth(new Date(), i), 'MMMM')
  );

  // Array of years from 2020 to 2030 for the dropdown
  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);

  // Function to generate events for the calendar
  const generateEvents = (month) => {
    const events = [];
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(monthStart);
    let day = monthStart;

    while (day <= monthEnd) {
      const dayOfWeek = day.getDay(); // 0: Sunday, 6: Saturday
      const shift = (dayOfWeek === 0 || dayOfWeek === 6) ? 'WO-00:00-00:00' : 'GEN-10:00-19:00';
      events.push({ date: format(day, 'yyyy-MM-dd'), shift });
      day = addDays(day, 1);
    }

    return events;
  };

  // Get events for the current month
  const events = generateEvents(currentMonth);

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy';

    return (
      <div className="calendar-header row flex-middle">
        <div className="calendar-col calendar-col-start">
          <div className="calendar-icon" onClick={prevMonth}>
            ❮
          </div>
        </div>
        <div className="calendar-col calendar-col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="calendar-col calendar-col-end" onClick={nextMonth}>
          <div className="calendar-icon">❯</div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = 'EEEE'; // Full day name
    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="calendar-col calendar-col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="calendar-days row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, dateFormat);
        const cloneDay = day;

        // Find event for the current day
        const event = events.find(event =>
          isSameDay(parseISO(event.date), cloneDay)
        );

        days.push(
          <div
            className={`calendar-col calendar-cell ${
              !isSameMonth(day, monthStart)
                ? 'calendar-disabled'
                : isSameDay(day, selectedDate)
                ? 'calendar-selected'
                : ''
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="calendar-number">{formattedDate}</span>
            {event ? (
              <div className="calendar-event">
                <span>{event.shift}</span>
              </div>
            ) : null}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="calendar-row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="calendar-body">{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleMonthChange = (event) => {
    const selectedMonth = months.indexOf(event.target.value);
    setCurrentMonth(setMonth(currentMonth, selectedMonth));
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    setCurrentMonth(setYear(currentMonth, selectedYear));
  };

  return (
    <div>
    <div className="rmyshiftlist-header">
    <div className="rmyshiftlist-heading">
        <button className="back-button">←</button>
        <h2>My Shift</h2>
    </div>
</div>
    <div className="calendar-container">
      <div className="calendar-dropdowns">
        <select value={format(currentMonth, 'MMMM')} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select value={getYear(currentMonth)} onChange={handleYearChange}>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
    </div>
  );
};

export default Calendar;
