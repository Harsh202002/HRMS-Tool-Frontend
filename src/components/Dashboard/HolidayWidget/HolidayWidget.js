import React, { useEffect, useState } from "react";
import "./HolidayWidget.css";
import holidayImage from "../../../Assets/holiday-image.png";
import holidayService from "../../../services/holidayService";

const HolidayWidget = () => {
  const [upcomingHoliday, setUpcomingHoliday] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await holidayService.getHolidays();
        if (response.success && response.holidays.length > 0) {
          const today = new Date();
          
          // Filter out past holidays
          const futureHolidays = response.holidays.filter(
            (holiday) => new Date(holiday.date) >= today
          );

          // Sort by date and get the next upcoming holiday
          futureHolidays.sort((a, b) => new Date(a.date) - new Date(b.date));

          if (futureHolidays.length > 0) {
            setUpcomingHoliday(futureHolidays[0]);  // Get the closest holiday
          }
        }
      } catch (error) {
        console.error("Error fetching holidays:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="holiday-widget-container">
      <div className="holiday-widget">
        <img src={holidayImage} alt="Holiday" className="holiday-image" />
        <div className="holiday-info">
          <h3>Upcoming Holiday</h3>
          {upcomingHoliday ? (
            <div className="holiday-box">
              <div className="holiday-box-1">
                <span className="holiday-date">
                  {new Date(upcomingHoliday.date).toLocaleDateString("en-GB")}
                </span>
              </div>
              <div className="holiday-box-2">
                <span className="holiday-name">{upcomingHoliday.name}</span>
              </div>
            </div>
          ) : (
            <p>No upcoming holidays</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HolidayWidget;
