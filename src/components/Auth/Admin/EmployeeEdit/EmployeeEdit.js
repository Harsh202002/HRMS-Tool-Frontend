import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EmployeeEdit() {
  const { employeeCode, adminId } = useParams(); // Retrieve employeeCode and adminId from URL parameters
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/${adminId}/employees`)
      .then((response) => {
        const selectedEmployee = response.data.find(
          (emp) => emp.employeeCode === employeeCode
        );
        setEmployee(selectedEmployee);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [employeeCode, adminId]);

  const handleUpdate = (event) => {
    event.preventDefault();

    const employeeDto = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      personalEmail: event.target.personalEmail.value,
      location: event.target.location.value,
      age: event.target.age.value,
      dateOfBirth: event.target.dateOfBirth.value || null,
      dateOfJoining: event.target.dateOfJoining.value || null,
      middleName: event.target.middleName.value || null,
      employmentSource: event.target.employmentSource.value || null,
      mobileNumber: event.target.mobileNumber.value || null,
      maritalStatus: event.target.maritalStatus.value || null,
      placeOfBirth: event.target.placeOfBirth.value || null,
      uniqueIdentificationDocument: event.target.uniqueIdentificationDocument.value || null,
      uniqueIdentificationCode: event.target.uniqueIdentificationCode.value || null,
      bloodGroup: event.target.bloodGroup.value || null,
      typeOfEmployment: event.target.typeOfEmployment.value || null,
      officialEmail: event.target.officialEmail.value || null,
      nationality: event.target.nationality.value || null,
      officePhone: event.target.officePhone.value || null,
      homePhone: event.target.homePhone.value || null,
      company: event.target.company.value || null,
      department: event.target.department.value || null,
      jobLevel: event.target.jobLevel.value || null,
      salutation: event.target.salutation.value || null,
      fatherName: event.target.fatherName.value || null,
    };

    axios
      .put(
        `http://localhost:8080/admin/${adminId}/employees/${employeeCode}`,
        employeeDto
      )
      .then((response) => {
        setAlertMessage("Employee updated successfully!");
        alert("Employee Updated Successfully");
        setTimeout(() => {
          setAlertMessage("");
          navigate(`/admin/dashboard/${adminId}`, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.error(error.response.data); // Log the error response data
        setAlertMessage("Error updating employee!");
      });
  };

  return (
    <div>
      <h1>Edit Employee</h1>

      <form onSubmit={handleUpdate}>
        <label>First Name:</label>
        <input type="text" name="firstName" defaultValue={employee.firstName} />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastName" defaultValue={employee.lastName} />
        <br />
        <label>Email:</label>
        <input type="Email" name="personalEmail" defaultValue={employee.personalEmail} />
        <br />
        <label>City:</label>
        <input type="text" name="location" defaultValue={employee.location} />
        <br />
        <label>Age:</label>
        <input type="text" name="age" defaultValue={employee.age} />
        <br />
        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" defaultValue={employee.dateOfBirth || ''} />
        <br />
        <label>Date of Joining:</label>
        <input type="date" name="dateOfJoining" defaultValue={employee.dateOfJoining || ''} />
        <br />
        <label>Middle Name:</label>
        <input type="text" name="middleName" defaultValue={employee.middleName || ''} />
        <br />
        <label>Employment Source:</label>
        <input type="text" name="employmentSource" defaultValue={employee.employmentSource || ''} />
        <br />
        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" defaultValue={employee.mobileNumber || ''} />
        <br />
        <label>Marital Status:</label>
        <input type="text" name="maritalStatus" defaultValue={employee.maritalStatus || ''} />
        <br />
        <label>Place of Birth:</label>
        <input type="text" name="placeOfBirth" defaultValue={employee.placeOfBirth || ''} />
        <br />
        <label>Unique Identification Document:</label>
        <input type="text" name="uniqueIdentificationDocument" defaultValue={employee.uniqueIdentificationDocument || ''} />
        <br />
        <label>Unique Identification Code:</label>
        <input type="text" name="uniqueIdentificationCode" defaultValue={employee.uniqueIdentificationCode || ''} />
        <br />
        <label>Blood Group:</label>
        <input type="text" name="bloodGroup" defaultValue={employee.bloodGroup || ''} />
        <br />
        <label>Type of Employment:</label>
        <input type="text" name="typeOfEmployment" defaultValue={employee.typeOfEmployment || ''} />
        <br />
        <label>Official Email:</label>
        <input type="email" name="officialEmail" defaultValue={employee.officialEmail || ''} />
        <br />
        <label>Nationality:</label>
        <input type="text" name="nationality" defaultValue={employee.nationality || ''} />
        <br />
        <label>Office Phone:</label>
        <input type="text" name="officePhone" defaultValue={employee.officePhone || ''} />
        <br />
        <label>Home Phone:</label>
        <input type="text" name="homePhone" defaultValue={employee.homePhone || ''} />
        <br />
        <label>Company:</label>
        <input type="text" name="company" defaultValue={employee.company || ''} />
        <br />
        <label>Department:</label>
        <input type="text" name="department" defaultValue={employee.department || ''} />
        <br />
        <label>Job Level:</label>
        <input type="text" name="jobLevel" defaultValue={employee.jobLevel || ''} />
        <br />
        <label>Salutation:</label>
        <input type="text" name="salutation" defaultValue={employee.salutation || ''} />
        <br />
        <label>Father's Name:</label>
        <input type="text" name="fatherName" defaultValue={employee.fatherName || ''} />
        <br />
        <button type="submit">Update</button>
        {alertMessage && <div style={{ color: "green" }}>{alertMessage}</div>}
      </form>
    </div>
  );
}

export default EmployeeEdit;