import React, { useState } from "react";
import "./AddressSidebar.css";

const AddressSidebar = ({ isOpen, onClose }) => {
  // Add state for form fields
  const [formData, setFormData] = useState({
    addressType: '',
    address: '',
    city: '',
    telephone: '',
    zipCode: '',
    country: '',
    state: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submit logic
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`address-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="address-sidebar-header">
          <h3>Add Address Information</h3>
          <button className="address-close-button" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="address-sidebar-content">
          <form onSubmit={handleSubmit}>
            <div className="address-form-group">
              <label>Address Type</label>
              <input
                type="text"
                name="addressType"
                value={formData.addressType}
                onChange={handleChange}
                className="address-form-control"
                required
              />
            </div>
            <div className="address-form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="address-form-control"
                required
              />
            </div>
            <div className="address-form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="address-form-control"
                required
              />
            </div>
            <div className="address-form-group">
              <label>Telephone</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="address-form-control"
                required
              />
            </div>
            <div className="address-form-group">
              <label>Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="address-form-control"
                required
              />
            </div>
            <div className="address-form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="address-form-control"
                required
              />
            </div>
            <div className="address-form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="address-form-control"
                required
              />
            </div>
            <div className="address-form-buttons">
              <button type="submit" className="address-btn address-btn-save">
                Save
              </button>
              <button type="button" className="address-btn address-btn-reset" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressSidebar;
