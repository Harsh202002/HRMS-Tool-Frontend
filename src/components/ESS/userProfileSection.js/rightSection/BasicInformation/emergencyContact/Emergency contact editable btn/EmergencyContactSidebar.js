// import React, { useState } from 'react';
// import '../Emergency contact editable btn/EmergencyContactSidebar.css';

// const EmergencyContactSidebar = ({ isOpen, onClose }) => {

//   // Add state for form fields
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     relationTo: '',
//     mobileNo: '',
//     altMobileNo: '',
//     emailId: '',
//     altEmailId: '',
//     country: '',
//     state: '',
//     address: ''
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Replace with actual submit logic
//   };

//   return (
//     <>
//       {/* Overlay that blurs and disables interaction with the background */}
//       <div className={`ec-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

//       {/* Sidebar content */}
//       <div className={`ec-sidebar ${isOpen ? 'open' : ''}`}>
//         <div className="ec-sidebar-header">
//           <h3>Add Emergency Contact</h3>
//           <button className="ec-close-button" onClick={onClose}>
//             <i className="fa fa-times"></i>
//           </button>
//         </div>
//         <div className="ec-sidebar-content">
//           <form onSubmit={handleSubmit}>
//             <div className="ec-form-group">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="ec-form-control"
//                 required
//               />
//             </div>
//             <div className="ec-form-group">
//               <label>Middle Name</label>
//               <input
//                 type="text"
//                 name="middleName"
//                 value={formData.middleName}
//                 onChange={handleChange}
//                 className="ec-form-control"
//               />
//             </div>
//             <div className="ec-form-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="ec-form-control"
//                 required
//               />
//             </div>
//             <div className="ec-form-group">
//               <label>Relation To</label>
//               <select
//                 name="relationTo"
//                 value={formData.relationTo}
//                 onChange={handleChange}
//                 className="ec-form-control"
//                 required
//               >
//                 <option value="">--Select--</option>
//                 <option value="father">Father</option>
//                 <option value="mother">Mother</option>
//                 <option value="spouse">Spouse</option>
//                 <option value="friend">Friend</option>
//               </select>
//             </div>
//             <div className="ec-form-group">
//               <label>Mobile No</label>
//               <input
//                 type="text"
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 className="ec-form-control"
//                 required
//               />
//             </div>
//             <div className="ec-form-group">
//               <label>Alt. Mobile No</label>
//               <input
//                 type="text"
//                 name="altMobileNo"
//                 value={formData.altMobileNo}
//                 onChange={handleChange}
//                 className="ec-form-control"
//               />
//             </div>
//             <div className="ec-form-group">
//               <label>Email Id</label>
//               <input
//                 type="email"
//                 name="emailId"
//                 value={formData.emailId}
//                 onChange={handleChange}
//                 className="ec-form-control"
//                 required
//               />
//             </div>
//             <div className="ec-form-group">
//               <label>Alt. Email Id</label>
//               <input
//                 type="email"
//                 name="altEmailId"
//                 value={formData.altEmailId}
//                 onChange={handleChange}
//                 className="ec-form-control"
//               />
//             </div>
//             <div className="ec-form-group">
//               <label>Country</label>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="ec-form-control"
//                 required
//               >
//                 <option value="">--Select--</option>
//                 <option value="USA">USA</option>
//                 <option value="India">India</option>
//               </select>
//             </div>
//             <div className="ec-form-group">
//               <label>State</label>
//               <select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className="ec-form-control"
//                 required
//               >
//                 <option value="">--Select--</option>
//                 <option value="California">California</option>
//                 <option value="Maharashtra">Maharashtra</option>
//               </select>
//             </div>
//             <div className="ec-form-group">
//               <label>Address</label>
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="ec-form-control"
//               />
//             </div>
//             <div className="ec-form-buttons">
//               <button type="submit" className="ec-btn ec-btn-save">
//                 Save
//               </button>
//               <button type="button" className="ec-btn ec-btn-save-new">
//                 Save & New
//               </button>
//               <button type="button" className="ec-btn ec-btn-reset">
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmergencyContactSidebar;




import React, { useState } from 'react';
import '../Emergency contact editable btn/EmergencyContactSidebar.css';

const EmergencyContactSidebar = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    relationTo: '',
    mobileNo: '',
    altMobileNo: '',
    emailId: '',
    altEmailId: '',
    country: '',
    state: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to parent component
    onClose(); // Close sidebar after submission
  };

  return (
    <>
      <div className={`ec-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`ec-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="ec-sidebar-header">
          <h3>Add Emergency Contact</h3>
          <button className="ec-close-button" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="ec-sidebar-content">
          <form onSubmit={handleSubmit}>
            <div className="ec-form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="ec-form-control"
                required
              />
            </div>
            <div className="ec-form-group">
               <label>Middle Name</label>
               <input
                 type="text"
                 name="middleName"
                value={formData.middleName}
                 onChange={handleChange}
                 className="ec-form-control"
               />
             </div>
             <div className="ec-form-group">
               <label>Last Name</label>
               <input
                 type="text"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleChange}
                 className="ec-form-control"
                 required
               />
             </div>
             <div className="ec-form-group">
               <label>Relation To</label>
               <select
                 name="relationTo"
                 value={formData.relationTo}
                 onChange={handleChange}
                 className="ec-form-control"
                required
               >
                 <option value="">--Select--</option>
                 <option value="father">Father</option>
                 <option value="mother">Mother</option>
                 <option value="spouse">Spouse</option>
                 <option value="friend">Friend</option>
               </select>
             </div>
             <div className="ec-form-group">
               <label>Mobile No</label>
               <input
                 type="text"
                 name="mobileNo"
                 value={formData.mobileNo}
                 onChange={handleChange}
                 className="ec-form-control"
                 required
               />
             </div>
             <div className="ec-form-group">
               <label>Alt. Mobile No</label>
               <input
                 type="text"
                 name="altMobileNo"
                 value={formData.altMobileNo}
                 onChange={handleChange}
                 className="ec-form-control"
               />
             </div>
             <div className="ec-form-group">
               <label>Email Id</label>
              <input
                 type="email"
                 name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="ec-form-control"
                required
              />
            </div>
            <div className="ec-form-group">
              <label>Alt. Email Id</label>
            <input
                type="email"
                name="altEmailId"
                value={formData.altEmailId}
                onChange={handleChange}
                className="ec-form-control"
              />
            </div>
            <div className="ec-form-group">
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="ec-form-control"
                required
              >
                <option value="">--Select--</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
              </select>
            </div>
            <div className="ec-form-group">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="ec-form-control"
                required
              >
                <option value="">--Select--</option>
                <option value="California">California</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>
            <div className="ec-form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="ec-form-control"
              />
            </div>
            {/* Other input fields... */}
            <div className="ec-form-buttons">
              <button type="submit" className="ec-btn ec-btn-save">Save</button>
              {/* Other buttons... */}

              <button type="button" className="ec-btn ec-btn-save-new">
                Save & New
               </button>
               <button type="button" className="ec-btn ec-btn-reset">
                 Reset
               </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmergencyContactSidebar;

