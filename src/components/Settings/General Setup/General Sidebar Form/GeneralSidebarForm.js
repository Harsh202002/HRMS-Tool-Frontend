import React from 'react'
import "./GeneralSidebarForm.css"

const generalSidebarForm = ({ onClose }) => {
  return (
    <div className="generalsetup-r-sidebar-form">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Add Company</h2>
        <button className="generalsetup-close-sidebar-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <hr />
      <form className='generalsetup-rsidebar-form'>
        <div className="generalsetup-rsidebar-form-group">
          <label>Company Name</label>
          <input type='text' />
        </div>
        <div className="generalsetup-rsidebar-form-group" >
          <label>Company Code</label>
          <input type='text' />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>EIN/TRN/Tax ID</label>
          <input type='text' />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Zip Code</label>
          <input type="text" />
        </div>
        <div className="generalsetup-rsidebar-form-group-spcl">
          <label>Address 1</label>
          <textarea rows={3}></textarea>
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Telephone</label>
          <input type='text' />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Email</label>
          <input type='text' />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Skype ID</label>
          <input type='text' />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Website</label>
          <input type="text" />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Country</label>
          <input type="text" />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Time Zone</label>
          <input type="text" />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Currency</label>
          <input type="text" />
        </div>
        <div className="generalsetup-rsidebar-form-group">
          <label>Pay Type</label>
          <input type="text" />
        </div>
      </form>
      <hr/>
      <div className="generalsetup-rsidebar-form-actions">
          <button type="submit" className="generalsetup-rsidebar-save-button">Save</button>
          <button type="button" className="generalsetup-rsidebar-save-new-button">Save & New</button>
        </div>
    </div>
  )
}

export default generalSidebarForm
