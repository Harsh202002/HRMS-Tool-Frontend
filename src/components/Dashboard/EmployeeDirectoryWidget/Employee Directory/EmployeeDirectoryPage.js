import React from "react";
import "./EmployeeDirectoryPage.css";
import img from "../../../../Assets/ImageAvtar.jpg"

const employees = [
    { name: "Abdul Ahad", role: "Jr. Software Engineer", image: "placeholder.jpg" },
    { name: "Aditya Raj", role: "Jr. Software Engineer", image: "placeholder.jpg" },
    { name: "Ananya Mukherjee", role: "Jr. Software Engineer", image: "placeholder.jpg" },
    { name: "Aneesh Nedunoori", role: "Jr. Software Engineer", image: "placeholder.jpg" },
    { name: "Antu Sanbui", role: "Jr. Software Engineer", image: "placeholder.jpg" },
    { name: "Apoorva Singh", role: "Jr. Software Engineer", image: "placeholder.jpg" },
    { name: "Arindam Ghosh", role: "CEO & Founder", image: "placeholder.jpg" },
    { name: "Dia Das", role: "Jr. Software Engineer", image: "placeholder.jpg" }
];

const EmployeeCard = ({ employee }) => (
    <div className="employee-directory-page-employee-card">
        <img src={employee.image} alt="Avatar" />
        <h2>{employee.name}</h2>
        <p>{employee.role}</p>
    </div>
);

const EmployeeDirectoryPage = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="employee-directory-page-main-container">
            <div className="employee-directory-page-header">
                <button onClick={goBack}>&#8592;</button>
                <h1>Employee Directory</h1>
                <button className="employee-directory-page-filter-button">&#x1F50D;</button>
                </div>
            <div className="employee-directory-page-employee-grid">
                {employees.map((employee, index) => (
                    <EmployeeCard key={index} employee={employee} />
                ))}
            </div>
        </div>
    );
};

export default EmployeeDirectoryPage;
