
import React from 'react';

const Greetings = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const username = 'Juan';


  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


  const getGreeting = () => {
    if (hour >= 5 && hour < 12) {
      return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between">
        <div className="Greetings">
          <p className="text-3xl font-bold pr-4">
            {getGreeting()}, <span className="text-maroon">Welcome {username}!👋</span>
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold">
            {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} |{' '}
            {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}, {formattedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greetings;