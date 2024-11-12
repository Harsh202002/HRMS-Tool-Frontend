import React, { useState } from 'react';
import './Accolades&rewards.css'; // Import the new CSS file

const AccoladesAndRewards = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [accolades, setAccolades] = useState([
    { id: 1, rewardType: 'Monetary', accoladeName: 'Employee of the Month', status: 'Active' },
    { id: 2, rewardType: 'Non-monetary', accoladeName: 'Best Innovator', status: 'Inactive' },
    // Add more dummy data here
  ]);

  const [newAccolade, setNewAccolade] = useState({
    company: '',
    location: '',
    department: '',
    jobTitle: '',
    rewardType: '',
    subject: '',
    status: '',
    description: ''
  });

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const resetForm = () => {
    setNewAccolade({
      company: '',
      location: '',
      department: '',
      jobTitle: '',
      rewardType: '',
      subject: '',
      status: '',
      description: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAccolade({
      ...newAccolade,
      [name]: value
    });
  };

  const handleSaveAndNew = (e) => {
    e.preventDefault();
    
    // Generate a new ID for the new accolade
    const newId = accolades.length + 1;
    
    // Add the new accolade to the list
    setAccolades([
      ...accolades,
      { id: newId, ...newAccolade }
    ]);
    
    // Reset the form after saving
    resetForm();
  };

  return (
    <div className="accolades-and-rewards-main-container">
      <div className="accolades-and-rewards-header">
        <button className="back-button">←</button>
        <h1>Accolades and Rewards</h1>
        <button className="accolades-and-rewards-add-button" onClick={openForm}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <div className="accolades-and-rewards-table-container">
        <table className="accolades-and-rewards-table">
          <thead>
            <tr>
              <th>Action</th>
              <th>View</th>
              <th>Reward Type</th>
              <th>Accolades Name</th>
              <th>Description</th>
              <th>Benefits</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {accolades.map((item) => (
              <tr key={item.id}>
                <td><button className="view-button">View</button></td>
                <td>...</td>
                <td>{item.rewardType}</td>
                <td>{item.accoladeName}</td>
                <td>...</td>
                <td>...</td>
                <td>
                    <span className={`status-label ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isFormOpen && (
          <div className="accolades-and-rewards-form">
              <div className="accolades-and-rewards-form-header">
            <h2>Add Accolade</h2>
            <button className="accolades-and-rewards-form-close-button" onClick={closeForm}>X</button>
            <form onSubmit={handleSaveAndNew}>
              {/* Company */}
              <div className="accolades-and-rewards-form-group">
                <label>Company</label>
                <select name="company" value={newAccolade.company} onChange={handleInputChange}>
                  <option value="">--Select--</option>
                  {/* Add company options here */}
                </select>
              </div>

              {/* Location */}
              <div className="accolades-and-rewards-form-group">
                <label>Location</label>
                <select name="location" value={newAccolade.location} onChange={handleInputChange}>
                  <option value="">--Select--</option>
                  {/* Add location options here */}
                </select>
              </div>

              {/* Department */}
              <div className="accolades-and-rewards-form-group">
                <label>Department</label>
                <select name="department" value={newAccolade.department} onChange={handleInputChange}>
                  <option value="">--Select--</option>
                  {/* Add department options here */}
                </select>
              </div>

              {/* Job Title */}
              <div className="accolades-and-rewards-form-group">
                <label>Job Title</label>
                <select name="jobTitle" value={newAccolade.jobTitle} onChange={handleInputChange}>
                  <option value="">--Select--</option>
                  {/* Add job title options here */}
                </select>
              </div>

              {/* Type of Reward */}
              <div className="accolades-and-rewards-form-group">
                <label>Type of Reward</label>
                <select name="rewardType" value={newAccolade.rewardType} onChange={handleInputChange}>
                  <option value="">--Select--</option>
                  <option value="Monetary">Monetary</option>
                  <option value="Non-monetary">Non-monetary</option>
                </select>
              </div>

              {/* Subject */}
              <div className="accolades-and-rewards-form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={newAccolade.subject}
                  onChange={handleInputChange}
                  placeholder="Enter subject"
                />
              </div>

              {/* Status */}
              <div className="accolades-and-rewards-form-group">
                <label>Status</label>
                <select name="status" value={newAccolade.status} onChange={handleInputChange}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Upload Accolades */}
              <div className="accolades-and-rewards-form-group">
                <label>Upload Accolades</label>
                <input type="file" />
              </div>

              {/* Description */}
              <div className="accolades-and-rewards-form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={newAccolade.description}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                ></textarea>
              </div>

              {/* Buttons */}
             {/* Buttons */}
             <div className="accolades-and-rewards-form-buttons">
             <button className="accolades-and-rewards-submit" type="submit">Save</button>
             <button className="accolades-and-rewards-save" onClick={handleSaveAndNew}>Save & New</button>
             <button className="accolades-and-rewards-reset" type="button" onClick={resetForm}>Reset</button>
            </div>

            </form>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccoladesAndRewards;
