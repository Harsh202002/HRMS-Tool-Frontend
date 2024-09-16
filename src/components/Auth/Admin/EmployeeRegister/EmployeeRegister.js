import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 
function EmployeeRegister() {
  const { adminId } = useParams(); // Get adminId from URL parameter
  const [employeeCode, setEmployeeCode] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
 
  // New state variables (optional)
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [employmentSource, setEmploymentSource] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [uniqueIdentificationDocument, setUniqueIdentificationDocument] =
    useState("");
  const [uniqueIdentificationCode, setUniqueIdentificationCode] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [typeOfEmployment, setTypeOfEmployment] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [officePhone, setOfficePhone] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [salutation, setSalutation] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [emergencyFirstName, setEmergencyFirstName] = useState("");
  const [emergencyLastName, setEmergencyLastName] = useState("");
  const [emergencyAddress, setEmergencyAddress] = useState("");
  const [emergencyMobileNumber, setEmergencyMobileNumber] = useState("");
  const [emergencyAlternateMobileNumber, setEmergencyAlternateMobileNumber] =
    useState("");
  const [emergencyCountryName, setEmergencyCountryName] = useState("");
  const [emergencyEmailId, setEmergencyEmailId] = useState("");
  const [emergencyAlternateEmailId, setEmergencyAlternateEmailId] =
    useState("");
  const [addressType, setAddressType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [telephone, setTelephone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
 
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
 
    if (
      !employeeCode ||
      !password ||
      !firstName ||
      !lastName ||
      !personalEmail ||
      !location ||
      !age
    ) {
      setError("All fields are required");
      return;
    }
 
    try {
      const response = await axios.post(
        `http://localhost:8080/employee/register/${adminId}`, // Update URL to include adminId
        {
          employeeCode,
          password,
          firstName,
          lastName,
          personalEmail,
          location,
          age,
          dateOfBirth: dateOfBirth || null,
          dateOfJoining: dateOfJoining || null,
          middleName: middleName || null,
          employmentSource: employmentSource || null,
          mobileNumber: mobileNumber || null,
          maritalStatus: maritalStatus || null,
          placeOfBirth: placeOfBirth || null,
          uniqueIdentificationDocument: uniqueIdentificationDocument || null,
          uniqueIdentificationCode: uniqueIdentificationCode || null,
          bloodGroup: bloodGroup || null,
          typeOfEmployment: typeOfEmployment || null,
          officialEmail: officialEmail || null,
          nationality: nationality || null,
          officePhone: officePhone || null,
          homePhone: homePhone || null,
          company: company || null,
          department: department || null,
          jobLevel: jobLevel || null,
          salutation: salutation || null,
          fatherName: fatherName || null,
          emergencyFirstName: emergencyFirstName || null,
          emergencyLastName: emergencyLastName || null,
          emergencyAddress: emergencyAddress || null,
          emergencyMobileNumber: emergencyMobileNumber || null,
          emergencyAlternateMobileNumber:
            emergencyAlternateMobileNumber || null,
          emergencyCountryName: emergencyCountryName || null,
          emergencyEmailId: emergencyEmailId || null,
          emergencyAlternateEmailId: emergencyAlternateEmailId || null,
          addressType: addressType || null,
          address: address || null,
          city: city || null,
          telephone: telephone || null,
          zipCode: zipCode || null,
          country: country || null,
          state: state || null,
        }
      );
      console.log("Employee registered:", response.data);
      setError(null);
      alert("Employee registerd Successfully !!");
      setSuccess("Employee registered successfully!");
    } catch (error) {
      setError(error.response.data); // Display the error message from the backend
    }
  };
 
  return (
    <div>
      <h2>Register Employee</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={employeeCode}
          onChange={(e) => setEmployeeCode(e.target.value)}
          placeholder="Employee Code"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          value={personalEmail}
          onChange={(e) => setPersonalEmail(e.target.value)}
          placeholder="Personal Email"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
          required
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
 
        {/* Optional fields */}
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          placeholder="Date of Birth"
        />
        <input
          type="date"
          value={dateOfJoining}
          onChange={(e) => setDateOfJoining(e.target.value)}
          placeholder="Date of Joining"
        />
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          placeholder="Middle Name"
        />
        <input
          type="text"
          value={employmentSource}
          onChange={(e) => setEmploymentSource(e.target.value)}
          placeholder="Employment Source"
        />
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Mobile Number"
        />
        <input
          type="text"
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
          placeholder="Marital Status"
        />
        <input
          type="text"
          value={placeOfBirth}
          onChange={(e) => setPlaceOfBirth(e.target.value)}
          placeholder="Place of Birth"
        />
        <input
          type="text"
          value={uniqueIdentificationDocument}
          onChange={(e) => setUniqueIdentificationDocument(e.target.value)}
          placeholder="Unique Identification Document"
        />
        <input
          type="text"
          value={uniqueIdentificationCode}
          onChange={(e) => setUniqueIdentificationCode(e.target.value)}
          placeholder="Unique Identification Code"
        />
        <input
          type="text"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          placeholder="Blood Group"
        />
        <input
          type="text"
          value={typeOfEmployment}
          onChange={(e) => setTypeOfEmployment(e.target.value)}
          placeholder="Type of Employment"
        />
        <input
          type="email"
          value={officialEmail}
          onChange={(e) => setOfficialEmail(e.target.value)}
          placeholder="Official Email"
        />
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          placeholder="Nationality"
        />
        <input
          type="text"
          value={officePhone}
          onChange={(e) => setOfficePhone(e.target.value)}
          placeholder="Office Phone"
        />
        <input
          type="text"
          value={homePhone}
          onChange={(e) => setHomePhone(e.target.value)}
          placeholder="Home Phone"
        />
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
        />
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
        />
        <input
          type="text"
          value={jobLevel}
          onChange={(e) => setJobLevel(e.target.value)}
          placeholder="Job Level"
        />
        <input
          type="text"
          value={salutation}
          onChange={(e) => setSalutation(e.target.value)}
          placeholder="Salutation"
        />
        <input
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          placeholder="Father's Name"
        />
 
        <input
          type="text"
          value={emergencyFirstName}
          onChange={(e) => setEmergencyFirstName(e.target.value)}
          placeholder="Emergency First Name"
        />
        <input
          type="text"
          value={emergencyLastName}
          onChange={(e) => setEmergencyLastName(e.target.value)}
          placeholder="Emergency Last Name"
        />
        <input
          type="text"
          value={emergencyAddress}
          onChange={(e) => setEmergencyAddress(e.target.value)}
          placeholder="Emergency Address"
        />
        <input
          type="text"
          value={emergencyMobileNumber}
          onChange={(e) => setEmergencyMobileNumber(e.target.value)}
          placeholder="Emergency Mobile Number"
        />
        <input
          type="text"
          value={emergencyAlternateMobileNumber}
          onChange={(e) => setEmergencyAlternateMobileNumber(e.target.value)}
          placeholder="Emergency Alternate Mobile Number"
        />
        <input
          type="text"
          value={emergencyCountryName}
          onChange={(e) => setEmergencyCountryName(e.target.value)}
          placeholder="Emergency Country"
        />
        <input
          type="email"
          value={emergencyEmailId}
          onChange={(e) => setEmergencyEmailId(e.target.value)}
          placeholder="Emergency Email ID"
        />
        <input
          type="email"
          value={emergencyAlternateEmailId}
          onChange={(e) => setEmergencyAlternateEmailId(e.target.value)}
          placeholder="Emergency Alternate Email ID"
        />
 
        {/* Address */}
        <input
          type="text"
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
          placeholder="Address Type"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="Telephone"
        />
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Zip Code"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
        />
 
        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>{success}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
 
export default EmployeeRegister;