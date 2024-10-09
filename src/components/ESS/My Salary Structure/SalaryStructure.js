import React from 'react';
import './SalaryStructure.css'; // Create and link your CSS file
//import backButtonImage from '../../../Assets/backButtonImage.jpg';
import pdfIcon from '../../../Assets/pdfIcon.jpg'; // Replace with the actual path to your PDF icon
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SalaryStructure = () => {

  const handleDownloadPDF = () => {
    const input = document.getElementById('salary-structure-container');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('salary_structure.pdf');
    });
  };

  return (
    <div className="salary-structure-main-container" id="salary-structure-container">
      <div className="salary-header">
      <button className="back-button">
        <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h1>My Salary Structure</h1>
        <img 
          src={pdfIcon} 
          alt="Download PDF" 
          className="pdf-download-icon" 
          onClick={handleDownloadPDF} 
        />
      </div>
      <div className="personal-info-container">
        <h2>Personal Information</h2>
        <table className="personal-info-table">
          <tbody>
            <tr>
              <td>Emp Code:</td>
              <td>109</td>
              <td>Name:</td>
              <td>Siddhesh Gotmare</td>
            </tr>
            <tr>
              <td>Designation:</td>
              <td>Jr. Software Engineer</td>
              <td>Department:</td>
              <td>Product Engineering & Innovations</td>
            </tr>
            <tr>
              <td colSpan="8" className="no-records-1">No records Found</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>1) Any deduction shall be applicable as per the govt. Laws.</p>
      <p>2) Income Tax will be deducted at source at the prevailing rate under the Income Tax Act 1961.</p>
    </div>
  );
};

export default SalaryStructure;