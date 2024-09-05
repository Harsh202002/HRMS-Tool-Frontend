import React from 'react';
import './MyToDoList.css'; // Import the CSS file
import noDataImage from '../../../Assets/no-data-image.jpeg';

const MyToDoList = () => {
  return (
    <div className="todo-container">
      <div className="header">
        <h3>My To-Do List</h3>
      </div>
      <div className="divider-l"></div>
      <div className="no-data">
        <img src={noDataImage} alt="No Data Available" />
        <p>No Data Available!</p>
      </div>
    </div>
  );
};

export default MyToDoList;